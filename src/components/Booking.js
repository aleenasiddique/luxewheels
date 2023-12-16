import selectCarImg from "../assets/images/blob1.png"
import contactOperatorImg from "../assets/images/blob2.png"
import driveCarImg from "../assets/images/blob3.png"
export default function Booking (){
    return (
        <div className="text-center">
            <p className="font-bold mb-2">Plan Your Trip Now</p>
            <p className="font-bold text-text-color text-2xl md:text-4xl">Quick & Easy Car Rental</p>
            <div className="flex flex-col md:flex-row justify-center md:gap-20 items-center">
               <div className="flex flex-col gap-2 items-center w-[320px]">
                 <img src={selectCarImg} alt="car icon" className="-mb-32" />
                 <p className="font-bold text-2xl">Select Car</p>
                 <p className="text-zinc-500">We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs.</p>
               </div>
               <div className="flex flex-col gap-2 items-center w-[330px]">
                 <img src={contactOperatorImg} alt="car icon" className="-mb-32" />
                 <p className="font-bold text-2xl">Contact Operator</p>
                 <p className="text-zinc-500">Our knowledgeable and friendly operators are always ready to help with any questions or concerns</p>
               </div>
               <div className="flex flex-col gap-2 items-center w-[330px]">
                 <img src={driveCarImg} alt="car icon" className="-mb-32" />
                 <p className="font-bold text-2xl">Drive Away</p>
                 <p className="text-zinc-500">Whether you're hitting the open road, we've got you covered with our wide range of amazing luxury fleet.</p>
               </div>
            </div>
        </div>
    )
}