function UnavailablePlaceholder({ text }: { text: string }) {
  return (
    <div className="grid h-full text-2xl uppercase rounded-md bg-slate-800 place-content-center font-display text-slate-400">
      {text}
    </div>
  )
}

export default UnavailablePlaceholder
