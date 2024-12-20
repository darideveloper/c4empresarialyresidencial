/**
 * Arrow icon
 * 
 * @param {object} props - Props object
 * @param {string} props.className - Additional classes 
 */
export default function ArrowSvg({ className }) {

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className={`
        ${className}
    `}
    >
      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.568 18.005l-1.414-1.415 4.574-4.59-4.574-4.579 1.414-1.416 5.988 5.995-5.988 6.005z" />
    </svg>
  )
}