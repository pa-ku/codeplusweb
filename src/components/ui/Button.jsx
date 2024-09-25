export default function Button({ children, className,onClick }) {
  return (
    <>
      <button onClick={onClick} className={`${className} font-bold px-4 py-3 rounded-lg`}>{children}</button>
    </>
  )
}
