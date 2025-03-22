import React from 'react'
import AnimatedNumbers from "react-animated-numbers";
import { FaMapLocationDot,FaPeopleLine} from "react-icons/fa6";
import "./animatedCounters.css"
import { MdHolidayVillage } from "react-icons/md";
import { GiTakeMyMoney } from "react-icons/gi";
const AnimatedCounters = () => {
  return (
    <div className='animatedCounterContainer'>
         <div className='animatedCounterCard'>
    <FaMapLocationDot color="#fe5858" style={{fontSize:"50px"}}/>
    <div className='justify-content-center'>
    <AnimatedNumbers
    includeComma
    animateToNumber={15}
    fontStyle={{ fontSize: 40 }}
    locale="en-US"
   
  ></AnimatedNumbers><span style={{ fontSize: 30,marginTop:"10px" }}>+</span></div>
  <div className='numbersValue'>Cities</div>
  </div>  
  <div className='animatedCounterCard'>
    <MdHolidayVillage color="#fe5858" style={{fontSize:"50px"}}/>
    <div className='justify-content-center'>
    <AnimatedNumbers
    includeComma
    animateToNumber={60}
    fontStyle={{ fontSize: 40 }}
    locale="en-US"
   
  ></AnimatedNumbers><span style={{ fontSize: 30,marginTop:"8px" }}>+</span></div>
  <div className='numbersValue'>No. of Properties</div>
  </div>  
  <div className='animatedCounterCard'>
    <GiTakeMyMoney color="#fe5858" style={{fontSize:"50px"}}/>
    <div className='justify-content-center'>
    <AnimatedNumbers
    includeComma
    animateToNumber={600}
    fontStyle={{ fontSize: 40 }}
    locale="en-US"
   
  ></AnimatedNumbers><span style={{ fontSize: 30,marginTop:"10px" }}>K</span></div>
  <div className='numbersValue'>Revenue Till now generated</div>
  </div>  
  <div className='animatedCounterCard'>
    <FaPeopleLine color="#fe5858" style={{fontSize:"50px"}}/>
    <div className='justify-content-center'>
    <AnimatedNumbers
    includeComma
    animateToNumber={200}
    fontStyle={{ fontSize: 40 }}
    locale="en-US"
   
  ></AnimatedNumbers><span style={{ fontSize: 30,marginTop:"10px" }}>K</span></div>
  <div className='numbersValue'>Happy Guests</div>
  </div>  

  </div>
  )
}

export default AnimatedCounters