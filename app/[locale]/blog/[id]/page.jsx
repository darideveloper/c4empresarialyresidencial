// Libs
import { getAllPostIds, getPostData } from '@/libs/posts'

// Components
import Title from '@/components/ui/Title'
import Image from 'next/image'
import PostMeta from '@/components/ui/PostMeta'

// Css
import '@/css/post-content.sass'


export async function generateStaticParams() {
  // Return an array of params for static generation
  console.log("getAllPostIds", getAllPostIds())
  return getAllPostIds()
}

export default async function BlogPost({ params }) {

  // Get post data
  const { id } = await params
  const postData = await getPostData(id)

  console.log({postData, id})

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
        src={`/images/posts/banners/${postData.id}.webp`}
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
  const { id } = await params
  const postData = await getPostData(id)

  return {
    description: postData.description,
    locale: postData.lang,
    keywords: postData.keywords,
    author: postData.author,
  }
}