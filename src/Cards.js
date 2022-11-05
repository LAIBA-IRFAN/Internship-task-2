import React from "react";
import CardData from "./CardData";
import Grid from '@mui/material/Grid';
import RecordCards from "./RecordCards";
import './cards.css';
import Buttons from "./Buttons";
import Form from "./Form";

const Cards=()=>{
    return(
    <Grid sx={{display:'flex'}} container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {CardData.map((element,index)=>
        <Grid  xs={4} sm={4} md={3}>
        {element.id===1?<Buttons/>:element.id===6?<Form/>:<RecordCards ind={element.id} heading={element.heading} subheading={element.subheading} image={element.image}/> }
        </Grid> 
        )}
            </Grid>
)
}

export default Cards;