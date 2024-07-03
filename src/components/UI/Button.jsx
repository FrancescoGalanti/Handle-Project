

export default function Button({children,onClick,className}) {
  return (
   <button onClick={onClick} 
   className={`bg-primary text-white  px-4 py-2 rounded text-sm inline-flex items-center gap-2 ${className ? className : ''}`}>
    {children}
    </button>
  )
}
