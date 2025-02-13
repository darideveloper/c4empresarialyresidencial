/**
 * Input component
 * 
 * @param {object} props
 * @param {number} props.index - Index of the input
 * @param {React.ReactNode} props.label - Label for the input
 * @param {string} props.name - Name of the input
 * @param {string} props.type - Type of the input. Default is 'text'
 * @param {object} props.register - Register object from the useForm hook
 * @param {boolean} props.required - If the input is required
 * @param {object} props.errors - Errors object from the useForm hook 
 * @param {string} props.placeholder - Placeholder for the input
 * @param {string} props.errorMessage - Error message for the input
 */
export default function Input({
  index = 0,
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
        ${type == 'checkbox' ? 'flex-row-reverse items-center' : 'flex-col'}
        my-8
      `}
      data-aos="fade-up"
      data-aos-delay={index * 500}
    >
      <label 
        htmlFor={`input-${name}`}
        className={`
          text-xl
          ${type == 'checkbox' ? 'mb-0' : 'mb-2'}
          block
          w-full
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
          py-2
          hover:pl-10
          text-black focus:text-blue
          placeholder-greylight
          placeholder-opacity-50
          duration-300
          border-b-4
          border-grey focus:border-blue
          ${type == 'checkbox' ? 'w-5 h-5' : 'w-full'}
          ${type == 'checkbox' && 'mx-4'}
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