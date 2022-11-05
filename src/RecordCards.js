import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const RecordCards=(props)=>{
    return(
        <Card sx={{ maxWidth: 300,marginBottom:'20%',marginLeft:'33px'}}>
        <div className="card_container" style={{display:'flex'}}>
            <CardContent sx={{width:'22%'}}>
            <Typography gutterBottom variant="h5" component="div">
              {props.heading}
            </Typography>
            <Typography variant="paragraph" color="text.secondary">
            {props.subheading}
            </Typography>
          </CardContent>
          <CardMedia  sx={{width:'78%'}}
            component="img"
            image={props.image}
            width='70'
            height='250'
            alt="green iguana"
          />
          </div>
          <CardActions>
            <Button variant="contained" sx={{backgroundColor:'#ffc40c',width:'100%'}}>Record</Button>
          </CardActions>
        </Card>
    )

}
export default RecordCards;