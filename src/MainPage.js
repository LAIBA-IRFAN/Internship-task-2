import React from "react";
import Navbar from "./Navbar";
import Cards from './Cards';
import Charts from './Charts'
import './cards.css'

const MainPage=()=>{
    return(
        <>
         <Navbar/><br></br><br></br><br></br>
         <Cards/>
         <Charts/> 
        </>
    )
}

export default MainPage;
