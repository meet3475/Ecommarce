const mongoose = require("mongoose");

const itemsSchema = new mongoose.Schema (
    {
       
        qty: {
            type: Number,
            required: true
        }
    }, 
    {
        timestamps: true,
        versionKey: false
    }
)
const productsSchema = new mongoose.Schema (
    {
        subcategory_id: {
            type: mongoose.Types.ObjectId,
            ref: 'Categorie',
            required: true
        },
        sellar_id: {
            type: mongoose.Types.ObjectId,
            ref: 'Categorie',
            required: true
        },
        name: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true
        }, 
        discription : {
            type: String,
            trim: true,
            required: true
        },
        price: {
            type: Number,
            trim: true,
            required: true
        },
        stock: {
            type: Number,
            trim: true,
            required: true
        },
        isActive: {
            type: Boolean,
            default: true
        }
    }, 
    {
        timestamps: true,
        versionKey: false
    }
)

const Products = mongoose.model("Products", productsSchema);
module.exports = Products;
 