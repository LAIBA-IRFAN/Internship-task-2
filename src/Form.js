import React, { useState } from "react";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const Form=()=>{
    const [input,setInput] = useState('');

    const change=(e)=>{
        setInput(e.target.value)

    }
    const submit=(e)=>{
        e.preventDefault();
        setInput('');
    }
    return(
        <>
            <form onSubmit={submit}>
            <Card sx={{maxWidth: 300,marginBottom:'20%',marginLeft:'30px',height:'305px',paddingTop:'12px'}}>
            <CardContent>
            <Grid sx={{display:'flex'}} container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid  xs={2} sm={4} md={6}>
            <Typography sx={{marginLeft:'25px'}} variant="h5">Record</Typography>
            </Grid>
            <Grid  xs={2} sm={4} md={6}>
            <Button  sx={{height:'28px'}}  variant="contained">MD-CALC</Button>
            </Grid>
            </Grid>
            <Typography sx={{fontSize:'14px'}} paragraph="true">Temperature °C</Typography>
            <Typography sx={{fontSize:'14px'}} paragraph="true">SPO2</Typography>
            <Typography sx={{fontSize:'14px'}} paragraph="true">HeartBeat  %</Typography>
            <Typography sx={{fontSize:'14px'}} paragraph="true">PI</Typography>
            <TextField onChange={change} value={input} id="outlined-basic" label="Physical Diagnosis" variant="outlined"/><br></br><br></br>
            <Button sx={{height:'28px'}} type='submit' variant="contained">Submit</Button>
            </CardContent>
            </Card>


            </form>
        </>
    )

}
export default Form;