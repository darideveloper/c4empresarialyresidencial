/**
 * Button with number, text and line to show steps
 * 
 * @param {object} props - Props object
 * @param {number} props.number - Step number
 * @param {boolean} props.isCompleted - Step completed status
 * @param {boolean} props.isActive - Step active status
 * @param {function} props.onClick - Function to handle click event
 * @returns 
 */
export default function StepBtn({ number, isCompleted, isActive, onClick }) {

  const isNextStep = !isCompleted && !isActive
  const canGoBack = isCompleted && !isActive

  return (
    <button
      className={`
        step
      `}
      disabled={!canGoBack}
      onClick={() => onClick()}
    >
      <p
        className={`
          flex
          items-center
          justify-center
          // 'hide' next steps
          ${isNextStep ? 'opacity-60' : 'opacity-100'}
        `}
      >
        <span
          className={`
            line
            w-[10vw]
            max-w-[60px]
            h-1
            inline-block
            
            // highlight completed
            ${isCompleted ? 'bg-blue' : 'bg-grey'}
          `}
        />
        <span
          className={`
            number
            text-xl
          text-white
            w-8
            h-8
            rounded-full
            inline-block
            leading-8
            duration-300
            
            // highlight completed
            ${isCompleted ? 'bg-blue' : 'bg-grey'}
            ${canGoBack && 'hover:scale-125'}

            // highlight active
            ${isActive ? 'scale-150' : 'scale-100'}
          `}
        >
          {number}
        </span>
      </p>

    </button>

  )
}