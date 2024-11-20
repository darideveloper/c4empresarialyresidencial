'use client'

import { useTranslations } from 'next-intl'


// Libs
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules'

// Components
import Image from 'next/image'
import InfoImage from '@/components/InfoImage'
import { Swiper, SwiperSlide } from 'swiper/react'

// Css
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'

/**
 * Slider of images with info (title and text) using Swiper
 * 
 * @param {object} props
 * @param {string} props.imagesPrefix - Prefix of the images src
 * @param {string} props.category - Category name of the images
 * @param {number} props.maxProducts - Max number of products to show
 * @param {string} props.altPrefix - Prefix of the alt text of the images
* @returns 
 */
export default function SlideImages({ imagesPrefix, category, maxProducts, altPrefix }) {

  const tCategory = useTranslations(`HomePage.Products.categories.${category}`)

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      modules={[Navigation, Pagination, A11y, Autoplay]}
      navigation

      // autoplay & loop
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false
      }}
      breakpoints={{
        320: {
          slidesPerView: 2,
          spaceBetween: 10
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20
        },
      }}
    >
      {
        Array.from({ length: maxProducts }, (_, index) => {

          const productLandId = `products.${category}${index + 1}`

          return (
            <SwiperSlide key={index}>
              <InfoImage
                href={`/cotizar`}
                imageSrc={`/images/${imagesPrefix}-${index + 1}.png`}
                imageAlt={`${altPrefix} ${tCategory(productLandId + '.name')}`}
                title={tCategory(productLandId + '.name')}
                text={tCategory(productLandId + '.description')}
              />
            </SwiperSlide>
          )
        })
      }
    </Swiper>
  )
}