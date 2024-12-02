'use client'

import { useTranslations } from 'next-intl'


// Libs
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules'

// Components
import Image from 'next/image'
import InfoImage from '@/components/ui/InfoHoverImage'
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
 * @param {string} props.filter - Group of elements to show
* @returns 
 */
export default function SlideImages({ imagesPrefix, category, maxProducts, altPrefix, filter }) {

  // Get main translations
  const tCategory = useTranslations(`General.Products.categories.${category}`)

  // Get products data and filter
  const products = []
  for (let productIndex = 0; productIndex < maxProducts; productIndex++) {
    const productLangId = `products.${category}${productIndex + 1}`
    const product = {}
    const filterValue = tCategory(productLangId + '.filter') 
    if (filter !== 'all' && filterValue !== filter) {
      continue
    }
    product.name = tCategory(productLangId + '.name')
    product.description = tCategory(productLangId + '.description')
    product.imageSrc = `/images/${imagesPrefix}-${productIndex + 1}.png`
    product.imageAlt = `${altPrefix} ${product.name}`
    products.push(product)
  }

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
        products.map((product, index) => {

          return (
            <SwiperSlide key={index}>
              <InfoImage
                href={`/cotizar`}
                imageSrc={product.imageSrc}
                imageAlt={product.imageAlt}
                title={product.name}
                text={product.description}
              />
            </SwiperSlide>
          )
        })
      }
    </Swiper>
  )
}