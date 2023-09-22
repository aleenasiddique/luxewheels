import { NavLink, useSearchParams } from "react-router-dom"
import carsData from "../data.js"
export default function Fleet(){
const fleet = carsData.data.car
const [searchParams, setSearchParams] = useSearchParams()
const typeFilter = searchParams.get("type")
const displayedCars = typeFilter ? fleet.filter(car => car.type === typeFilter): fleet

const cars= displayedCars.map(car => (
    <div className="">
    <img className=" w-full h-[400px] rounded-lg" src={car.imageUrl} alt={car.name}/>
    <hr className="mt-5"></hr>
    <div className="text-center">
    <p className="font-bold">{car.type}</p>
    <p>{car.description}</p>
    <p>{`$${car.price}/day`}</p>
    <button className="bg-gray-700 hover:bg-gray-600  py-2 px-10 mt-1 rounded-md transition-colors duration-300">Book Now</button>
    </div>
    </div>
))
    return (
        <div className="mt-6 text-zinc-200">
            <div className="block text-center mb-4">
                <p className=" mb-6 font-bold text-xl md:text-3xl italic">Discover Our Armada of Vehicles</p>
        <NavLink 
        to="?type=BMW"
        className="bg-gray-700 rounded-lg py-1 px-3 md:px-6 hover:bg-gray-600 transition-colors duration-300 mr-1 md:mr-2"
        >BMW</NavLink>
         <NavLink 
        to="?type=PORSCHE"
        className="bg-gray-700  rounded-lg py-1 px-3 md:px-6 hover:bg-gray-600 transition-colors duration-300 mr-1 md:mr-2"
        >PORSCHE
        </NavLink>
         <NavLink 
        to="?type=BENTLEY"
        className="bg-gray-700  rounded-lg py-1 px-3 md:px-6 hover:bg-gray-600 transition-colors duration-300 mr-1 md:mr-2"
        >BENTLEY</NavLink>
          <NavLink 
        to="?type=MERCEDES"
        className="bg-gray-700  rounded-lg py-1 px-3 md:px-6 hover:bg-gray-600 transition-colors duration-300 mr-1 md:mr-2"
        >MERCEDES</NavLink>
         </div>
         <div className="block text-center">
        { typeFilter && <NavLink 
        to="."
        className="underline decoration-1"
        >
           clear filter 
        </NavLink>}
       </div>
       <div className="my-6 grid grid-cols-1 md:grid-cols-3 gap-6 mx-8">
        {cars}</div> 
        </div>
    )
}