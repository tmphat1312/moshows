function CustomSelect({ items, action, defaultValue }: CustomSelectProps) {
  return (
    <select
      className="w-full px-4 py-1 text-base text-gray-900 capitalize border border-gray-400 rounded-md shadow-sm bg-slate-400 hover:border-gray-500"
      onChange={(e) => action(e.target.value)}
      defaultValue={defaultValue}
    >
      {items.map((item) => (
        <option key={item.value + item.text} value={item.value}>
          {item.text}
        </option>
      ))}
    </select>
  )
}

export type CustomSelectProps = {
  items: {
    text: string
    value: string
  }[]
  action: (value: string) => void
  defaultValue?: string
}

export default CustomSelect
