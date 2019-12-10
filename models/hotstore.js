const mongoose = require('mongoose');

const storeSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    phone:String,
    rate: Number,
    address:String,
    review:Number,
    img:String,
    open:String,
    close:String,
    category:String,
    latitude:String,
    longtitude:String,
    menu:Array,
    priority:Number
})

module.exports = mongoose.model('HotStore',storeSchema);