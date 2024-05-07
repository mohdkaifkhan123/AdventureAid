import React, { useState } from "react";
import './HeroSectionActivities.css'
import ActivitiesHeroSection from "../../assets/ActivitiesHeroSection.png";
const HeroSectionActivities=()=>{
//     const arr=[Dubai,DubaiNight,DubaiFrame];
   
//     // console.log(arr.length)
//     const [i,setI]=useState(0)
//     const handlePrev=()=>{
//         const index = (i===0?arr.length-1:i - 1) % arr.length;
//      setI(index)
//     }

// const handleNext=()=>{
//   const index=(i+1) % arr.length
//   setI(index)

// }
    return(
        <>
       <div className="imgContainer">
        <img className="img1" src={ActivitiesHeroSection} alt="no text"/>
        <div className="btn">
        {/* <button className="prev" onClick={handlePrev}>Prev</button>
        <button className="next" onClick={handleNext}>Next</button> */}
        
        </div>
       </div>
     
       </>
    )
}
export default HeroSectionActivities

