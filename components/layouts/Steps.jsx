import StepBtn from '@/components/ui/StepBtn'

/**
 * Steps component for multi-step forms
 * 
 * @param {object} props - Props object
 * @param {array} props.screensData - Array of steps data
 * @param {number} props.currentStep - Current step index
 * @param {function} props.setStep - Function to handle click event
 * @returns 
 */
export default function Steps({ screensData, currentStep, setStep }) {
  return (
    <div
      className={`
        steps
        flex
        justify-center
        items-center
        my-8
      `}
    >
      {
        screensData.map((step, index) => {
          return (
            <StepBtn
              key={index}
              number={index + 1}
              isCompleted={index <= currentStep}
              isActive={index === currentStep}
              onClick={() => setStep(index)}
            />
          )
        })
      }
    </div>
  )
}