import React from "react"
import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone } from "@fortawesome/free-solid-svg-icons"
export default function Header (){

    const [isOpen, setIsOpen] = React.useState(false)
    function toggleMobileMenu(){
        setIsOpen(prevMenu => !prevMenu)
    }
    function closeMobileMenu(){
        setIsOpen(false)
    }
    console.log(isOpen)
    return (
        <header className="sticky top-0  flex items-center py-4 px-6 gap-12 bg-gradient-to-r from-black to-gray-900 text-zinc-400">
            <p className="text-zinc-200 font-dancing-script text-3xl font-bold">LuxeWheels</p>
            <div className="block md:hidden ml-auto my-auto">
                <div onClick={toggleMobileMenu}>
                    <div className={`bg-zinc-200  relative  rounded-full w-8 h-1 transition-all ease-in-out 
                    ${isOpen && 'rotate-45 top-2 '}`}></div>
                    <div className={`bg-zinc-200 relative rounded-full w-8 h-1 mt-1 
                    ${isOpen && 'opacity-0'}`}></div>
                    <div className={`bg-zinc-200  relative rounded-full w-8 h-1 mt-1  transition-all ease-in-out
                     ${isOpen && '-rotate-45 -top-2'}`}></div>
                </div>
               {isOpen &&  <div class="absolute bg-gradient-to-r from-black to-gray-900 w-full flex flex-col gap-6 left-0 items-center top-[68px] py-16">
               <NavLink
            to="/"
            onClick={closeMobileMenu}
             className=" hover:text-zinc-200 text-lg font-semibold transition-colors duration-300" 
            >
                Home
            </NavLink>
            <NavLink
            to="/fleet"
            onClick={closeMobileMenu}
             className=" hover:text-zinc-200 text-lg font-semibold transition-colors duration-300" 
           >
              Fleet
            </NavLink> 
                </div> }
               
               </div>
            <nav className="relative md:flex hidden flex-1 items-center justify-end  gap-12"> 
            <NavLink
            to="/"
            className={ ({isActive})=> isActive ? "text-zinc-200 font-semibold text-lg" :  " hover:text-zinc-200 text-lg font-semibold transition-colors duration-300 "}
            >
                Home
            </NavLink>
            <NavLink
            to="/fleet"
            className={ ({isActive})=> isActive ? "text-zinc-200 font-semibold text-lg" :  " hover:text-zinc-200 text-lg font-semibold transition-colors duration-300 "}
            >
              Fleet
            </NavLink> 
            <div className="flex items-center  hover:text-zinc-200 transition-colors duration-300">
            <i className="mt-[3px]">{ <FontAwesomeIcon icon={faPhone} />} </i>
            <p className="ml-1 text-lg font-semibold mr-8">+(212) 660-0000 </p>
            </div>
            </nav>
             
        </header>
    )
}