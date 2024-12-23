// Libs and hooks
import { useTranslations } from 'next-intl'

// Components
import Button from '@/components/ui/Button'
import InputCounter from '@/components/ui/InputCounter'
import Subtitle from '@/components/ui/Subtitle'

// zustand
import { useQuoteFormStore } from '@/providers/quoteform-store-provider'


export default function CompanyDetails() {

  const { 
    // States
    branches,
    hasWifi,
    users,
    
    // Actions
    setBranches,
    setHasWifi,
    addUser,
    removeUser,
  } = useQuoteFormStore(
    (state) => state,
  )

  const t = useTranslations('QuotePage.form.screens.companyDetails')

  // Data
  const wifiOptions = [
    {
      value: true,
      label: t('wifi.options.yes')
    },
    {
      value: false,
      label: t('wifi.options.no')
    }
  ]

  const usersOptions = [
    "owner",
    "manager",
    "employee",
    "family",
    "other"
  ]

  return (
    <div>

      {/* Branches */}
      <div
        className={`
          branches
        `}
        data-aos="fade-up"
      >
        <Subtitle>{t('branches.question')}</Subtitle>
        <div
          className={`
            flex
            justify-center
            items-center
          `}
        >
          <InputCounter 
            minValue={1}
            value={branches}
            setValue={setBranches}
          />
        </div>
      </div>

      {/* Wifi */}
      <div
        className={`
          wifi
        `}
        data-aos="fade-up"
        data-aos-delay="600"
      >
        <Subtitle
          className={`
            mt-16
          `}
        >
          {t('wifi.question')}  
        </Subtitle>
        <div
          className={`
            wifi-options
            flex
            flex-wrap
            justify-center
            items-center
          `}
        >
          {
            wifiOptions.map((option, index) => (
              <Button
                key={index}
                onClick={() => setHasWifi(option.value)}
                className={`
                  m-2
                `}
                text={option.label}
                showArrow={false}
                active={hasWifi === option.value}
              />
            ))
          }
        </div>
      </div>

      {/* User */}
      <div
        className={`
          user
          max-w-3xl
          mx-auto
        `}
        data-aos="fade-up"
        data-aos-delay="1200"
      >
        <Subtitle
          className={`
            mt-16
          `}
        >
          {t('user.question')}  
        </Subtitle>
        <div
          className={`
            wifi-options
            flex
            flex-wrap
            justify-center
            items-center
            mb-20
          `}
        >
          {
            usersOptions.map((option, index) => (
              <Button
                key={index}
                onClick={() => {
                  if (users.includes(option)) {
                    removeUser(option)
                  } else {
                    addUser(option)
                  }
                }}
                className={`
                  m-2
                `}
                text={t(`user.options.${option}`)}
                showArrow={false}
                active={users.includes(option)}
              />
            ))
          }
        </div>
      </div>

    </div>
  )
}