import { useTranslations } from 'next-intl'

import InfoCardImage from '@/components/InfoCardImage'
import CardsGrid from '@/components/layouts/templates/CardsGrid'


/**
 * WhyUs section cards for homepage
 */
export default function WhyUs() {
  const t = useTranslations('HomePage.WhyUs')

  const cardsData = [
    {
      "name": "tech", 
    },
    {
      "name": "monitoring",
    }, 
    {
      "name": "installation",
    }
  ]

  for (const cardData of cardsData) {
    cardData.title = t(`cards.${cardData.name}.title`)
    cardData.description = t(`cards.${cardData.name}.description`)
    cardData.imageSrc = "/images/" + cardData.name + ".svg"
  }

  // Create info cards components
  const infoCards = cardsData.map((cardData, index) => (
    <InfoCardImage
      key={index + 1}
      imageSrc={cardData.imageSrc}
      title={t(`cards.${cardData.name}.title`)}
      description={t(`cards.${cardData.name}.description`)}
      className={`
        border-white hover:border-grey
        bg-transparent hover:bg-grey
        text-white
        group
        hover:scale-105
      `}
      imgClassName={`
        fill-current
        mx-auto
        w-20 h-20
      `}
      aosDelay={index * 300}
    />
  ))
  

  return (
    <CardsGrid
      title={t('title')}
      className={`
        bg-blue
      `}
    >
      {infoCards}
    </CardsGrid>
  )
}