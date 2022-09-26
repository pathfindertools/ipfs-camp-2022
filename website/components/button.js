export default function Button({target="_self", href="#", children, className, variation="major"}) {
  const buttonVariations = {
    major: "text-white bg-gradient-to-r from-red-custom to-yellow-custom",
    minor: " text-white bg-orange-500",
    outline: "border-[3px] border-navy text-navy lg:py-2",
  }
  return (
    <a
      href={href}
      target={target}
      type="button"
      className={`inline-block text-h5 rounded-lg px-12 h-10 pt-2.5 outline-none focus:outline-none ease-linear transition-all duration-150 ${className} ${buttonVariations[variation]}`}
    >
      {children}
    </a>
  )
}


