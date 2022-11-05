import React, { useState } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import {Navigate} from 'react-router-dom';

const Navbar=()=>{
    const [value,setValue] = useState(false)
    const [register,setRegister] = useState(false)
    const [login,setLogin] = useState(false)
    const click=()=>{
        setValue(true);
    }
    if(register){
        return(<Navigate to='/register'/>)  
    }
    if(login){
        return(<Navigate to='/login'/>)
    }
    return(
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" color="inherit">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                Dashboard
              </Typography>
              <Button variant="contained" sx={{textTransform:'none',marginRight:'1%'}}>Sanitize</Button>
              <Button variant="contained" sx={{textTransform:'none',marginRight:'1%'}}>Stream</Button>
              <Button variant="contained" sx={{textTransform:'none',marginRight:'1%'}}>Audio Stream</Button>
              <Button variant="contained" sx={{textTransform:'none',marginRight:'1%'}}>Start Meeting</Button>
              <IconButton onClick={click}><PersonIcon color="black"/></IconButton>
              {value===true?
              <><Box sx={{display:'flex',flexDirection:'column'}}>
                <Button variant="contained" onClick={()=>setRegister(true)} sx={{textTransform:'none'}}>Register</Button>
                <Button variant="contained" onClick={()=>setLogin(true)} sx={{textTransform:'none'}}>Login</Button>
                </Box></>:null}
            </Toolbar>
          </AppBar>
        </Box>
      );


}
export default Navbar;