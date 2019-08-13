const mongoose = require('mongoose');

const URL_MONGO = 'mongodb+srv://delgadoosorioluis:Programacion12@firstcluster-un47u.mongodb.net/test?retryWrites=true&w=majority'



mongoose.connect(URL_MONGO,{useNewUrlParser:true},(err)=>{
    if(!err) console.log('Conexión exitosa con MongoDB')
})

const Schema = mongoose.Schema;

const StoreSchema = new Schema({
    store_name:String,
    direction:String,
    products:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:'Product'
            }
        ]
    
});

const ProductSchema = new Schema({
    name:String,
    price:Number,
    stock:Number
},{timestamps:true})

const Product = mongoose.model('Product',ProductSchema);
const Store = mongoose.model('Store',StoreSchema)


module.exports = {
    Product,
    Store
}