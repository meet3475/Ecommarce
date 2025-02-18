const mongoose = require("mongoose");

const subcategoriesSchema = new mongoose.Schema(
    {
        category_id: {
            type: mongoose.Types.ObjectId,
            ref: 'User',
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
        image: {
            type: String,
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

const Subcategories = mongoose.model("Subcategories", subcategoriesSchema);
module.exports = Subcategories;