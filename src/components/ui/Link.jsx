export default function Link({ children, className,onClick,href }) {
    return (
      <>
        <a href={href} target="_black" onClick={onClick} className={`${className} font-bold px-4 py-3 rounded-lg`}>{children}</a>
      </>
    )
  }
  