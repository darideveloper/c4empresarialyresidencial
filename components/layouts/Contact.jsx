import { useForm } from "react-hook-form"
import { useTranslations } from 'next-intl'

import Title from '@/components/Title'
import Link from 'next/link'
import Input from '@/components/Input'
import Button from '@/components/Button'


/**
 * Contact section for homepage
 */
export default function Contact() {

  const t = useTranslations('HomePage.Contact')

  // Form state
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data)

  // Socials
  const socials = [
    {
      name: 'facebook',
      url: 'https://facebook.com',
      svgPath: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z"
    },
    {
      name: 'instagram',
      url: 'https://instagram.com',
      svgPath: "M15.233 5.488c-.843-.038-1.097-.046-3.233-.046s-2.389.008-3.232.046c-2.17.099-3.181 1.127-3.279 3.279-.039.844-.048 1.097-.048 3.233s.009 2.389.047 3.233c.099 2.148 1.106 3.18 3.279 3.279.843.038 1.097.047 3.233.047 2.137 0 2.39-.008 3.233-.046 2.17-.099 3.18-1.129 3.279-3.279.038-.844.046-1.097.046-3.233s-.008-2.389-.046-3.232c-.099-2.153-1.111-3.182-3.279-3.281zm-3.233 10.62c-2.269 0-4.108-1.839-4.108-4.108 0-2.269 1.84-4.108 4.108-4.108s4.108 1.839 4.108 4.108c0 2.269-1.839 4.108-4.108 4.108zm4.271-7.418c-.53 0-.96-.43-.96-.96s.43-.96.96-.96.96.43.96.96-.43.96-.96.96zm-1.604 3.31c0 1.473-1.194 2.667-2.667 2.667s-2.667-1.194-2.667-2.667c0-1.473 1.194-2.667 2.667-2.667s2.667 1.194 2.667 2.667zm4.333-12h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm.952 15.298c-.132 2.909-1.751 4.521-4.653 4.654-.854.039-1.126.048-3.299.048s-2.444-.009-3.298-.048c-2.908-.133-4.52-1.748-4.654-4.654-.039-.853-.048-1.125-.048-3.298 0-2.172.009-2.445.048-3.298.134-2.908 1.748-4.521 4.654-4.653.854-.04 1.125-.049 3.298-.049s2.445.009 3.299.048c2.908.133 4.523 1.751 4.653 4.653.039.854.048 1.127.048 3.299 0 2.173-.009 2.445-.048 3.298z"
    },
    {
      name: 'twitter',
      url: 'https://twitter.com',
      svgPath: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-.139 9.237c.209 4.617-3.234 9.765-9.33 9.765-1.854 0-3.579-.543-5.032-1.475 1.742.205 3.48-.278 4.86-1.359-1.437-.027-2.649-.976-3.066-2.28.515.098 1.021.069 1.482-.056-1.579-.317-2.668-1.739-2.633-3.26.442.246.949.394 1.486.411-1.461-.977-1.875-2.907-1.016-4.383 1.619 1.986 4.038 3.293 6.766 3.43-.479-2.053 1.08-4.03 3.199-4.03.943 0 1.797.398 2.395 1.037.748-.147 1.451-.42 2.086-.796-.246.767-.766 1.41-1.443 1.816.664-.08 1.297-.256 1.885-.517-.439.656-.996 1.234-1.639 1.697z"
    },
  ]

  // Inputs data
  const inputsData = [
    {
      "name": "name",
      "type": "text",
    },
    {
      "name": "email",
      "type": "email",
    },
    {
      "name": "phone",
      "type": "tel",
    },
    {
      "name": "address",
      "type": "text",
    }
  ]
  for (const inputData of inputsData) {
    inputData.register = register
    inputData.errors = errors
    inputData.required = true
    inputData.label = t(`form.inputs.${inputData.name}.label`)
    inputData.placeholder = t(`form.inputs.${inputData.name}.placeholder`)
    inputData.errorMessage = t(`form.inputs.${inputData.name}.errorMessage`)
  }

  return (
    <div
      className={`
        contact
        flex
        flex-col
        items-center
        justify-center
        container
        mx-auto
        relative
        max-w-7xl
        my-32
      `}
    >
      <div
        className={`
          socials
          w-5/12
          bg-blue
          py-4
          rounded-lg
          shadow-lg
          absolute
          -left-6
          top-1/2
          -translate-y-1/2
        `}
      >
        <Title
          className={`
            text-white
            text-xl
            w-full
            text-center
          `}
        >
          {t('socials.title')}
        </Title>

        <div 
          className={`
            map-wrapper
            w-full
            h-72
            bg-grey
            mb-8
            debug
          `}
        >

        </div>

        <div
          className={`
            social-icons
            flex
            flex-wrap
            items-center
            justify-center
            gap-4
            w-11/12
            mx-auto
          `}
        >
          {socials.map((social, index) => (
            <Link
              key={index}
              href={social.url}
              title={t(`socials.iconsTitle`) + ' ' + social.name}
              className={`
                p-2
                duration-300
                hover:opacity-75
                hover:-translate-y-1
                debug
              `}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className={`
                  fill-white
                  w-10
                  h-10
                `}
              >
                <path d={social.svgPath} />
              </svg>
            </Link>
          ))}
        </div>
      </div>

      <div
        className={`
          form
          shadow-lg
          py-4
          px-8
          flex
          items-center
          justify-end
          w-full
          pb-10
        `}
      >
        <div
          className={`
            content
            w-7/12
          `}
        >

          <Title>{t('form.title')}</Title>
          <form 
            onSubmit={handleSubmit(onSubmit)}
            className={`
              w-10/12
              mx-auto
            `}
          >

            {
              inputsData.map((inputData, index) => (
                <Input
                  key={index}
                  {...inputData}
                />
              ))
            }

            <Button 
              text={t('form.submit')}
              className={`
                w-7/12
              `}
            />
          </form>
        </div>
      </div>
    </div>

  )
}