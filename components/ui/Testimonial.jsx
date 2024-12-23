import Image from 'next/image'

/**
 * Testimonial card
 * 
 * @param {object} props - Testimonial data
 * @param {string} props.quote - Client quote
 * @param {string} props.client - Client name
 * @returns 
 */
export default function Testimonial({ quote, client, charge }) {
  return (
    <article 
      className={`
        testimonial
        flex
        flex-col
        items-center
        justify-center
        text-center
        border-2
        border-greylight
        rounded-lg
        py-8
        px-12
      `}
    >
      <p
        className={`
          quote
          max-w-lg
        `}
        data-aos="fade-up"
        data-aos-delay="500"
      >
        {quote}
      </p>
      <h3
        className={`
          client
          text-xl
          mt-4
          font-bold
        `}
        data-aos="fade-up"
        data-aos-delay="1000"
      >
        {client}
      </h3>
      <p
        className={`
          charge
          text-sm
          text-blue
        `}
        data-aos="fade-up"
        data-aos-delay="1500"
      >
        {charge}
      </p>

    </article>
  )
}