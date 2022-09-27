export default function Button({target="_self", href="#", children, className, variation="major"}) {
  const buttonVariations = {
    major: "text-white bg-gradient-to-tr from-red-custom to-yellow-custom py-3",
    minor: " text-white bg-orange-500",
    outline: "border-[3px] border-navy text-navy py-2",
  }
  return (
    <a
      href={href}
      target={target}
      type="button"
      className={`inline-flex text-h5 leading-10 rounded-lg px-6 lg:px-12 outline-none focus:outline-none ${className} ${buttonVariations[variation]}`}
    >
      {children}
    </a>
  )
}


