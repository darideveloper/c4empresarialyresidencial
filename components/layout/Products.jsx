import { useTranslations } from 'next-intl'

import Title from '@/components/Title'
import InfoCard from '@/components/InfoCard'
import SlideImages from '@/components/SlideImages'


/**
 * Products section for homepage
 */
export default function Products() {
  const t = useTranslations('HomePage.Products')

  const productsData = [
    {
      "name": "camera",
      "svg": "M16 18c0 1.104-.896 2-2 2h-12c-1.105 0-2-.896-2-2v-12c0-1.104.895-2 2-2h12c1.104 0 2 .896 2 2v12zm8-14l-6 6.223v3.554l6 6.223v-16z",
      "maxImages": 5,
    },
    {
      "name": "security",
      "svg": "M12 0c-3.371 2.866-5.484 3-9 3v11.535c0 4.603 3.203 5.804 9 9.465 5.797-3.661 9-4.862 9-9.465v-11.535c-3.516 0-5.629-.134-9-3zm-.548 15l-3.452-3.362 1.237-1.239 2.215 2.123 4.382-4.475 1.238 1.238-5.62 5.715z",
      "maxImages": 5,
    },
    {
      "name": "control",
      "svg": "M22 1h-20v14h20v-14zm-2 12h-16v-10h16v10zm2 3h-20l-2 7h24l-2-7zm-12.228 6l.466-2h3.524l.466 2h-4.456z",
      "maxImages": 5,
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
          productsData.map((productData, index) => (
            <article
              key={index}
              className={`
                flex
                flex-col ${productData.name == "security" ? 'lg:flex-row-reverse' : 'lg:flex-row'}
                align-center
                justify-center
                my-20
                group
              `}
            >
              <InfoCard
                key={index}
                svgPath={productData.svg}
                title={t(`products.${productData.name}.title`)}
                description={t(`products.${productData.name}.description`)}
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
                  imagesPrefix={`products/${productData.name}`}
                  maxImages={productData.maxImages}
                />
              </div>
            </article>
          ))
        }
      </div>
    </section>
  )
}