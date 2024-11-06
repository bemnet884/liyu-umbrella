
const HeadingText = ({ children}) => {
  return (
    <h1 className="text-5xl text-center sm:text-6xl text-pretty font-heading font-semibold tracking-tight text-zinc-800">
      {children}
    </h1>
  )
}

export default HeadingText