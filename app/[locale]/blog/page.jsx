
// Libs
import { getSortedPostsData } from '@/libs/posts'
import { fontTitle } from '@/libs/fonts'
import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'

// Components
import Image from 'next/image'
import Link from 'next/link'
import Title from '@/components/ui/Title'
import ArrowSvg from '@/components/icons/ArrowSvg'
import PostMeta from '@/components/ui/PostMeta'

// Current page slug
const page = "blog"


export default function BlogPage() {

  const allPostsData = getSortedPostsData()

  // Get translations
  const t = useTranslations(`Blog`)
  const tMeta = useTranslations('Meta')

  // Metadata
  // Auto generate post for breadcrumbs
  const breadcrumbList = []
  for (const postData of allPostsData) {
    breadcrumbList.push({
      "@type": "ListItem",
      "position": breadcrumbList.length + 1,
      "name": postData.title,
      "item": `${process.env.NEXT_PUBLIC_SITE_URL}/es/blog/${postData.slug}`
    })
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": tMeta(`${page}.title`),
    "url": `${process.env.NEXT_PUBLIC_SITE_URL}/es/${page}`,
    "description": tMeta(`${page}.description`),
    "publisher": {
      "@type": "Organization",
      "name": tMeta('author'),
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [...breadcrumbList]
    },
  }

  return (
    <section
      className={`
        container
        mx-auto
      `}
    >
      {/* Render json ld */}
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div
        className={`
          title
          text-center
          my-8
        `}
      >
        <Title
          className={`
            ${fontTitle.className}
            font-bold
            mb-2
          `}
          isH1={true}
        >
          {t('Hero.title')}
        </Title>
        <p
          className={`
            max-w-3xl
            mx-auto
            w-full
          `}
        >
          {t('Hero.text')}
        </p>
      </div>

      <ul
        className={`
          grid
          gap-6
          grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
          mt-8
        `}
      >
        {allPostsData.map(({ slug, date, title, lang, description }) => (
          <li className={``} key={slug}>
            <article>
              <Link
                href={`./blog/${slug}`}
                className={`
                group
                relative
              `}
              >
                {/* Post lang flag */}
                <Image
                  src={`/images/flags/${lang}.webp`}
                  width={30}
                  height={30}
                  className={`
                  absolute
                  top-2
                  right-2
                  rounded-full
                  z-10
                  opacity-50
                `}
                  alt={t('Posts.flagAlt')}
                />

                {/* Post image */}
                <div
                  className={`
                  img-wrapper
                  w-full
                  h-64 sm:h-56
                  overflow-hidden
                  rounded-lg
                  relative
                `}
                >
                  <Image
                    src={`/images/posts/banners/${slug}.webp`}
                    alt={t('Posts.bannerAlt') + " " + title}
                    width={400}
                    height={300}
                      className={`
                      w-full
                      duration-300
                      opacity-75
                      group-hover:opacity-100
                      group-hover:scale-110
                    `}
                  />
                  <ArrowSvg
                    className={`
                    absolute
                    top-1/2
                    left-1/2
                    transform
                    -translate-x-1/2
                    -translate-y-1/2
                    w-12
                    h-12
                    -rotate-45
                    fill-white
                    opacity-0
                    duration-600
                    group-hover:opacity-40
                    group-hover:scale-125
                  `}
                  />
                </div>

                {/* Post meta */}
                <PostMeta date={date} />

                {/* POst title and description */}
                <Title
                  className={`
                  !text-left
                  !mb-0
                  duration-300
                  group-hover:text-blue
                `}
                >
                  {title}
                </Title>
                <p
                  className={`
                  description
                  text-sm
                `}
                >
                  {description}
                </p>
              </Link>
            </article>
          </li>
        ))}
      </ul>
    </section>
  )
}

export async function generateMetadata({ params }) {

  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'Meta' })

  return {
    title: t('blog.title'),
    description: t('blog.description'),
  }
}