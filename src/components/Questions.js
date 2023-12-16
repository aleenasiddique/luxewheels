import React from "react"
import { motion, AnimatePresence} from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDown } from "@fortawesome/free-solid-svg-icons"
import background from "../assets/images/questionsbg.png"

export default function Questions(){
    const [selectedQuestion, setSelectedQuestion] = React.useState(null)
    const questions = [
        {
            question: '1. What is special about comparing rental car deals?',
            answer: 'Comparing rental car deals is important as it helps find the best deal that fits your budget and requirements, ensuring you get the most value for your money.'
        },
        {
            question: '2. How do I find the car rental deals?',
            answer: 'Comparing rental car deals is important as it helps find the best deal that fits your budget and requirements, ensuring you get the most value for your money.'
        },
        {
            question: '3. How do I find such low rental car prices?',
            answer: ' Look for discount codes and coupons: Search for discount codes and coupons that you can use to lower the rental price. Renting from an off-airport location can sometimes result in lower prices.'
        }
    ]

     function handleShowAnswer(index){
        if(selectedQuestion === index){
         return   setSelectedQuestion(null)
        }
        setSelectedQuestion(index)
     }

    const faq = questions.map((question, index) => (
        <div className="flex flex-col w-[320px] md:w-[550px] border-b border-gray-50">
        <button onClick={() => handleShowAnswer(index)}
        className="flex justify-between items-center py-4 px-8 bg-bg-color font-semibold focus:bg-text-color focus:shadow-md focus:shadow-text-color focus:text-white transition-colors duration-500">
            <span>{question.question}</span>
            <FontAwesomeIcon icon={faAngleDown} />
            </button>
            <AnimatePresence>
            {selectedQuestion === index && <motion.div 
            initial={{y: -5}} animate={{y: 0}} transition={{duration: 1}}
            className="bg-bg-color py-4 px-8 text-center text-zinc-500">
                <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{duration: 1}}>
                    {question.answer} </motion.p>
            </motion.div>}
            </AnimatePresence>
       
     </div>
    ))

    return (
        <div className="w-full bg-cover  mb-16 md:mb-32 py-12  flex flex-col items-center md:h-[420px] m-0" style={{backgroundImage:`url(${background})`}}>
            <p className="text-bg-color font-bold text-2xl md:text-4xl mb-8">Frequently Asked Questions </p>
            <div className="bg-bg-color"> {faq}</div>
            
        </div>
    )
}