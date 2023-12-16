import React from "react"
import carsData from "../data.js"
import { NavLink } from "react-router-dom"
import Testimonials from "../components/Testimonials.js"
import Contact from "../components/Contact.js"
import Vehicles from "../components/Vehicles.js"
import Questions from "../components/Questions.js"
import { RoughNotation } from "react-rough-notation"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCar } from "@fortawesome/free-solid-svg-icons"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { faCalendar } from "@fortawesome/free-solid-svg-icons"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { faClose } from "@fortawesome/free-solid-svg-icons"
import heroImage from "../assets/images/background.jpg"
import background from "../assets/images/about-bg.png"
import backgroundTestimonials from "../assets/images/bbb.png"
import michaelImage from "../assets/images/michael.jpg"
import emilyImage from "../assets/images/emily.jpg"
import carVideo from "../assets/videos/video.mp4"
export default function Home(){
       
  const [carForm, setCarForm] = React.useState(false)
  const [selectedCar, setSelectedCar] = React.useState("")
  const cars = carsData.data.car
 
  function handleValueChange(event){
    setSelectedCar(event.target.value)
  }

  function handleForm(){
   
    if(selectedCar === ""){
      alert("Fill all the required Information!")
      return
    }
    else {
   setCarForm(prevState => !prevState)
 
    }
  
  }


  const bookedCar = cars.filter(car => car.value === selectedCar) 
  const carInfo = bookedCar.map(car => (
   <div className="flex flex-col gap-2 font-bold items-center">
    <img src={car.imageUrl} alt="car" className="w-80 md:w-[450px] md:-mt-6"/>
    <p className="text-sm">{car.type} {car.description}</p>
    <p className="text-xs text-gray-500">${car.price} /Day Only</p>
   </div>
  )) 


    return (
   
        <div> 
         <div className="-z-10 md:z-0 -mt-2 md:mt-0 relative pt-10 px-2 text-bg-color h-[256px] md:h-[590px] max-w-screen-xl w-full md:w-[1200px] md:mx-auto md:rounded-[32px] flex flex-col items-center justify-start bg-cover " style={{backgroundImage: `url(${heroImage})`}}> 
         <p className=" text-xs md:text-4xl font-bold  mb-1 md:mb-1.5 ">
           Every Mile is an Affair of Style and Sophistication
           </p>
           <p className=" md:text-xl md:font-semibold mb-[105px] md:mb-5 text-xs text-center">
           Elevate Your Journey with Our Exquisite Collection of Prestige Cars
           </p>
           <NavLink
           to="/fleet"
           className="bg-bg-color text-black relative text-xs md:text-base rounded-sm font-semibold md:font-bold -top-1 -left-1 hover:top-0 hover:left-0 transition-all duration-300 py-2 md:py-3 px-5 md:px-7 before:content-[''] before:rounded-sm before:absolute before:top-1 md:before:top-[6px] before:left-1 md:before:left-[6px] before:hover:top-0 before:hover:left-0 before:w-full before:h-full before:border-2 before:border-bg-color  before:transition-all before:duration-300"
           >
            Explore Our Fleet <i className="ml-1 text-text-color"><FontAwesomeIcon icon={faArrowRight} /></i>
           </NavLink>
           <div id="reservation" className="absolute -z-10 md:z-0 max-w-screen-xl w-full md:w-[80%] mx-auto  top-[256px] md:top-[456px] md:pt-16">
           <div className=" bg-bg-color md:bg-white md:rounded-[32px]  shadow-lg shadow-black/20 text-black py-2 md:py-6  w-full  ">
           { !carForm && <form className="flex justify-evenly flex-wrap">
              <div className="flex flex-col">
              <lable for="cartype" className="font-bold my-3 "><i className="mr-2"><FontAwesomeIcon icon={faCar} /></i>Select Your Drive<span className="text-text-color">&#x2a;</span> </lable>
              <select id="cartype" required onChange={handleValueChange}
              className="h-10 w-[250px] md:w-[270px] border border-gray-300 px-1 text-gray-500 focus:outline-none text-sm">
                <option value="">Select a Car</option>
                <option value="bmw1">BMW-X3sDrive 30i</option>
                <option value="bentley1">Bentley-Bentyga EWB</option>
                <option value="mercedes1">Mercedes-Benz C-Class</option>
                <option value="porsche1">Porsche-718 Cyman</option>
                <option value="bentley2">Bentley-Continental GTS</option>
                <option value="mercedes2">Mercedes-Benz EQC</option>
                <option value="bmw2">BMW-330i xDrive</option>
                <option value="porsche2">Porsche-Macan Turbo</option>
              </select>
              </div>
              <div className="flex flex-col">
              <lable for="pickup" className="font-bold my-3"><i className="mr-2"><FontAwesomeIcon icon={faLocationDot} /></i>Pick-up Location<span className="text-text-color">&#x2a;</span> </lable>
              <select id="pickup" required className="h-10 w-[250px] md:w-[270px] border border-gray-300 px-1 text-gray-500 focus:outline-none text-sm mb-2" >
                <option value="select">Select a Pick-up Location</option>
                <option>New York</option>
                <option>San Francisco</option>
                <option>Los Angeles</option>
                <option>Dallas</option>
                <option>Kansas City</option>
              </select>
              </div>
              <div className="flex flex-col">
              <lable for="pickup" className="font-bold my-3"><i className="mr-2"><FontAwesomeIcon icon={faLocationDot} /></i>Drop-of Location<span className="text-text-color">&#x2a;</span> </lable>
              <select id="pickup" required className="h-10 w-[250px] md:w-[270px] border border-gray-300 px-1 text-gray-500 focus:outline-none text-sm mb-2">
                <option value="">Select a Drop-of Location</option>
                <option>New York</option>
                <option>San Francisco</option>
                <option>Los Angeles</option>
                <option>Dallas</option>
                <option>Kansas City</option>
              </select>
              </div>
              <div className="flex flex-col">
              <lable for="pickupDate" className="font-bold my-3"><i className="mr-2"><FontAwesomeIcon icon={faCalendar} /></i>Pick-up Date<span className="text-text-color">&#x2a;</span> </lable>
              <input required type="date" id="pickupDate"className="h-10 w-[250px] md:w-[270px] border border-gray-300 text-sm px-1 mb-2 text-gray-500" />
              </div>
              <div className="flex flex-col">
              <lable for="dropofDate" className="font-bold my-3"><i className="mr-2"><FontAwesomeIcon icon={faCalendar} /></i>Drop-of Date<span className="text-text-color">&#x2a;</span> </lable>
              <input required type="date" id="dropofDate"className="h-10 w-[250px] md:w-[270px] border border-gray-300 text-sm px-1 mb-2 text-gray-500" />
              </div>
              <input type="submit" value="Search" onClick={handleForm}
              className="h-10 w-[250px] md:w-[270px] text-center bg-text-color text-white font-semibold text-lg my-3 md:mt-12 rounded-sm shadow-md shadow-text-color hover:bg-red-500  mb-2 transition-colors duration-300" />
             </form> }
             {carForm &&  <div className=" mx-16">
              <div >
              <FontAwesomeIcon icon={faClose} className="absolute right-8" onClick={()=> setCarForm(false)} /> </div>
             <p className="text-center font-bold text-text-color text-xl mb-1">Personal Information</p>
             <p className="text-center font-semibold text-gray-500 text-xs mb-4">After filling out the form you will receive price broshure and more details.</p>
              <div className="flex flex-col md:flex-row justify-start items-start gap-20">
              {carInfo}
              <div>
              <form className="flex flex-wrap gap-8">
                <div className="flex flex-col gap-1">
                <label for="name" className="ml-2 text-sm text-gray-500 font-bold">Full Name </label>
                <input type="text" id="name" className="w-[200px] bg-zinc-100 border border-zinc-300 outline-none caret-zinc-300"/>
                </div>
                <div className="flex flex-col gap-1">
                <label for="email" className="ml-2 text-sm text-gray-500 font-bold">Email</label>
                <input type="text" id="number" className="w-[200px] bg-zinc-100 border border-zinc-300 outline-none caret-zinc-300"/>
                </div>
                <div className="flex flex-col gap-1">
                <label for="number" className="ml-2 text-sm text-gray-500 font-bold">Phone Number</label>
                <input type="text" id="email" className="w-[200px] bg-zinc-100 border border-zinc-300 outline-none caret-zinc-300"/>
                </div>
                <div className="flex flex-col gap-1">
                <label for="age" className="ml-2 text-sm text-gray-500 font-bold">Age</label>
                <input type="number" id="age" className="w-[200px] bg-zinc-100 border border-zinc-300 outline-none caret-zinc-300"/>
                </div>
                <div className="md:ml-[100px]">
                <input type="submit" value="Reserve"
                 className="h-10 w-[200px] text-center bg-text-color text-white font-semibold text-lg rounded-sm shadow-md shadow-text-color hover:bg-red-500  mb-2 transition-colors duration-300" 
                />
                </div>
                
              </form>
              </div>
             </div>
             </div>
             }
             </div>
           </div>
           
           </div>
          
           <div className="-z-10 h-[100vh] mt-[548px] md:mt-4 mb-8 w-full bg-cover" style={{backgroundImage:`url(${background})`}}>
            <div className=" flex flex-col text-bg-color w-[330px] md:w-[550px] pt-40 md:pt-60  px-4 md:px-16 ml-auto">
              <p className="text-lg">Our commitment to excellence ensures your ride is not only lavish but also affordable.
          Discover the epitome of automotive prestige and elevate your driving experience with us.</p>
      <p className="mt-4 text-lg font-bold">Need help with finding the perfect Ride for you?</p>
          <div className="mt-8  text-center">
           <a href="#contact"
         className="bg-text-color text-white relative text-xs md:text-base rounded-sm font-semibold md:font-bold -top-1 -left-1 hover:top-0 hover:left-0 transition-all duration-300 py-2 md:py-3 px-5 md:px-10 before:content-[''] before:rounded-sm before:absolute before:top-1 md:before:top-[6px] before:left-1 md:before:left-[6px] before:hover:top-0 before:hover:left-0 before:w-full before:h-full before:border-2 before:border-text-color  before:transition-all before:duration-300" 
           >
            Contact Us
           </a>
           </div>
            </div>
         </div>
         <div className="w-full">
       <Vehicles />
       </div>
        <div className="mt-8 md:mt-12 md:h-screen w-full backdrop-blur bg-cover pb-8" id="testimonials" style={{backgroundImage: `url(${backgroundTestimonials})`}}>
        <div className="flex justify-center">
        <div className="my-8 w-[60%] md:w-[50%]"> 
          <p className="font-bold text-2xl md:text-4xl mb-4 text-center text-text-color">  
          Client's Testimonials
          </p>
          <p className="  text-sm md:text-base text-center">Discover the positive impact we've made on the our clients by reading through their testimonials. Our clients have experienced our service and results, and they're eager to 
            share their positive experiences with you.</p>
        </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-2 justify-center items-center mt-8">
     <Testimonials clientImage={emilyImage} clientName="Emily Williams" clientReview="As a frequent traveler, I've rented from many luxury car services, but LuxeWheels Rentals stands out as the best.
           Their fleet of cars is impressive, and the quality of service is unmatched! "/>
     <Testimonials clientImage={michaelImage} clientName="Michael Smith" clientReview="I recently rented a sleek sports car for a weekend getaway, and
            it was an absolute joy to drive. I'll definitely be returning to LuxeWheels for my next high-end driving adventure!"/>
            </div>
            </div>
            <div className="h-screen w-full relative">
              <video src={carVideo} autoPlay loop muted className="h-full w-full object-cover"/>
                <div className="absolute top-0 h-full w-full flex flex-col justify-center items-center gap-2 md:gap-4  font-bold text-bg-color">
                  <p className="text-xl md:text-4xl mb-4"><RoughNotation type="highlight" color="#e45250" show="true"><span className="px-4">Why Choose Us?</span></RoughNotation></p>
                  <div className="w-[310px] md:w-[800px] text-center">
                <p className="text-xl md:text-3xl mb-3">Best Valued Deals You Will Ever Find</p>
               <p className="text-xl">Discover the best deals you'll ever find with our unbeatable offers. Our deals are designed to give you the ultimate renting experience,
                 so don't miss out on your chance to save big.</p>
                 </div>
                </div>
  
            </div>
    <div>
      <Contact />
    </div>
    <div>
     <Questions />
    </div>
   
      </div> 
    )
}