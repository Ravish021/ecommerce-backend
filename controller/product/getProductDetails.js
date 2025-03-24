const productModel = require("../../models/productModel");

const getProductDetails =  async(req,res)=>{
    try{
         const {productId} = req.body;
         const product = await productModel.findById(productId);
         res.json({
            data:product,
            message: "OK",
            success:true,
            error:false,
         })
    }catch(error){
        res.json({
            message:"some Issue",
            success:false, 
            error:true,
        })
    }
}

module.exports = getProductDetails;