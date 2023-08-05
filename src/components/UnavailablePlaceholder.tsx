function UnavailablePlaceholder({ text }: { text: string }) {
  return (
    <div className="grid h-full text-2xl uppercase rounded-md place-content-center text-slate-700 font-display filter grayscale bg-primary-500">
      {text}
    </div>
  )
}

export default UnavailablePlaceholder
