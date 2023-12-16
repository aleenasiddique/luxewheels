import { RoughNotation } from "react-rough-notation"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons"
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons"
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons"
import { faFacebook, faLinkedin, faInstagram, faTwitter, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons'

export default function Contact(){
    return (
        <div className="my-8 md:my-12" id="contact">
             <div className="flex justify-center">
        <div className="my-8 w-[60%] md:w-[50%]"> 
         <p className=" font-bold text-2xl md:text-4xl mb-4  text-center text-bg-color">
         <RoughNotation type="highlight" color="#e45250" show="true"> <span className=" px-4">Contact Us</span></RoughNotation></p> 
          <p className=" text-sm md:text-base text-center">Luxewheels is providing services successfully around 6 different cities from the past 10 years. For any inquiries or to make reservations, feel free to reach out. We are here to assist you. </p>
        </div>
        </div>
            <div className="flex justify-center">
            <div className="relative w-[85%] md:w-[60%] h-[500px] bg-white rounded-md">
                <div className="absolute h-[80%] w-[270px] md:w-[300px] bg-text-color top-[10%] left-0 md:-left-[5%] px-8 md:px-12 text-bg-color py-6 ">
                    <p className="font-bold text-3xl mb-8 text-white">Contact Us</p>
                    <p className="mb-3"><i className="font-normal mr-2 "><FontAwesomeIcon icon={faMapLocationDot}/></i>2912 MeadowBrook Road, New York, NY</p>
                    <p className="mb-3"><i className="font-normal mr-2 "><FontAwesomeIcon icon={faEnvelopeOpenText}/></i>contact@luxewheels.com</p>
                    <p><i className="font-normal mr-2"><FontAwesomeIcon icon={faPhoneVolume}/></i>718-308-0890</p>
                     <div className="flex gap-2 text-xl mt-[45%]">
                        <a href="www.facebook.com" target="_blank" className="mr-2 transform hover:scale-110 transition-transform duration-500"><FontAwesomeIcon icon={faFacebook}/></a>
                        <a href="www.instagram.com" target="_blank" className="mr-2 transform hover:scale-110 transition-transform duration-500"><FontAwesomeIcon icon={faInstagram}/></a>
                        <a href="www.twitter.com" target="_blank" className="mr-2 transform hover:scale-110 transition-transform duration-500"><FontAwesomeIcon icon={faTwitter}/></a>
                        <a href="www.youtube.com" target="_blank" className="mr-2 transform hover:scale-110 transition-transform duration-500"><FontAwesomeIcon icon={faYoutubeSquare}/></a>
                        <a href="www.linkedin.com" target="_blank" className="mr-2 transform hover:scale-110 transition-transform duration-500"><FontAwesomeIcon icon={faLinkedin}/></a>
                        
                     </div>
                </div>
                <div className="absolute left-[30%] top-[15%] hidden md:inline ">
                    <p className="text-lg text-text-color font-semibold mb-4">Send a Message</p>
                    <form className="flex flex-wrap gap-12">
                        <div>
                        <label className="text-sm">First Name</label><br/>
                        <input type="text" className="border-b-2 border-text-color/60 focus:caret-text-color/60 focus:outline-none w-60"/>
                        </div>
                        <div>
                        <label className="text-sm">Last Name</label><br/>
                        <input type="text" className="border-b-2 border-text-color/60 focus:caret-text-color/60 focus:outline-none w-60"/>
                        </div>
                        <div>
                        <label className="text-sm">Email</label><br/>
                        <input type="text" className="border-b-2 border-text-color/60 focus:caret-text-color/60 focus:outline-none w-60"/>
                        </div>
                        <div>
                        <label className="text-sm">Mobile Number</label><br/>
                        <input type="text"  className="border-b-2 border-text-color/60 focus:caret-text-color/60 focus:outline-none w-60"/>
                        </div>
                        <div>
                        <label className="text-sm">Message</label><br/> 
                        <textarea className="border-b-2 border-text-color/60 focus:caret-text-color/60 focus:outline-none w-[530px] h-12"/>
                        </div>
                        <button className="-mt-9 text-white py-2 px-6 bg-text-color shadow-md shadow-text-color hover:bg-red-500 transition-colors duration-300 rounded-md">Send Message</button>
                    </form>
                </div>
            </div>
            </div>
            </div>
        
    )
}