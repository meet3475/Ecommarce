const Subcategories = require("../model/subcategories.model");

const listsubcategories = async (req, res) => {
    try {
        const subcategories = await Subcategories.find();

        if (!subcategories || subcategories.length === 0) {
            res.status(404).json({
                success: false,
                message: "Subcategories not found"
            })
        }

        res.status(200).json({
            success: true,
            message: "Subcategories fetched sucessfully",
            data: subcategories
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Intenal server error." + error.message
        })
    }
} 

const getsubcategory = () => {

}

const addsubcategory = () => {

}

module.exports = {
    listsubcategories,
    getsubcategory,
    addsubcategory
}