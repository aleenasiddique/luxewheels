import { NavLink } from "react-router-dom"
import { RoughNotation } from "react-rough-notation"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import backgroundImage from "../assets/images/background.jpg"
import aboutImg from "../assets/images/brochure.jpg"
export default function About(){
    return (
     <div className="mb-16 md:mb-32">
        <div className="-z-10 md:z-0 bg-cover bg-center w-full h-screen relative" style={{backgroundImage: `url(${backgroundImage})`}}>
            <div className="bg-white/30 h-full w-full backdrop-blur-[6px] py-10 md:py-20 px-8 md:px-60 text-white">
            <p className="text-center mb-6 text-xl md:text-3xl font-bold">
                <RoughNotation type="highlight" color="#e45250" show="true"><span className="px-4">About Us</span> </RoughNotation> 
                
                </p> 
            <p className="text-lg md:text-xl font-semibold mb-8 md:mb-24">At LuxeWheels, we redefine the journey with sophistication and style. Immerse yourself in the epitome of luxury as we offer an exclusive fleet 
                of premium vehicles. Elevate your travel experience with LuxeWheels, where every ride is a statement of opulence and elegance.</p>
               <div className="text-center">
                <p className="mb-6 md:mb-8 text-lg md:text-xl font-bold">We have extraordinary Range of Mercdes, BMW, Porsche and More...</p>
                <NavLink
           to="/fleet"
           className="bg-bg-color text-black relative text-xs md:text-base rounded-sm font-semibold md:font-bold -top-1 -left-1 hover:top-0 hover:left-0 transition-all duration-300 py-2 md:py-3 px-5 md:px-7 before:content-[''] before:rounded-sm before:absolute before:top-1 md:before:top-[6px] before:left-1 md:before:left-[6px] before:hover:top-0 before:hover:left-0 before:w-full before:h-full before:border-2 before:border-bg-color  before:transition-all before:duration-300"
           >
             Explore Our Fleet <i className="ml-1 text-text-color"><FontAwesomeIcon icon={faArrowRight} /></i>
           </NavLink>
           </div>
        </div>
        </div>
        <div className="flex flex-col md:flex-row my-12 md:my-16 justify-center items-center md:items-start gap-4 md:gap-16">
          <img src={aboutImg} alt="Dealer showing customers available cars" 
          className="h-[400px] md:h-[500px] w-[300px] md:w-[400px] object-cover "/>
           <div className="flex-col w-[300px] md:w-[400px] justify-start">
            <p className="font-bold">About the Company</p>
            <p className="text-3xl font-bold text-text-color mb-6">You start the engine and your adventure begins</p>
            <p className="text-sm md:text-lg">Embark on an unforgettable journey with LuxeWheels as you ignite the engine, setting the stage for an unparalleled adventure. 
                Our meticulously curated fleet of luxury vehicles promises not just transportation but a seamless fusion of comfort and excitement. 
                Let the hum of the engine be the prelude to an extraordinary experience, where every mile is a testament to the extraordinary blend 
                of performance and elegance that LuxeWheels embodies.</p>
                <div className="flex justify-start gap-6 mt-6 md:mt-12">
                    <div className="flex gap-1">
                     <p className="text-4xl text-text-color font-bold">20</p>
                     <div className="flex flex-col text-xs font-semibold mt-1">
                     <p className="mb-0 ">Car</p>
                     <p className="mt-0">Types</p>
                     </div>
                    </div>
                    <div className="flex gap-1">
                     <p className="text-4xl text-text-color font-bold">85</p>
                     <div className="flex flex-col text-xs font-semibold mt-1">
                     <p className="mb-0 ">Rental</p>
                     <p className=" mt-0">Outlets</p>
                     </div>
                    </div>
                    <div className="flex gap-1">
                     <p className="text-4xl text-text-color font-bold">70</p>
                     <div className="flex flex-col text-xs font-semibold mt-1">
                     <p className="mb-0 ">Repair</p>
                     <p className=" mt-0">Shops</p>
                     </div>
                    </div>
                </div>
           </div>
        </div>
     </div>
    )
}