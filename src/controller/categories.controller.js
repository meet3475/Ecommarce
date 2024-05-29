const Categories = require("../model/categories.model")

const listcategories = async (req, res) => {
    try {
        const categories = await Categories.find();

        if (!categories || categories.length === 0) {
            res.status(404).json({
                success: false,
                message: "Categories not found"
            })
        }

        res.status(200).json({
            success: true,
            message: "categories fetched sucessfully",
            data: categories
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Intenal server error." + error.message
        })
    }
}

const getcategory = () => {

}

const addcategory = () => {

}

module.exports = {
    listcategories,
    getcategory,
    addcategory
}