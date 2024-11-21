import { useTranslations } from 'next-intl'

import InfoCard from '@/components/InfoCard'
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
      "svgPath": "M22 4v12h-20v-12h20zm2-2h-24v16h24v-16zm-15 12v-8l7 4-7 4zm-2 6c1 1.194 2.862 2 5 2s4-.806 5-2h-10z",
    },
    {
      "name": "peace",
      "svgPath": "M15 12c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-.199.02-.393.057-.581 1.474.541 2.927-.882 2.405-2.371.174-.03.354-.048.538-.048 1.657 0 3 1.344 3 3zm-2.985-7c-7.569 0-12.015 6.551-12.015 6.551s4.835 7.449 12.015 7.449c7.733 0 11.985-7.449 11.985-7.449s-4.291-6.551-11.985-6.551zm-.015 12c-2.761 0-5-2.238-5-5 0-2.761 2.239-5 5-5 2.762 0 5 2.239 5 5 0 2.762-2.238 5-5 5z",
    }, 
    {
      "name": "support",
      "svgPath": "M8 14.781c-.693-.041-1.295-.486-1.51-1.13-.54-1.619-.355-1.368-1.786-2.362-.45-.312-.704-.808-.704-1.321 0-.17.027-.341.085-.509.553-1.611.554-1.3 0-2.92-.058-.166-.085-.338-.085-.507 0-.514.254-1.009.704-1.322 1.43-.992 1.245-.741 1.786-2.363.225-.675.878-1.131 1.615-1.131h.005c1.765.006 1.451.109 2.889-.903.298-.209.649-.313 1.001-.313.352 0 .703.104 1.001.313 1.428 1.004 1.12.909 2.889.903h.005c.737 0 1.39.456 1.616 1.131.54 1.619.351 1.368 1.786 2.363.449.312.703.808.703 1.321 0 .169-.026.342-.085.508-.552 1.612-.554 1.302 0 2.92.059.168.085.34.085.509 0 .513-.254 1.009-.703 1.321-1.435.996-1.246.745-1.786 2.362-.216.643-.817 1.089-1.511 1.13v9.219l-3.958-3-4.042 3v-9.219zm9.714-6.781c0-3.155-2.557-5.714-5.714-5.714-3.155 0-5.714 2.559-5.714 5.714 0 3.155 2.559 5.714 5.714 5.714 3.157 0 5.714-2.559 5.714-5.714zm-5.714-4c-2.205 0-4 1.794-4 4s1.795 4 4 4c2.206 0 4-1.794 4-4s-1.794-4-4-4z"
    }
  ]

  for (const cardData of cardsData) {
    cardData.title = t(`cards.${cardData.name}.title`)
    cardData.description = t(`cards.${cardData.name}.description`)
  }

  // Create info cards components
  const infoCards = cardsData.map((cardData, index) => (
    <InfoCard
      key={index + 1}
      svgPath={cardData.svgPath}
      title={t(`cards.${cardData.name}.title`)}
      description={t(`cards.${cardData.name}.description`)}
      className={`
        border-white hover:border-grey
        bg-transparent hover:bg-grey
        text-white
        group
        hover:scale-105
      `}
      svgClassName={`
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