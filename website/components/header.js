import { useState } from 'react'
import Burger from './burger'

const navItems = [
  {
    link: "./#about",
    label: "About"
  },{
    link: "./#tickets",
    label: "Tickets"
  },{
    link: "./#schedule",
    label: "Schedule"
  },{
    link: "./#speakers",
    label: "Speakers"
  },{
    link: "./#faq",
    label: "FAQ"
  },{
    link: "./#tracks",
    label: "Tracks"
  }
]

export default function Header({config}) {
  const [active, setActive] = useState(false);

  const clickNav = () => {
    setActive(false)
  }

  return (
    <div className="fixed z-50 w-full px-10">
      <div className="absolute inset-0 bg-gradient-to-b from-navy/70 to-navy/20"></div>
      <div className={`absolute inset-0 bg-navy opacity-90 lg:hidden  ${active ? "" : "hidden"}`}></div>
      <div className="container max-w-7xl mx-auto relative z-10 py-5">
        <div className={`text-body1 text-white lg:text-right lg:block ${active ? "" : "hidden"}`}>
          {config.devent.navigation.map((item, i) => {
            return (
              <div className="lg:inline-block mb-6 last:mb-0 lg:mb-0" key={i}>
                 <a className="inline-block hover:underline lg:ml-8 lg:mb-0" href={item[1]} onClick={() => clickNav()}>{item[0]}</a>
              </div>
            )
          }
        )}
        </div>
      </div>
      <div onClick={() => setActive(!active)} className='absolute z-40 top-2 right-4 lg:hidden'>
        <Burger isOpen={active} />
      </div>
    </div>
  )
}
