const cartProductModel = require('../../models/cartProduct');
const countAddToCartProduct = async(req,res)=>{
    try{
        const userId = req.userId;

        const count = await cartProductModel.countDocuments({
            userId:userId
        })
        res.json({
            data:{
                count:count
            },
            message:"OK",
            error:false,
            success:true,        
        })

    }catch(error){
        res.json({
            message:error.message,
            error:true,
            success:false
        })
    }
}

module.exports = countAddToCartProduct; 