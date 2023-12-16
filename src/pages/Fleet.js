import { NavLink, useSearchParams } from "react-router-dom"
import carsData from "../data.js"
export default function Fleet(){
const fleet = carsData.data.car
const [searchParams, setSearchParams] = useSearchParams()
const typeFilter = searchParams.get("type")
const displayedCars = typeFilter ? fleet.filter(car => car.type === typeFilter): fleet

const cars= displayedCars.map(car => (
    <div className="my-6">
    <img className="w-[280px] md:h-[400px] h-[280px] md:w-[400px] rounded-lg object-center mb-5" src={car.image} alt={car.name}/>
    <hr/>
    <div className="text-center mt-0.5">
    <p className="font-bold">{car.type}</p>
    <p>{car.description}</p>
    <p>{`$${car.price}/day`}</p>
    <button className="mt-3 bg-text-color shadow-md shadow-text-color text-base font-bold text-white rounded-lg  py-3  px-8 hover:bg-red-500  transition-colors duration-300">Book Now</button>
</div> 
    </div>
))
    return (
        <div className="mt-6 mb-16 md:mb-32 border-b border-gray-200">
         <div className=" text-center mb-4">
                <p className=" mb-6 font-bold text-lg md:text-3xl italic">Discover Our Armada of Vehicles</p>
        <NavLink 
        to="?type=BMW"
        className="bg-text-color shadow-md shadow-text-color text-sm md:text-base text-white rounded-lg py-1 px-2.5 md:px-6 hover:bg-red-500 transition-colors duration-300 mr-1 md:mr-2"
        >BMW</NavLink>
         <NavLink 
        to="?type=PORSCHE"
        className="bg-text-color shadow-md shadow-text-color text-sm md:text-base text-white rounded-lg  py-1 px-2.5 md:px-6 hover:bg-red-500  transition-colors duration-300 mr-1 md:mr-2"
        >PORSCHE
        </NavLink>
         <NavLink 
        to="?type=BENTLEY"
        className="bg-text-color shadow-md shadow-text-color text-sm md:text-base  text-white rounded-lg  py-1 px-2.5 md:px-6 hover:bg-red-500  transition-colors duration-300 mr-1 md:mr-2"
        >BENTLEY</NavLink>
          <NavLink 
        to="?type=MERCEDES"
        className="bg-text-color shadow-md shadow-text-color text-sm md:text-base text-white rounded-lg  py-1 px-2.5 md:px-6 hover:bg-red-500  transition-colors duration-300 mr-1 md:mr-2"
        >MERCEDES</NavLink>
         </div>
         <div className="text-center">
        { typeFilter && <NavLink 
        to="."
        className="underline decoration-1"
        >
           clear filter 
        </NavLink>}
        </div> 
       <div className="my-6 flex justify-evenly flex-wrap items-center">
        {cars}</div> 
        </div>
    )
}