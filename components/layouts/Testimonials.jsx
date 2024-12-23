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
 * 
 * @param {object} props - Component props
 * @param {string} props.testimonialsFilter - Testimonials to render (all, residential, company)
 */
export default function Testimonials({ testimonialsFilter = "all" }) {
  const t = useTranslations('HomePage.Testimonials')
  const tMeta = useTranslations('Meta')

  let testimonialsData = [
    {
      "name": "carlos",
      "type": "residential"
    },
    {
      "name": "gerardo",
      "type": "company"
    },
    {
      "name": "laura",
      "type": "residential"
    },
    {
      "name": "carolina",
      "type": "company"
    },
    {
      "name": "jose",
      "type": "residential"
    },
    {
      "name": "ricardo",
      "type": "company"
    },
    {
      "name": "ana",
      "type": "residential"
    },
  ]

  // Filter testimonials
  if (testimonialsFilter !== "all") {
    testimonialsData = testimonialsData.filter(testimonial => testimonial.type === testimonialsFilter)
  }

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
          testimonialsData.map((testimonialData, index) => {

            let quote = ""
            quote = t(`cards.${testimonialData.name}.description.beforeText`)
            quote += " " + tMeta('title') + " "
            quote += t(`cards.${testimonialData.name}.description.afterText`)

            return (
              <SwiperSlide
                key={index}
              >
                <Testimonial
                  quote={quote}
                  client={t(`cards.${testimonialData.name}.name`)}
                  charge={t(`cards.${testimonialData.name}.charge`)}
                />
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}