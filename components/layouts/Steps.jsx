import StepBtn from '@/components/ui/StepBtn'

/**
 * Steps component for multi-step forms
 * 
 * @param {object} props - Props object
 * @param {array} props.stepsData - Array of steps data
 * @param {number} props.currentStep - Current step index
 * @param {function} props.setStep - Function to handle click event
 * @returns 
 */
export default function Steps({ stepsData, currentStep, setStep }) {
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
        stepsData.map((step, index) => {
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