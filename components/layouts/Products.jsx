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
      "name": "security",
      "svg": "M12 0c-3.371 2.866-5.484 3-9 3v11.535c0 4.603 3.203 5.804 9 9.465 5.797-3.661 9-4.862 9-9.465v-11.535c-3.516 0-5.629-.134-9-3zm-.548 15l-3.452-3.362 1.237-1.239 2.215 2.123 4.382-4.475 1.238 1.238-5.62 5.715z",
      "maxProducts": 5
    },
    {
      "name": "control",
      "svg": "M22 1h-20v14h20v-14zm-2 12h-16v-10h16v10zm2 3h-20l-2 7h24l-2-7zm-12.228 6l.466-2h3.524l.466 2h-4.456z",
      "maxProducts": 5
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
                flex-col ${category.name == "security" ? 'lg:flex-row-reverse' : 'lg:flex-row'}
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