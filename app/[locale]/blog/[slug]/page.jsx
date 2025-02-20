// Libs
import { getPostData } from '@/libs/posts'
import { notFound } from 'next/navigation'
import { getTranslations } from 'next-intl/server'

// Components
import Title from '@/components/ui/Title'
import Image from 'next/image'
import PostMeta from '@/components/ui/PostMeta'

// Css
import '@/css/post-content.sass'

export default async function PostPage({ params }) {

  // Get post data
  const { slug } = await params
  const postData = await getPostData(slug)

  if (!postData) {
    notFound()
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': postData.title,
    'description': postData.description,
    'datePublished': postData.date,
    'author': {
      '@type': 'Person',
      'name': postData.author,
    },
    'keywords': postData.keywords,
    'publisher': {
      '@type': 'Organization',
      'name': postData.author,
      'logo': {
        '@type': 'ImageObject',
        'url': `${process.env.NEXT_PUBLIC_SITE_URL}/images/logo.webp`,
      },
    },
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': `${process.env.NEXT_PUBLIC_SITE_URL}/es/blog/${slug}`,
    },
    'image': {
      '@type': 'ImageObject',
      'url': `${process.env.NEXT_PUBLIC_SITE_URL}/images/posts/banners/${slug}.webp`,
    },
  }


  return (
    <section
      className={`
        container
        mx-auto
        max-w-6xl
      `}
    >
      {/* Render json ld */}
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Post banner */}
      <Image
        src={`/images/posts/banners/${postData.slug}.webp`}
        alt="Banner"
        width={1500}
        height={1500}
        className={`
          w-full
        `}
      />

      {/* Post title */}
      <div
        className={`
          content
          max-w-5xl
          mx-auto
        `}
        lang={postData.lang}
      >

        <Title
          isH1={true}
          className={`
            !text-left
            mb-2
            mt-12
          `}
        >
          {postData.title}
        </Title>

        {/* Post metadata */}
        <PostMeta
          date={postData.date}
          lang={postData.lang}
        />

        <p
          className={`
            italic
          `}
        >
          {postData.description}
        </p>
        <div
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
          className={`
            post-content
          `}
        />
      </div>
    </section>
  )
}

export async function generateMetadata({ params }) {

  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'Meta' })

  // Get post data
  const { slug } = await params
  let postData = await getPostData(slug)

  // Default post data
  if (!postData) {
    postData = {
      title: 'Post',
      description: 'Post',
      lang: 'es',
      keywords: 'Post',
      author: t('title'),
    }
  }

  return {
    title: postData.title,
    description: postData.description,
    locale: postData.lang,
    keywords: postData.keywords,
    authors: [
      { "name": postData.author }
    ],
    alternates: {
      canonical: `/es/blog/${slug}`,
    }
  }
}