const express = require('express');
const router = express.Router(); 
const mongoose = require('mongoose');
const Patient = require('../model/patient')

router.post('/',async(req,res)=>{

    const patient = new Patient({
        _id:new mongoose.Types.ObjectId,
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        email:req.body.email,
        phone:req.body.phone
    }) 

    patient.save()
    .then(result =>{
    console.log(result);
    res.status(200).json({
        newPatient:result
    })
}
    )

    .catch(err =>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    
    })

})

module.exports = router;
