// Libs
import { getAllPostSlugs, getPostData } from '@/libs/posts'
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


  return (
    <section
      className={`
        container
        mx-auto
        max-w-6xl
      `}
    >
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

  // Get post data
  const { slug } = await params
  const postData = await getPostData(slug)

  return {
    title: postData.title,
    description: postData.description,
    locale: postData.lang,
    keywords: postData.keywords,
    authors: [
      { "name": postData.author }
    ]
  }
}