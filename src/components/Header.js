import React from "react"
import { NavLink } from "react-router-dom"
import {  NavHashLink } from "react-router-hash-link"
import { motion, AnimatePresence } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons"
import { faHome } from "@fortawesome/free-solid-svg-icons"
import { faFile } from "@fortawesome/free-solid-svg-icons"
import { faContactBook } from "@fortawesome/free-solid-svg-icons"
import { faCarAlt } from "@fortawesome/free-solid-svg-icons"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import logo from "../assets/images/logo.png"
export default function Header (){
    const [isOpen, setIsOpen] = React.useState(false)
    function toggleMobileMenu(){
        setIsOpen(prevMenu => !prevMenu)
    }
    function closeMobileMenu(){
        setIsOpen(false)
    }
  
    return (
        <header className="top-0  flex items-center  px-4  justify-between max-w-screen-xl mx-auto">
            <img src={logo} alt="logo" className="object-cover h-[84px] md:h-[100px] w-[150px] md:w-[200px]"/>
            <nav className="relative md:flex hidden items-center justify-center gap-16 md:mx-[140px] text-lg font-semibold"> 
            <NavLink
            to="/"
            className=" hover:text-text-color hover:scale-[1.07]  transition-all duration-300 "
            >
                Home
            </NavLink>
            <NavLink
            to="/about"
            className=" hover:text-text-color hover:scale-[1.07]  transition-all duration-300 "
            >
                About
            </NavLink>
            <NavLink
            to="/fleet"
            className=" hover:text-text-color  hover:scale-[1.07]  transition-all duration-300 "
            >
              Fleet
            </NavLink>
            <NavHashLink
            to = "/#testimonials"
            className=" hover:text-text-color hover:scale-[1.07]  transition-all duration-300 scroll-smooth"
            >
                Testimonials
            </NavHashLink>
        
            <NavHashLink
             to="/#contact"
            className=" hover:text-text-color hover:scale-[1.07]  transition-all duration-300 scroll-smooth"
            >
                Contact
            </NavHashLink> 
            </nav>
             
            <div className="inline md:hidden mx-2 ml-auto">
                <div onClick={toggleMobileMenu}>
                    <div className={`bg-text-color  relative  rounded-full w-8 h-1 transition-all ease-in-out 
                    ${isOpen && 'rotate-45 top-2 '}`}></div>
                    <div className={`bg-text-color relative rounded-full w-8 h-1 mt-1 
                    ${isOpen && 'opacity-0'}`}></div>
                    <div className={`bg-text-color  relative rounded-full w-8 h-1 mt-1  transition-all ease-in-out
                     ${isOpen && '-rotate-45 -top-2'}`}></div>
                </div>
                <AnimatePresence>
               {isOpen && 
               <motion.div 
                initial={{y: -70, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 1}} exit={{x:300, opacity: 0}}
               className="absolute bg-bg-color h-full w-full flex flex-col gap-10 left-0 items-center top-[68px] py-16 font-semibold text-text-color text-xl">
               <NavLink
            to="/"
            onClick={closeMobileMenu}
            
            >
                <i className=" mr-2"><FontAwesomeIcon icon={faHome} /></i>
                Home
            </NavLink>
            <NavLink
            to="/about"
            onClick={closeMobileMenu}
           
           >  <i className=" mr-2"><FontAwesomeIcon icon={faFile} /></i>
              About
            </NavLink> 
            <NavLink
            to="/fleet"
            onClick={closeMobileMenu}
             
           >  <i className=" mr-2"><FontAwesomeIcon icon={faCarAlt} /></i>
              Fleet
            </NavLink> 
                   <a href="#testimonials"
                   
                  
                   >   <i className=" mr-2"><FontAwesomeIcon icon={faStar} /></i>
                       Testimonials
                   </a> 
                   <a href="#contact"
                   to="/Contact"
                  
                   >   <i className=" mr-2"><FontAwesomeIcon icon={faContactBook} /></i>
                       Contact
                   </a> 
                   </motion.div> 
                }
                </AnimatePresence>
               
               
               </div>
           
            <button className="hidden md:inline py-3 px-6 rounded-md bg-text-color shadow-md shadow-text-color text-white hover:bg-red-500 transition-colors duration-300  font-bold">
            <i className="mr-1"><FontAwesomeIcon icon={faPhoneVolume} /></i>
            +(021) 242-8579 
            </button>
           
        </header>
    )
}