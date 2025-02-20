import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'content', 'posts')

/**
 * Get all post data
 * 
 * @returns {Array} allPostsData - Array of post data
 * @returns {string} allPostsData.slug - Post ID
 * @returns {string} allPostsData.date - Post date
 * @returns {string} allPostsData.title - Post title
 * @returns {string} allPostsData.lang - Post language
 * @returns {string} allPostsData.description - Post description
 * @returns {string} allPostsData.content - Post content
 */
export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get slug
    const slug = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the slug
    return {
      slug,
      ...matterResult.data,
    }
  })
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

/**
 * Return the slugs of all posts
 * @returns {Array} fileNames - Array of post IDs
 * @returns {object} fileNames.params - Post ID
 * @returns {string} fileNames.params.slug - Post ID
 */
export function getAllPostSlugs() {
  return fs.readdirSync(postsDirectory).map((fileName) => ({
    slug: fileName.replace(/\.md$/, ''),
  }))
}


/**
 * Return single post data
 * 
 * @param {string} slug - Post ID
 * @returns {object} postData - Post data
 * @returns {string} postData.slug - Post ID
 * @returns {string} postData.date - Post date
 * @returns {string} postData.title - Post title
 * @returns {string} postData.lang - Post language
 * @returns {string} postData.description - Post description
 * @returns {string} postData.content - Post content
 */
export async function getPostData(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.md`)

  // validate file path
  if (!fs.existsSync(fullPath)) {
    return null
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the slug
  return {
    slug,
    contentHtml,
    ...matterResult.data,
  }
}