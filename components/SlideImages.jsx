'use client'

// Libs
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules'

// Components
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'

// Css
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'

export default function SlideImages({ imagesPrefix, maxImages }) {

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      modules={[ Navigation, Pagination, A11y, Autoplay ]}
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
        Array(maxImages).fill().map((_, index) => (
          <SwiperSlide key={index}>
            {console.log(`/images/${imagesPrefix}-${index + 1}.png`)}

            <div
              className={`
                img-wrapper
                border-2
                rounded-2xl
                overflow-hidden
                shadow-lg
              `}
            >
              <Image
                src={`/images/${imagesPrefix}-${index + 1}.png`}
                alt={`Image ${index + 1}`}
                width={300}
                height={300}
                className={`
                    w-full
                  `}
              />
            </div>
          </SwiperSlide>
        ))
      }
    </Swiper>
  )
}