const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "Here we are handling the get request for the products"
    });
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: "Here we are handling the get request for the products"
    });
});

router.get('/:id', (req, res, next) => {

    const id = req.params.id;
    console.log(id);
    res.status(200).json({
        message: id
    });
});



module.exports = router;