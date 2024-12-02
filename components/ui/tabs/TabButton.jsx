/**
 * Button for the tabs component
 * 
 * @param {object} props - Props object
 * @param {string} props.name - Name of the tab
 * @param {string} props.text - Text to display
 * @param {string} props.activeTab - Active tab
 * @param {function} props.setActive - Set
 * @returns 
 */
export default function TabButton({ name, text, activeTab, setActive }) {
  return (
    <button
      className={`
        shadow-lg
        px-6 py-3
        inline-block
        hover:-translate-y-1
        duration-300
        ${activeTab === name ? 'bg-blue' : 'bg-white hover:bg-greylight'}
        ${activeTab === name ? 'text-white' : 'text-black hover:text-white'}
        rounded-lg
      `}
      onClick={() => setActive(name)}
    >
      {text}
    </button>
  )
}