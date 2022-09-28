export default function Button({target="_self", href="#", children, className, variation="major"}) {
  const buttonVariations = {
    major: "text-white bg-gradient-to-tr from-red-custom to-yellow-custom py-2 text-h5",
    minor: " text-white bg-orange-500 text-h5",
    outline: "border-[3px] border-white text-white py-1 text-body-md",
  }
  return (
    <a
      href={href}
      target={target}
      type="button"
      className={`inline-flex leading-10 rounded-lg px-6 lg:px-12 outline-none focus:outline-none ${className} ${buttonVariations[variation]}`}
    >
      {children}
    </a>
  )
}


