import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone } from "@fortawesome/free-solid-svg-icons"
import { faHome } from "@fortawesome/free-solid-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faFax } from "@fortawesome/free-solid-svg-icons"


export default function Footer(){
    return (
        <footer className=" flex flex-col bg-gradient-to-r from-black to-gray-900 bottom-0 text-zinc-200  pt-8 px-4 md:px-10 mt-[120px]">
            <div className="flex justify-between">
            <div className="w-[180px] md:w-[280px] h-[170px] md:h-[210px]">
                <p className="font-dancing-script text-xl md:text-3xl">LuxeWheels</p>
                <p className="mt-2 text-xs md:text-base "> Every Mile is an Affair of Style and Sophistication.Elevate Your Journey with Our Exquisite Collection of Prestige Cars.</p>
            </div>
            <div className="hidden md:flex flex-col">
                <p className="text-xl">Available Cars</p>
                <p className="text-base mt-2">Mercdes</p>
                <p className="text-base">BMW</p>
                <p className="text-base">Bentley</p>
                <p className="text-base">Porsche</p>
            </div>
            <div className="flex flex-col">
                <p className="text-lg md:text-xl">Contact</p>
                <div className="mt-2 text-xs md:text-base">
                    <div>
                <i className="">{<FontAwesomeIcon  icon={faHome}/>}</i> <p className="inline-block">NewYork, NY 10012, US</p>
                </div>
                <div>
                <i>{<FontAwesomeIcon  icon={faEnvelope}/>}</i> <p className="inline-block">info@luxewheels.com</p>
                </div>
                <div>
                <i>{<FontAwesomeIcon  icon={faPhone}/>}</i> <p className="inline-block">+(212) 660-0000</p>
                </div>
                <div>
                <i>{<FontAwesomeIcon  icon={faFax}/>}</i> <p className="inline-block">+(212) 660-0000</p>
                </div>
            </div>
            </div>
            </div>
            <hr/>    
           <p className="text-zinc-200 mt-5 text-center text-lg md:text-2xl italic mb-4">LuxeWheels &#169; All Rights Reserved &#47;2023 </p>
        </footer>
    ) 
} 