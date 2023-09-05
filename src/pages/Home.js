import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import heroImage from "../assets/images/hero-1.jpg"
import bmwImage from "../assets/images/bmwhome.jpg"
import audiImage from "../assets/images/audihome.jpg"
import bentleyImage from "../assets/images/bentleyhome.webp"
import mercedesImage from "../assets/images/mercedeshome.jpg"
import michaelImage from "../assets/images/michael.jpg"
import emilyImage from "../assets/images/emily.jpg"
import jamesImage from "../assets/images/james.webp"

export default function Home(){
    return (
        <div className="text-zinc-200"> 
         <div className=" flex flex-col items-center justify-center h-[calc(100vh-160px)] min-h-[400px]  bg-cover bg-center bg-fixed" style={{backgroundImage: `url(${heroImage})`}}> 
         <p className=" md:text-4xl font-bold font-dancing-script mb-1 text-xl">
           Every Mile is an Affair of Style and Sophistication
           </p>
           <p className=" md:text-2xl md:font-semibold mb-4 text-sm italic whitespace-nowrap">
           Elevate Your Journey with Our Exquisite Collection of Prestige Cars
           </p>
           <NavLink
           to="/fleet"
           className="bg-gray-900  py-3 px-12 rounded-lg text-lg hover:bg-gray-800 transition-colors duration-300 whitespace-nowrap"
           >
             Explore Our Fleet
           </NavLink>

   </div>
        <p className=" text-center italic text-4xl mt-8"><span className="hidden md:inline-block">Unveil Your Luxurious Journey – </span>Find Your Ride</p>
        <p className="text-center font-dancing-script mt-4 font-semibold text-3xl">Mercedes, Porsche, BMWs and more... </p>
        <div className="block mx-8">
        <div className="mt-8 flex gap-4 w-full pb-5 snap-x overflow-x-auto  scroll-smooth">
          <div className="min-w-[80%] md:min-w-[35%] ">
              <img src={bmwImage} className="h-80 w-full snap-center rounded-xl" alt="cars"/>
          </div>
          <div className="min-w-[80%] md:min-w-[35%] ">
              <img src={bentleyImage} className="h-80 w-full snap-center rounded-xl" alt="cars"/>
          </div>
          <div className="min-w-[80%] md:min-w-[35%] ">
              <img src={audiImage} className="h-80 w-full snap-center rounded-xl" alt="cars"/>
          </div>
          <div className="min-w-[80%] md:min-w-[35%] ">
              <img src={mercedesImage} className="h-80 w-full snap-center rounded-xl bg-center" alt="cars"/>
          </div>
    </div>
    </div>
    <div className="text-center my-10 mx-6">
      <p className="italic text-xl mb-8"> Our commitment to excellence ensures your ride is not only lavish but also affordable. <br></br>
        Discover the epitome of automotive prestige and elevate your driving experience with us.</p>
        <NavLink
         to="/fleet"
         className="bg-gray-900 my-4 py-3 px-12 rounded-lg text-lg hover:bg-gray-800 transition-colors duration-300"
        >
          Find Details Here
        </NavLink>
    </div>
    <hr className="m-6" />
    <p className="text-4xl italic text-center mt-6 mb-2">Testimonials</p>
    <p className="text-xl mb-12 text-center ">See what our customers have to say about us!</p>
    <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center gap-4">
      <div className="flex flex-col border rounded-lg w-[350px] p-8 ">
       <div className="flex">
        <img src={michaelImage} className="w-[70px] h-[70px] rounded-[35px] object-cover" alt="customer"/>
        <div className="ml-4 mt-2">
          <i>
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </i>
          <p>Michael R.</p>
        </div>
       </div>
       <p className="mt-6">"As a frequent traveler, I've rented from many luxury car services, but LuxeWheels Rentals stands out as the best.
         Their fleet of cars is impressive, and the quality of service is unmatched.I highly recommend LuxeWheels to 
         anyone looking for a top-notch luxury car rental experience."</p>
      </div>
      <div className="flex flex-col border rounded-lg w-[350px] p-8">
       <div className="flex">
        <img src={jamesImage} className="w-[70px] h-[70px] rounded-[35px] object-cover" alt="customer" />
        <div className="ml-4 mt-2">
          <i>
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </i>
          <p>James D.</p>
        </div>
       </div>
       <p className="mt-6">"LuxeWheels truly lives up to it's name. I recently rented a sleek sports car for a weekend getaway, and
        it was an absolute joy to drive. The car was in pristine condition and performed flawlessly. I'll definitely be returning to LuxeWheels
         for my next high-end driving adventure!" </p>
      </div>
      <div className="flex flex-col border rounded-lg w-[350px] p-8">
       <div className="flex">
        <img src={emilyImage} className="w-[70px] h-[70px] rounded-[35px] object-cover" alt="customer"/>
        <div className="ml-4 mt-2">
          <i>
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </i>
          <p>Emily W.</p>
        </div>
       </div>
       <p className="mt-6">"LuxeWheels made my dream road trip a reality! I rented a luxurious SUV for a cross-country journey, and it exceeded all my expectations.
        The vehicle was not only comfortable but also packed with the latest technology for a seamless driving experience. Definitely Recommend!"</p>
      </div>
    </div>
    </div>
       
    )
}