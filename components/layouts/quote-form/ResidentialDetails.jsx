// Libs and hooks
import { useTranslations } from 'next-intl'

// Components
import Button from '@/components/ui/Button'
import InputCounter from '@/components/ui/InputCounter'
import Subtitle from '@/components/ui/Subtitle'

// zustand
import { useQuoteFormStore } from '@/providers/quoteform-store-provider'


export default function ResidentialDetails() {

  const { 
    // States
    rooms,
    hasWifi,
    monitoring,
    hasCameras,
    
    // Actions
    setRooms,
    setHasWifi,
    addMonitoring,
    removeMonitoring,
    setHasCameras,
  } = useQuoteFormStore(
    (state) => state,
  )

  const t = useTranslations('QuotePage.form.screens.residentialDetails')

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

  const alreadyCamerasOptions = [
    {
      value: true,
      label: t('alreadyCameras.options.yes')
    },
    {
      value: false,
      label: t('alreadyCameras.options.no')
    }
  ]

  const monitoringOptions = [
    "employees",
    "children",
    "perimeter",
    "pets",
    "assets",
    "other"
  ]

  return (
    <div>

      {/* Rooms */}
      <div
        className={`
          rooms
        `}
        data-aos="fade-up"
      >
        <Subtitle>{t('rooms.question')}</Subtitle>
        <div
          className={`
            flex
            justify-center
            items-center
          `}
        >
          <InputCounter 
            minValue={1}
            value={rooms}
            setValue={setRooms}
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

      {/* Already have cameras */}
      <div
        className={`
          wifi
        `}
        data-aos="fade-up"
        data-aos-delay="1200"
      >
        <Subtitle
          className={`
            mt-16
          `}
        >
          {t('alreadyCameras.question')}  
        </Subtitle>
        <div
          className={`
            cameras-options
            flex
            flex-wrap
            justify-center
            items-center
          `}
        >
          {
            alreadyCamerasOptions.map((option, index) => (
              <Button
                key={index}
                onClick={() => setHasCameras(option.value)}
                className={`
                  m-2
                `}
                text={option.label}
                showArrow={false}
                active={hasCameras === option.value}
              />
            ))
          }
        </div>
      </div>

      {/* Monitoring */}
      <div
        className={`
          monitoring
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
          {t('monitoring.question')}  
        </Subtitle>
        <div
          className={`
            monitoring-options
            flex
            flex-wrap
            justify-center
            items-center
          `}
        >
          {
            monitoringOptions.map((option, index) => (
              <Button
                key={index}
                onClick={() => {
                  if (monitoring.includes(option)) {
                    removeMonitoring(option)
                  } else {
                    addMonitoring(option)
                  }
                }}
                className={`
                  m-2
                `}
                text={t(`monitoring.options.${option}`)}
                showArrow={false}
                active={monitoring.includes(option)}
              />
            ))
          }
        </div>
      </div>

    </div>
  )
}