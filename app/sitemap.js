import { getSortedPostsData } from '@/libs/posts'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL

export default async function sitemap() {

  // Langs
  const langs = ["en", "es"]

  // Static pages
  const staticPages = [
    "blog",
    "company",
    "privacy",
    "quote",
    "residential",
  ]

  // Fetch blog posts
  const posts = await getSortedPostsData()

  // Generate sitemap array
  const sitemap = []

  for (const lang of langs) {
    sitemap.push({
      url: `${siteUrl}/${lang}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    })

    for (const page of staticPages) {
      sitemap.push({
        url: `${siteUrl}/${lang}/${page}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      })
    }

    for (const post of posts) {
      sitemap.push({
        url: `${siteUrl}/${lang}/blog/${post.slug}`,
        lastModified: new Date(post.date).toISOString(),
        changeFrequency: 'weekly',
        priority: 0.7,
      })
    }
  }

  return sitemap
}
