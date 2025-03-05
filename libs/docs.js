import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import gfm from 'remark-gfm'

const docsDirectory = path.join(process.cwd(), 'content', 'docs-pages')


export async function getDocData(locale, name) {


  const fullPath = path.join(docsDirectory, locale, `${name}.md`)
  let fileContents
  try {
    fileContents = fs.readFileSync(fullPath, 'utf8')
  } catch (err) {
    return null
  }

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  const processedContent = await remark()
    .use(gfm)
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  // return data
  return {
    contentHtml,
    ...matterResult.data
  }
}