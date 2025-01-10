
// Libs
import { getSortedPostsData } from '@/libs/posts'
import { fontTitle } from '@/libs/fonts'

// Components
import Image from 'next/image'
import Link from 'next/link'
import Subtitle from '@/components/ui/Subtitle'
import ArrowSvg from '@/components/icons/ArrowSvg'

export default function BlogPage() {

  const allPostsData = getSortedPostsData()

  return (
    <section 
      className={`
        container
        mx-auto
      `}
    >
      <div 
        className={`
          title
          text-center
          my-8
        `}
      >
        <h1 
          className={`
            ${fontTitle.className}
            text-4xl
            font-bold
            mb-2
          `}
        >
          C4 Blog
        </h1>
        <p
          className={`
          `}
        >
          Welcome to the C4 Blog! Here you'll find all of our latest news and updates.
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
        {allPostsData.map(({ id, date, title, lang, description }) => (
          <li className={``} key={id}>
            <Link
              href={`/blog/${id}`}
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
                alt={`Flag of ${lang}`}
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
                  src={`/images/posts/banners/${id}.webp`}
                  alt={title}
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

              {/* Post description */}
              <p
                className={`
                  date
                  opacity-50
                  my-0
                  mt-2
                `}
              >
                {date}
              </p>
              <Subtitle
                className={`
                  !text-left
                  !mb-0
                  duration-300
                  group-hover:text-blue
                `}
              >
                {title}
              </Subtitle>
              <p
                className={`
                  description
                  text-sm
                `}
              >
                {description}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}