const express = require('express');

const router = express.Router();
const HotStore = require('../../models/hotstore');
const mongoose = require('mongoose');

router.get('/', (req, res, next) => {

    HotStore.find().sort({priority:1})
    .exec()
    .then(docs => {
      const response = {
        count: docs.length,
        hotstores: docs.map(doc => {
          return {
            result:doc,
            request: {
              type: "GET",
              url: process.env.URL+"/main"+ doc._id
            }
          };
        })
      };

      res.status(200).json(response);
  
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});


router.post('/', (req, res, next) => {

        const store = new Store({
        _id: new mongoose.Types.ObjectId(),
        name:"강남",
        phone:"2132160585",
        address:"10533 Willow Lane",
        city:"Santa Fe Springs",
        state:"CA",
        zipcode:"90670",
        img:[],
        main_image:"",
        open:11,
        close:23,
        category:"Restaurant",
        menu:["막창","곱창","순대","양고기","불고기","쇠고기","돼지고기"],
        priority:10,
        review:[],
        rate: 5,
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