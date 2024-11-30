import ModeSwitcher from "./ModeSwitcher"
import { useState } from "react"
import { navLinks } from '../constants'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -100 },
  };

  const navbarVariants = {
    hidden: { y: -100, opacity: 0 }, 
    visible: {
      y: 0, 
      opacity: 1, 
      transition: {
        type: 'spring', 
        stiffness: 50, 
        damping: 10, 
      },
    },
  };

  return (
    <motion.nav 
      className={`w-full flex fixed left-0 right-0 z-50 p-6 justify-between items-center max-w-[1280px] mx-auto border-b-2 border-b-solid border-b-[var(--secondary)] dark:border-b-[var(--secondary)] background dark:background`}
      initial='hidden'
      animate='visible'
      variants={navbarVariants}>
      {/* Center - Logo */}
      <div className="">
        <span className={`font-gugi text dark:text text-[26px]`}>FitForge</span>
      </div>

      {/* Desktop Navigation */}
      <ul className="list-none sm:flex hidden items-center">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-roboto font-semibold cursor-pointer text-[16px] text dark:text mr-10`}
          >
            <a
              href={`#${nav.id}`}
              className="relative text-inherit no-underline group px-1 py-1 transition-all duration-200 hover:border hover:border-current hover:rounded-tr-lg"
            >
              {nav.title}
              {/* <div 
                className="absolute left-0 bottom-[-8px] w-[calc(100%-8px)] h-[calc(100%-8px)] bg-gray-200 dark:bg-gray-500 bg-opacity-25 dark:bg-opacity-60 transition-all duration-350 ease-[cubic-bezier(0.25,0.1,0,2.05)] group-hover:left-0 group-hover:bottom-[-2px] group-hover:w-full group-hover:h-full group-active:left-0 
                group-active:bottom-[-2px] 
                group-active:w-full 
                group-active:h-full"
              /> */}
            </a>
          </li>
        ))}
      </ul>


      <div className="sm:hidden flex items-center">
        {/* menu icon */}
        <div 
          className="w-[28px] h-[28px] cursor-pointer"
          onClick={() => setToggle((prev) => !prev)}>
          {toggle ? (
            <svg 
              viewBox="0 0 24 24" 
              fill="none" 
              className="w-full h-full text dark:text"
              xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM8.96963 8.96965C9.26252 8.67676 9.73739 8.67676 10.0303 8.96965L12 10.9393L13.9696 8.96967C14.2625 8.67678 14.7374 8.67678 15.0303 8.96967C15.3232 9.26256 15.3232 9.73744 15.0303 10.0303L13.0606 12L15.0303 13.9696C15.3232 14.2625 15.3232 14.7374 15.0303 15.0303C14.7374 15.3232 14.2625 15.3232 13.9696 15.0303L12 13.0607L10.0303 15.0303C9.73742 15.3232 9.26254 15.3232 8.96965 15.0303C8.67676 14.7374 8.67676 14.2625 8.96965 13.9697L10.9393 12L8.96963 10.0303C8.67673 9.73742 8.67673 9.26254 8.96963 8.96965Z" fill="currentColor" />
            </svg>
          ) : (
            <svg 
              viewBox="0 0 20 20" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none"
              className="w-full h-full text dark:text">
              <path fill="currentColor" fill-rule="evenodd" d="M18 5a1 1 0 100-2H2a1 1 0 000 2h16zm-8 4a1 1 0 100-2H2a1 1 0 100 2h8zm9 3a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-9 5a1 1 0 100-2H2a1 1 0 100 2h8z"/>
            </svg>
          )}
        </div>


        {/* mobile menu */}
        <AnimatePresence>
          {toggle && (
            <motion.div
              key="mobile-menu"
              className="p-6 absolute surface dark:surface top-20 left-0 w-full sidebar"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={mobileMenuVariants}
              transition={{ duration: 0.5 }}
            >
              <ul className="list-none flex flex-col justify-end items-start flex-1">
                {navLinks.map((nav) => (
                  <motion.li
                    key={nav.id}
                    className={`font-roboto font-normal cursor-pointer text-[16px] text dark:text uppercase mb-5`}
                    whileHover={{ scale: 1.1 }}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <ModeSwitcher />
    </motion.nav>

  )
}

export default Navbar