function CustomSelect({ items }: CustomSelectProps) {
  return (
    <select className="w-full px-4 py-1 text-base text-gray-900 border border-gray-400 rounded-md shadow-sm sm:hidden bg-slate-400 hover:border-gray-500">
      {items.map((item) => (
        <option key={item.value} value={item.value}>
          {item.string}
        </option>
      ))}
    </select>
  )
}

export type CustomSelectProps = {
  items: {
    string: string | number
    value: string | number
  }[]
}

export default CustomSelect
