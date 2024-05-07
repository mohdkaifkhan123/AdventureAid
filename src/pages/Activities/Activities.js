import React from "react";
import './Activities.css'
import Header from "../../components/header/Header";
import HeroSectionActivities from "../../components/heroSectionActivities/HeroSectionActivities";
import CardPopular from "../../components/cardPopular/CardPopular";
import Footer from "../../components/footer/Footer";
const Activities=()=>{
    return(
        <>
        <Header/>
        <HeroSectionActivities/>
        <div className="activitiespagetitle">Activities</div>
        <CardPopular/>
        <Footer/>
        </>
       
    )
}
export default Activities