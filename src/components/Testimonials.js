import testimonialImg from "../assets/images/testimonial.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"



export default function Testimonials ({clientImage, clientName, clientReview}){
    return (
       
         <div className="-z-10 md:z-0 h-[250px] md:h-[440px] w-[310px] md:w-[600px] bg-cover bg-center relative flex justify-center" style={{backgroundImage: `url(${testimonialImg})`}}>
           <div className="absolute flex flex-col gap-2 md:gap-6 w-[70%] h-[80%] top-[10%] left-[10%]">
            <div className="flex gap-2">
                <img src={clientImage} alt="customer" className="h-10 md:h-16 w-10 md:w-16 rounded-[20px] md:rounded-[32px] object-cover"/>
                <div className="flex flex-col">
                    <p className=" md:mt-2 font-bold text-xs md:text-lg">{clientName}</p>
                    <i className="text-text-color  text-xs md:text-base">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </i>
                </div>
            </div>
            <p className="text-xs md:text-lg">"{clientReview}"</p>
           </div>
         </div>
      
        
    )
}