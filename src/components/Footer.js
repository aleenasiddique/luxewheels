import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone } from "@fortawesome/free-solid-svg-icons"
import { faHome } from "@fortawesome/free-solid-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons"


export default function Footer(){
    return (
        <footer className=" flex flex-col bg-zinc-900 text-zinc-200  pt-8 px-4 md:px-10 mt-[120px]">
            <div className="flex flex-col md:flex-row justify-between px-10 md:px-0 pb-8">
            <div className="md:w-[250px]  text-center md:text-start">
                <p className="font-dancing-script text-3xl ml-4 font-extrabold ">LuxeWheels</p>
                <p className="mt-1 md:mt-2 text-sm md:text-base"> Every Mile is an Affair of Style and Sophistication.Elevate Your Journey with Our Exquisite Collection of Prestige Cars.</p>
            </div>
            <div className="hidden md:flex flex-col">
                <p className="text-xl font-bold">Available Cars</p>
                <p className="text-base mt-2">Mercdes</p>
                <p className="text-base">BMW</p>
                <p className="text-base">Bentley</p>
                <p className="text-base">Porsche</p>
            </div>
            <div className="flex flex-col mt-8 md:mt-0 text-center md:text-start">
                <p className="text-xl font-bold ">Contact</p>
                <div className="mt-1 md:mt-2 text-sm md:text-base">
                    <div>
                <i className="hidden md:inline">{<FontAwesomeIcon  icon={faHome}/>}</i> <p className="md:ml-1 inline-block">NewYork, NY 10012, US</p>
                </div>
                <div>
                <i className="hidden md:inline">{<FontAwesomeIcon  icon={faEnvelope}/>}</i> <p className="md:ml-1 inline-block">contact@luxewheels.com</p>
                </div>
                <div>
                <i className="hidden md:inline">{<FontAwesomeIcon  icon={faPhone}/>}</i> <p className="md:ml-1 inline-block">+(212) 660-0000</p>
                </div>
                <div>
                <i className="hidden md:inline">{<FontAwesomeIcon  icon={faPhoneVolume}/>}</i> <p className="md:ml-1 inline-block">+(021) 242-8579</p>
                </div>
            </div>
            </div>
            <div className="flex flex-col md:w-[250px] mt-8 md:mt-0  text-center md:text-start">
            <p className="text-xl font-bold ">Subscription</p> 
            <p className="mt-1 md:mt-2 text-sm md:text-base">Subscribe to our news letter for latest news & updates.</p>
            <input type="email" className="h-10 my-1 px-16 focus:outline-none focus:caret-text-color focus:text-text-color" placeholder="Enter your Email"/>
            <button className=" py-2 px-6 bg-text-color shadow-sm shadow-text-color hover:bg-red-500 font-bold transition-colors duration-300 mb-4">Subscribe</button>
            </div>
            </div>
            <hr/>    
           <p className="text-zinc-200 mt-5 text-center text-lg md:text-2xl italic mb-4">LuxeWheels &#169; All Rights Reserved &#47;2023 </p>
        </footer>
    ) 
} 