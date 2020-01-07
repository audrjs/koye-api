const mongoose = require('mongoose');

const storeSchema = mongoose.Schema({
    
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    phone:String,   
    address:String,
    city:String,
    state:String,
    zipcode:String,
    img:Array,
    main_img:String,
    open:Number,
    close:Number,
    category:String,
    menu:Array,
    priority:Number,
    review:Array,
    rate: Number,
})

module.exports = mongoose.model('Hot_Store',storeSchema);