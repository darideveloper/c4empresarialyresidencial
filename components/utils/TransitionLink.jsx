"use client"

import { Link } from '@/i18n/routing'
import { useRouter } from '@/i18n/routing'


export function TransitionLink ({ href, onClick, disable, ...props }) {

  const router = useRouter()

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  async function handleTransition(e) {

    if (disable === 'true') return

    // Start animation
    e.preventDefault()
    const transitionClass = 'page-transition'
    const transitionDuration = 400
    const body = document.querySelector('main')
    body.classList.add(transitionClass)
    await sleep(transitionDuration)

    // Change page
    router.push(href)

    // End animation
    await sleep(transitionDuration)
    body.classList.remove(transitionClass)
  }

  return (
    <Link
      href={href}
      onClick={(e) => {
        onClick && onClick()
        handleTransition(e)
      }}
      {...props}
    />
  )
}