/**
 * Input component
 * 
 * @param {object} props
 * @param {string} props.label - Label for the input
 * @param {string} props.name - Name of the input
 * @param {string} props.type - Type of the input. Default is 'text'
 * @param {object} props.register - Register object from the useForm hook
 * @param {boolean} props.required - If the input is required
 * @param {object} props.errors - Errors object from the useForm hook 
 * @param {string} props.placeholder - Placeholder for the input
 * @param {string} props.errorMessage - Error message for the input
 */
export default function Input({
  label,
  name,
  type = 'text',
  register,
  required,
  errors,
  placeholder,
  errorMessage,
}) {
  return (
    <div  
      className={`
        input-wrapper
        flex
        flex-col
        my-8
      `}
    >
      <label 
        htmlFor={`input-${name}`}
        className={`
          text-xl
          mb-2
        `}
      >
        {label}
      </label>
      <input
        type={type}
        {...register(name, { required })}
        aria-invalid={errors[name] ? "true" : "false"}
        id={`input-${name}`}
        placeholder={placeholder}
        className={`
          outline-none focus:outline-none
          bg-white
          rounded-md
          px-6
          py-2
          hover:pl-10
          text-white focus:text-black
          placeholder-greylight
          duration-300
          border-b-4
          border-grey focus:border-blue
        `}
      />
      {errors[name]?.type === "required" && (
        <p 
          role="alert"
          className={`
            text-red-500
            text-sm
            mt-2
          `}
        >
          {errorMessage}
        </p>
      )}
    </div>
  )
}