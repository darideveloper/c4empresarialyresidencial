import { useTranslations } from 'next-intl'

import InfoCardImage from '@/components/InfoCardImage'
import CardsGrid from '@/components/layouts/templates/CardsGrid'

/**
 * Profits section cards for homepage
 */
export default function Profits() {
  const t = useTranslations('HomePage.Profits')

  // Generate cards data
  const cardsData = [
    {
      "name": "prevention", 
    },
    {
      "name": "peace",
    }, 
    {
      "name": "support",
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
        bg-transparent hover:bg-blue
        text-white
        group
        hover:scale-105
      `}
      imageClassName={`
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
        bg-grey
      `}
    >
      {infoCards}
    </CardsGrid>
  )
}