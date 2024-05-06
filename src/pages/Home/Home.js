import React from "react";
import Header from "../../components/header/Header"
import HeroSection from "../../components/heroSection/HeroSection";
import Card from "../../components/card/Card";
import CardPopular from "../../components/cardPopular/CardPopular";
import Footer from "../../components/footer/Footer";
import './Home.css'

const Home=()=>{

    return(
        <>
        <Header/>
        <HeroSection/>
        <div className="traveltitle">Travel Packages</div>
        <Card/>
        <div className="activitiestitle">Activities</div>
        <CardPopular/>
        <Footer/>
        </>
    )

}
export default Home;