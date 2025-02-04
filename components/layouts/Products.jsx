"use client"

import { useTranslations } from 'next-intl'

import Title from '@/components/ui/Title'
import InfoCard from '@/components/ui/InfoCardSvg'
import SlideImages from '@/components/ui/SlideImages'


/**
 * Products section
 * 
 * @param {Object} props - The props
 * @param {String} props.products - Category of products to show (all, residential, company)
 */
export default function Products({ productsFilter }) {
  const t = useTranslations('General.Products')

  const productsData = [
    {
      "name": "detection",
      "svg": "m11.998 5c-4.078 0-7.742 3.093-9.853 6.483-.096.159-.145.338-.145.517s.048.358.144.517c2.112 3.39 5.776 6.483 9.854 6.483 4.143 0 7.796-3.09 9.864-6.493.092-.156.138-.332.138-.507s-.046-.351-.138-.507c-2.068-3.403-5.721-6.493-9.864-6.493zm.002 3c2.208 0 4 1.792 4 4s-1.792 4-4 4-4-1.792-4-4 1.792-4 4-4zm0 1.5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5z",
      "maxProducts": 9
    },
    {
      "name": "ip", 
      "svg": "M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 17l-1.894-2.008c.485-.514 1.154-.832 1.894-.832s1.408.318 1.894.832l-1.894 2.008zm2.768-2.935c-.709-.751-1.688-1.215-2.768-1.215s-2.059.465-2.768 1.216l-1.164-1.236c1.006-1.067 2.396-1.727 3.932-1.727s2.926.66 3.932 1.727l-1.164 1.235zm2.038-2.163c-1.23-1.304-2.929-2.11-4.806-2.11s-3.576.807-4.806 2.111l-1.194-1.267c1.535-1.629 3.656-2.636 6-2.636s4.465 1.007 6 2.636l-1.194 1.266z",
      "maxProducts": 9
    },
    {
      "name": "dvr",
      "svg": "M24 9h-24v6h24v-6zm-22 4l.863-2h1.275l-.863 2h-1.275zm2.066 0l.863-2h1.275l-.863 2h-1.275zm2.067 0l.863-2h1.275l-.864 2h-1.274zm2.066 0l.863-2h1.274l-.863 2h-1.274zm3.341 0h-1.274l.863-2h1.275l-.864 2zm9.46 0c-.552 0-1-.448-1-1s.448-1 1-1c.553 0 1 .448 1 1s-.447 1-1 1zm3 4h-24v6h24v-6zm-22 4l.863-2h1.275l-.863 2h-1.275zm2.066 0l.863-2h1.275l-.863 2h-1.275zm2.067 0l.863-2h1.275l-.864 2h-1.274zm2.066 0l.863-2h1.274l-.863 2h-1.274zm3.341 0h-1.274l.863-2h1.275l-.864 2zm9.46 0c-.552 0-1-.448-1-1s.448-1 1-1c.553 0 1 .448 1 1s-.447 1-1 1zm1-14h-20l4-6h12l4 6z",
      "maxProducts": 9
    }
  ]

  return (
    <section
      id="products"
      className={`
        products
        my-20 sm:my-20
        container
        mx-auto
      `}
    >
      <Title>{t('title')}</Title>

      <div className="cards-wrapper">
        {
          productsData.map((category, index) => (
            <article
              key={index}
              className={`
                flex
                flex-col ${category.name == "ip" ? 'lg:flex-row-reverse' : 'lg:flex-row'}
                align-center
                justify-center
                my-20
              `}
            >
              <InfoCard
                key={index}
                svgPath={category.svg}
                title={t(`categories.${category.name}.title`)}
                description={t(`categories.${category.name}.description`)}
                className={`
                  border-white
                  text-black
                  flex
                  flex-col
                  items-start
                  justify-center
                  w-full
                  group-hover:translate-y-2
                `}
                svgClassName={`
                  fill-blue
                  mx-0
                  w-12 h-12
                  group-hover:animate-bounce
                `}
              />

              <div
                className={`
                  slide-wrapper
                  md:col-span-2
                  w-full lg:w-2/3
                `}
              >
                <SlideImages
                  imagesPrefix={`products/${category.name}`}
                  category={category.name}
                  maxProducts={category.maxProducts}
                  altPrefix={t(`altPrefix`)}
                  filter={productsFilter}
                />
              </div>
            </article>
          ))
        }
      </div>
    </section>
  )
}