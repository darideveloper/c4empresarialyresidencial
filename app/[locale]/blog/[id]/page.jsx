// Libs
import { getAllPostIds, getPostData } from '@/libs/posts'
import { useTranslations } from 'next-intl'

// Components
import Title from '@/components/ui/Title'
import Image from 'next/image'
import PostMeta from '@/components/ui/PostMeta'

// Css
import '@/css/post-content.sass'


export async function generateStaticParams() {
  // Return an array of params for static generation
  return getAllPostIds()
}

export default async function UserProfile({ params }) {

  // Get post data
  const { id } = await params
  const postData = await getPostData(id)

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