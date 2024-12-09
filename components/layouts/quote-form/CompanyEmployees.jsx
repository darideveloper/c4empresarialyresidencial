import Button from "@/components/ui/Button"

// zustand
import { useQuoteFormStore } from '@/providers/quoteform-store-provider'

export default function CompanyEmployees() {

  // Zustand data
  const { companyEmployees, setCompanyEmployees } = useQuoteFormStore(
    (state) => state,
  )

  const employeesOptions = [
    "1 - 19",
    "20 - 49",
    "50 - 499",
    "500 - 4,999",
    "5,000+"
  ]

  return (
    <div
      className={`
        employees-options
        flex
        flex-col
        justify-center
        items-center
        w-full
        max-w-sm
        mx-auto
      `}
    >
      {
        employeesOptions.map((employees, index) => (
          <Button
            key={index}
            text={employees}
            onClick={() => setCompanyEmployees(employees)}
            showArrow={false}
            className={`
              w-full
            `}
            active={companyEmployees === employees}
          />
        ))
      }
    </div>
  )
}