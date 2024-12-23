// Components
import Button from '@/components/ui/Button'


export default function InputCounter({ minValue=0, maxValue=100, value, setValue }) {
  return (
    <div className="counter">
      <Button
        text="-"
        showArrow={false}
        className={`
          text-2xl
          !px-4
          !py-2
          leading-7
          !mt-0
        `}
        onClick={() => {
          if (value > minValue) {
            setValue(value - 1)
          }
        }}
        disabled={value <= minValue}
      />
      <input
        label="Branches"
        name="branches"
        required
        placeholder="Branches"
        type="number"
        className={`
          bg-white
          text-center
          focus:outline-none
          [appearance:textfield]
          [&::-webkit-outer-spin-button]:appearance-none
          [&::-webkit-inner-spin-button]:appearance-none
        `}
        value={value}
        onChange={(e) => {
          if (e.target.value < minValue) {
            setValue(minValue)
          } else if (e.target.value > maxValue) {
            setValue(maxValue)
          } else {
            setValue(e.target.value)
          }
        }}
        min={minValue}
        max={maxValue}
      />
      <Button
        text="+"
        showArrow={false}
        className={`
          text-2xl
          !px-4
          !py-2
          leading-7
          !mt-0
        `}
        onClick={() => {
          if (value < maxValue) {
            setValue(value + 1)
          }
        }}
        disabled={value >= maxValue}
      />
    </div>
  )
}