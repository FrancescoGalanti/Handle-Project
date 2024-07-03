
export default function Label({className,text,htmlFor}) {
  return (
    <label className={`font-bold uppercase pt-3 pb-3 block text-sm ${className ? className : ""}`} htmlFor={htmlFor} >{text}</label>
  )
}
