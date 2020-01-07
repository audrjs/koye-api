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
        name: "강남",
        phone: "2132160585",
        address: "10533 Willow Lane",
        city: "Santa Fe Springs",
        state: "CA",
        zipcode: "90670",
        img: [],
        main_img:"https://images.squarespace-cdn.com/content/v1/5b257654f8370abae97e0b4b/1529343513027-6RYUATGUP5ENUY74A02G/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/intersitial-three.jpg?format=2500w",
        open: 11,
        close: 23,
        category: "Restaurant",
        menu: ["막창", "곱창", "순대", "양고기", "불고기", "쇠고기", "돼지고기"],
        priority: 10,
        review: [],
        rate: 5,
    });

    store.save().then(result => {
        console.log(result);

    }).catch(err => console.log(err));

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