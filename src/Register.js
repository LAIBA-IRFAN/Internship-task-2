import React, {useState} from "react";
import {CForm, CInputGroup, CInputGroupText,CFormInput, CButton,CFormSelect } from '@coreui/react';
import  CIcon  from '@coreui/icons-react';
import {cilUser,cibMailRu,cilPhone,cilLockLocked} from '@coreui/icons';
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Form.css';
import axios from 'axios';
import { useRef } from "react";

const Register=()=>{
const ref = useRef(null);
  const [details,setDetails] = useState({
    firstname:'',
    lastname:'',
    email:'',
    phone:'',
    password:''
  })
//   const [patstate,setPatstate] = useState(false);
//   const [docstate,setDocstate] = useState(false);

  const click=(e)=>{
    if(e.target.value==="patient"){
        return(
            ref.current.style.display ="none")
    }
    else{
        ref.current.style.display ="flex"

    }
}


  const Change = e => {
    setDetails((prevValue)=>{
      return{
        ...prevValue,
        [e.target.name]:e.target.value
      }
    })
}
  const Submit = e => {
    e.preventDefault();
    const data = {
      firstname: details.firstname,
      lastname: details.lastname,
      email: details.email,
      phone: details.phone,
      password: details.password
    };
    const data1 = {
      firstname: details.firstname,
      lastname: details.lastname,
      email: details.email,
      phone: details.phone
    };

    if(data.firstname && data.lastname && data.email && data.phone && data.password){
      
      axios
      .post('http://localhost:3000/doctor', data)
      .then(res => {
        setDetails((prevValue)=>{
          return{
            ...prevValue,
            firstname:'',          
            lastname:'',
            email:'',
            phone:'',
            password:''
          }

        })
        // setDocstate(true);
      })
      .catch(err => {
        console.log("Error!")
      })

    }
    else{
      axios
      .post('http://localhost:3000/patient', data1)
      .then(res => {
        setDetails((prevValue)=>{
          return{
            ...prevValue,
            firstname:'',          
            lastname:'',
            email:'',
            phone:''
          }

        })
        // setPatstate(true);
      })
      .catch(err => {
        console.log("Error!")
      })

    }
  }
    // if(patstate){
    //   return( <Navigate to='/'/>)
    // }
    // if(docstate){
    //   return( <Navigate to='/'/>)
    // }

    return(
    <>
    <br></br><br></br>
        <div className="container">
        <div className= "main_container col-xl-6 col-lg-6 col-md-6 col-sm-6 p-4">
        <div className= "register">Register</div><br></br>
        
      <CForm noValidate onSubmit={Submit}>

    <CFormSelect id="options" aria-label="Default select example" onChange={click}>
  <option value="doctor">Doctor</option>
  <option value="patient">Patient</option>`
</CFormSelect>


        <br></br>

    <CInputGroup className="mb-3">
  <CInputGroupText id="basic-addon1"><CIcon icon={cilUser} size="lg"/></CInputGroupText>
  <CFormInput type='text' name='firstname' value={details.firstname} onChange={Change} placeholder="First Name" aria-label="First Name" aria-describedby="basic-addon1"/>
   </CInputGroup>

   <CInputGroup className="mb-3">
  <CInputGroupText id="basic-addon1"><CIcon icon={cilUser} size="lg"/></CInputGroupText>
  <CFormInput type='text' name='lastname' value={details.lastname} onChange={Change} placeholder="Last Name" aria-label="Last Name" aria-describedby="basic-addon1"/>
   </CInputGroup>

   <CInputGroup className="mb-3">
  <CInputGroupText id="basic-addon1"><CIcon icon={cibMailRu} size="lg"/></CInputGroupText>
  <CFormInput type='email' name='email' value={details.email} onChange={Change} placeholder="Email Address" aria-label="Email Address" aria-describedby="basic-addon1"/>
   </CInputGroup>

   <CInputGroup className="mb-3">
  <CInputGroupText id="basic-addon1"><CIcon icon={cilPhone} size="lg"/></CInputGroupText>
  <CFormInput type='tel' name='phone' value={details.phone} onChange={Change} placeholder="Phone Number" aria-label="Phone Number" aria-describedby="basic-addon1"/>
   </CInputGroup>

   <CInputGroup ref={ref} className="mb-3" id="password">
  <CInputGroupText id="basic-addon1"><CIcon icon={cilLockLocked} size="lg"/></CInputGroupText>
  <CFormInput type='password' name='password' value={details.password} onChange={Change} placeholder="Password" aria-label="Password" aria-describedby="basic-addon1"/>
   </CInputGroup>

   <CButton className="main_button" color="success" type="submit">Create Account</CButton>
   </CForm>
   </div>
   </div>
        </>
)
}


export default Register; 