import React from "react";
import Button from '@mui/material/Button';

const Buttons=()=>{
    return(
        <>
        <div style={{display:'flex',flexDirection:'column',padding:'20px'}}>
       <Button sx={{width:'50%',textTransform:'none',marginLeft:'30px',marginBottom:'10px'}} variant="contained">Temp</Button>
       <Button sx={{width:'50%',textTransform:'none',marginLeft:'30px'}} variant="contained">Oxy-Meter</Button>
       </div>
        </>
    )

}

export default Buttons;