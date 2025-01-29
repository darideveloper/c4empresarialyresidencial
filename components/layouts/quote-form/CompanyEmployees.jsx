import Button from "@/components/ui/Button"

// zustand
import { useQuoteFormStore } from '@/providers/quoteform-store-provider'

/**
 * Company employees screen for QuoteForm
 */
export default function CompanyEmployees() {

  // Zustand data
  const { companyEmployees, setCompanyEmployees } = useQuoteFormStore(
    (state) => state,
  )

  const employeesOptions = [
    "1 - 5",
    "6 - 9",
    "10 - 19",
    "20 - 49",
    "+50"
  ]

  return (
    <div
      className={`
        employees-wrapper
        flex
        flex-col
        justify-center
        items-center
        w-full
        max-w-sm
        mx-auto
        gap-5
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
              !my-0
            `}
            active={companyEmployees === employees}
          />
        ))
      }
    </div>
  )
}