import React, { useState } from "react";
import Dubai from '../../assets/DubaiNights.png';
import DubaiNight from '../../assets/DubaiView.png';
import DubaiFrame from '../../assets/DubaiFrame.png'
import './HeroSection.css'
import Card from "../card/Card.js";

const HeroSection=()=>{
    const arr=[Dubai,DubaiNight,DubaiFrame];
   
    // console.log(arr.length)
    const [i,setI]=useState(0)
    const handlePrev=()=>{
        const index = (i===0?arr.length-1:i - 1) % arr.length;
     setI(index)
    }

const handleNext=()=>{
  const index=(i+1) % arr.length
  setI(index)

}
    return(
        <>
       <div className="imgContainer">
        <img className="img1" src={arr[i]} alt="no text"/>
        <div className="btn">
        <button className="prev" onClick={handlePrev}>Prev</button>
        <button className="next" onClick={handleNext}>Next</button>
        </div>
       </div>
     
       </>
    )
}
export default HeroSection

