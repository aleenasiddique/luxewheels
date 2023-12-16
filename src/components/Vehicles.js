import carsData from "../data.js"
import { useSearchParams } from "react-router-dom"
export default function Vehicles(){
    const vehicles = carsData.data.car
    const [searchParams, setSearchParams] = useSearchParams()
    const carFilter = searchParams.get("value")
const displayedCar = carFilter ? vehicles.filter(car => car.value === carFilter): vehicles.filter(car => car.id === 1)

const carImage = displayedCar.map(car => (
    <div className="w-[330px] md:w-[600px]">
    <img src={car.imageUrl} alt="vehicle"/>
   </div>
   )) 

   const carFeatures = displayedCar.map(car => (
    <div className="flex flex-col">
    <div className="mb-1.5 py-2.5 px-8 bg-text-color font-semibold text-white text-xl text-center"><p><span className="font-extrabold">${car.price}</span> /Day Only</p></div>
    <div className="flex flex-col  border border-gray-500 gap-2 rounded-sm ">
    <div className="flex justify-evenly border-b border-gray-500 py-1 px-8">
     <span>Mark</span>
     <span>|</span>
     <span>{car.type}</span>
    </div>
    <div className="flex justify-evenly border-b border-gray-500 py-1 px-4">
     <span>Model</span>
     <span>|</span>
     <span>{car.description}</span>
    </div>
    <div className="flex justify-evenly border-b border-gray-500 py-1 px-4">
     <span>Year</span>
     <span>|</span>
     <span>{car.year}</span>
    </div>
    <div className="flex justify-evenly border-b border-gray-500 py-1 px-4">
     <span>Doors</span>
     <span>|</span>
     <span>{car.doors}</span>
    </div>
    <div className="flex justify-evenly border-b border-gray-500 py-1 px-4">
     <span>AC</span>
     <span>|</span>
     <span>{car.AC}</span>
    </div>
    <div className="flex justify-center gap-4 border-b border-gray-500 py-1 px-4">
     <span>Transmission</span>
     <span>|</span>
     <span>{car.transmission}</span>
    </div>
    <div className="flex justify-evenly py-1 px-4">
     <span>Feul</span>
     <span>|</span>
     <span>{car.feul}</span>
    </div>
   </div>
   <a href="#reservation" className="text-center mt-2 py-2.5 px-8 bg-text-color font-bold text-white text-xl   hover:bg-red-500 transition-colors duration-300">RESERVE NOW</a>
     </div>
   ))


return (
    <div className="my-16 md:my-24">
        <p className="text-center text-text-color font-bold text-2xl md:text-4xl mb-2 px-8">Our Rental Fleet</p>
        <p className="  text-sm md:text-base text-center px-8">Choose from a variety of our amazing vehicles to rent for your next adventure or business trip</p>
    <div className=" flex flex-col md:flex-row justify-center items-center gap-12 mt-12 md:mt-16">
     <div className="flex flex-col gap-2">
       <button onClick={() => setSearchParams({value:"bmw1" }) }
       className="py-4 px-6 font-semibold text-lg bg-zinc-200 focus:bg-text-color focus:text-white hover:bg-text-color hover:text-white transition-all duration-300">
        BMW X3 sDrive30i</button>
       <button onClick={() => setSearchParams({value:"mercedes1" }) }
       className="py-4 px-6 font-semibold text-lg bg-zinc-200 focus:bg-text-color focus:text-white hover:bg-text-color hover:text-white transition-all duration-300">
        Mercedes Benz C-Class</button>
       <button onClick={() => setSearchParams({value:"bentley1"} ) }
       className="py-4 px-6 font-semibold text-lg bg-zinc-200 focus:bg-text-color focus:text-white hover:bg-text-color hover:text-white transition-all duration-300">
        Bentley Bentyga EWB</button>
       <button onClick={() => setSearchParams({value:"bmw2"}) }
       className="py-4 px-6 font-semibold text-lg bg-zinc-200 focus:bg-text-color focus:text-white hover:bg-text-color hover:text-white transition-all duration-300">
        BMW 760i xDrive</button>
       <button onClick={() => setSearchParams({value:"porsche1"}) }
       className="py-4 px-6 font-semibold text-lg bg-zinc-200 focus:bg-text-color focus:text-white hover:bg-text-color hover:text-white transition-all duration-300">
        Porsche 718 Cyman</button>
       <button onClick={() => setSearchParams({value:"bentley2"}) }
       className="py-4 px-6 font-semibold text-lg bg-zinc-200 focus:bg-text-color focus:text-white hover:bg-text-color hover:text-white transition-all duration-300">
        Bentley Continental GTS</button>

     </div>
     <div>{carImage}</div>
    
    <div>{carFeatures}</div>
      
    </div>
    </div>
)
}