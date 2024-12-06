import { useTranslations } from 'next-intl'

import Title from '@/components/ui/Title'
import CtaXL from '@/components/ui/CtaXL'


/**
 * ResidentialCompany buttons
 */
export default function HomeCompany() {

  const t = useTranslations('HomePage.ResidentialCompany')

  const servicesData = [
    {
      "name": "company",
      "link": "/company"
    },
    {
      "name": "residential",
      "link": "/residential"
    },
  ]

  return (
    <section
      id="home-company"
      className={`
        home-company
        mt-10 sm:mt-0
        container
        mx-auto
      `}
    >

      <Title>
        {t('title')}
      </Title>

      <div
        className={`
          ctas-wrapper
          flex
          flex-col lg:flex-row
          items-center
          justify-center
          gap-4 md:gap-12
          w-full
          max-w-6xl
          mx-auto
        `}
      >
        {
          servicesData.map((serviceData, index) => (
            <CtaXL
              key={index}
              index={index}
              text={t(`services.${serviceData.name}.text`)}
              textHover={t(`services.${serviceData.name}.textHover`)}
              imageSrc={`/images/${serviceData.name}.svg`}
              imageAlt={t(`services.${serviceData.name}.imgAlt`)}
              href={serviceData.link}
            />
          ))
        }
      </div>

    </section>
  )
}