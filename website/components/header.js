import { Navbar, DarkThemeToggle } from 'flowbite-react'
import Link from 'next/link'
import Button from './button'

export default function Header({config}) {
  //<DarkThemeToggle />
  return (
    <div className="header justify-self-start fixed top-0 z-40 w-full flex-none lg:z-50 bg-black/20 text-white">
      <div className="container h-16 max-w-6xl mx-auto">
        <Navbar className="lg:bg-transparent dark:bg-transparent px-2 lg:px-0"
          fluid={true}
          rounded={true}
        >
          <Navbar.Brand href='/'>
            {/* <img
              src={config.devent.logo}
              className="mr-3 h-6 sm:h-9 ml-4 lg:ml-0"
              alt={config.devent.name}
            /> */}
            <span className="self-center whitespace-nowrap text-xl font-semibold">
              {config.devent.name}
            </span>
          </Navbar.Brand>
          <div className="flex md:order-2">
            <Button href={config.devent.rsvpLink} target="_blank">Get Updates</Button>
            <Navbar.Toggle />
          </div>
          <Navbar.Collapse>
            <Navbar.Link className="text-white" href="/schedule">
              Schedule
            </Navbar.Link>
            <Navbar.Link href="https://coda.io/@stellarevents/labweek22">
              Resources
            </Navbar.Link>
            <Navbar.Link href="/#frequently-asked-questions">
              FAQ
            </Navbar.Link>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  )
}
