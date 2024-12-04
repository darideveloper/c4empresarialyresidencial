"use client"

import { useTranslations } from 'next-intl'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, A11y, Autoplay } from 'swiper/modules'
import Title from '@/components/ui/Title'
import Testimonial from '@/components/ui/Testimonial'

import 'swiper/css'
import 'swiper/css/navigation'


/**
 * Testimonials slider section
 */
export default function Testimonials() {
  const t = useTranslations('HomePage.Testimonials')
  const tMeta = useTranslations('Meta')

  const testimonialNames = [
    "juan",
    "maria",
  ]

  return (
    <section
      id="testimonials"
      className={`
        testimonials
        container
        mx-auto
        max-w-4xl
        my-16
      `}
    >
      <Title>{t('title')}</Title>

      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        modules={[Navigation, A11y, Autoplay]}
        navigation
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
      >
        {
          testimonialNames.map((name, index) => {

            let quote = ""
            quote = t(`cards.${name}.description.beforeText`)
            quote += " " + tMeta('company') + " "
            quote += t(`cards.${name}.description.afterText`)

            return (
              <SwiperSlide
                key={index}
              >
                <Testimonial
                  imageSrc={`${name}.webp`}
                  alt={t(`imagesAlt`)}
                  quote={quote}
                  client={t(`cards.${name}.name`)}
                  charge={t(`cards.${name}.charge`)}
                />
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}