import React from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import Grid from '@mui/material/Grid';
import ChartData from "./ChartData";
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';


const Charts=()=>{
    return(
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      {ChartData.map((element)=>

        <Grid sx={{marginLeft:'6%'}}  xs={4} sm={8} md={5}>
        <Card>
        <Typography sx={{marginLeft:'10px'}} variant="paragraph">Patient History Chart</Typography>
          <Line data={element} />
        </Card>
        </Grid>
      )}
      </Grid>
      );
}

export default Charts;