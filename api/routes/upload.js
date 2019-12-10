const express = require('express');

const router = express.Router();
const HotStore = require('../../models/hotstore');
const mongoose = require('mongoose');


router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "Here we are handling the get request for the products"
    });
});

router.post('/', (req, res, next) => {

        const store = new HotStore({
        _id: new mongoose.Types.ObjectId(),
        name:"강남",
        phone:"2132160585",
        rate: 5,
        address:"10533 Willow Lane, Santa Fe Springs,CA",
        review:13,
        img:"img",
        open:"11am",
        close:"11pm",
        category:"Restaurant",
        latitude:"11.11",
        longtitude:"12.12",
        menu:["막창","곱창","순대","양고기","불고기","쇠고기","돼지고기"],
        priority:10
    });

     store.save().then(result=>{
        console.log(result);

    }).catch(err=> console.log(err));

    res.status(200).json({
        message: "Here we are handling the get request for the products",
        param: store
    });
});

router.get('/:id', (req, res, next) => {

    const id = req.params.id;
    // console.log(id);
    res.status(200).json({
        message: id
    });
});



module.exports = router;