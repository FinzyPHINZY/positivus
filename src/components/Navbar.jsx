import { HiOutlineMenuAlt3, HiOutlineX } from 'react-icons/hi'
import { NAV_MENU_ITEMS } from '../constants'
import { useState, useEffect } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeItem, setActiveItem] = useState('')

  const toggleMenu = () => {
    setIsOpen((prev) => !prev)
  }

  const handleMenuClick = (name) => {
    setIsOpen((prev) => !prev)
    setActiveItem(name)
  }

  useEffect(() => {
    const sections = NAV_MENU_ITEMS.map((item) =>
      document.querySelector(item.href)
    )

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2
      let currentSection = ''

      sections.forEach((section) => {
        if (
          section &&
          section.offsetTop < scrollPosition &&
          section.offsetTop + section.offsetHeight > scrollPosition
        ) {
          currentSection = section.getAttribute('id')
          console.log(currentSection)
        }
      })

      const activeMenuItem = NAV_MENU_ITEMS.find(
        (item) => item.href === `#${currentSection}`
      )

      setActiveItem(activeMenuItem?.name || '')
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initialize on mount

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, []) // Empty dependency array, as this effect does not directly rely on component state or props

  return (
    <nav className="top-0 right-0 left-0 bg-white fixed shadow-md z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="">
            <a href="/" className="">
              <img src="/logo.png" alt="" className="h-8 " />
            </a>
          </div>
          <div className="space-x-8 hidden md:flex items-center ">
            {NAV_MENU_ITEMS.map((item) => (
              <a
                onClick={() => handleMenuClick(item.name)}
                key={item.href}
                href={item.href}
                className={`block text-black px-2 hover:bg-primary rounded-sm hover:underline transition-all duration-300 ${activeItem === item.name ? ' bg-primary text-black underline' : ''}`}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              className="border px-4 py-2  border-black hover:bg-primary hover:border-primary rounded-md transition-all duration-300"
            >
              Request a quote
            </a>
          </div>
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-primary focus:outline-none *:size-6"
            >
              {isOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 className="" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-4 pt-2 pb-3 space-y-2 sm:px-3">
            {NAV_MENU_ITEMS.map((item) => (
              <a
                onClick={() => handleMenuClick(item.name)}
                key={item.href}
                href={item.href}
                className={`block text-black px-2 hover:bg-primary rounded-sm hover:underline transition-all duration-300 
                    ${activeItem === item.name ? 'bg-primary underline' : ''}`}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              className="block border px-4 py-2  border-black hover:bg-primary hover:border-primary rounded-md transition-all duration-300"
            >
              Request a quote
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
