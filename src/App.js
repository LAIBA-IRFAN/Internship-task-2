import logo from './logo.svg';
import './App.css';
import MainPage from './MainPage'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './Login';
import Register from './Register';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

function App() {
  return(
    <>
  
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </BrowserRouter>
      <br></br> 
       <BottomNavigation sx={{marginTop: '51px'}}
        showLabels
      >
        <BottomNavigationAction sx={{fontSize:'10px',marginRight:'1200px',width:'100% !important'}} label="© 2022 Neurocomputation Lab"/>
      </BottomNavigation> 
      </>
   

  )
}

export default App;
