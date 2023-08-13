const Product = require('../model/products')

//function to show all products
const getAllProducts = async (req,res) => {
  try{
    const products = await Product.find({})
    res.status(200).json({ products })
  } catch (error){
    res.status(500).json({msg: error})
  }
}

//function to create a new product
const createProduct= async (req,res) => {
    try{
        const product = await Product.create(req.body)
        res.status(201).json({product})
    }catch (error){
        res.status(500).json({msg: error})
    }
}

//function to find a product using its ID and then deleting it
const deleteProduct= async (req,res) => {
    try{
        const {id:productID} =req.params
        const product=await Product.findByIdAndDelete({_id:productID})
        if(!product){
            return res.status(404).json({ msg: `No product with id : ${productID}`})
        }
      res.status(200).json({product})  
    } catch (error){
        res.status(500).json({msg: error})
    }
   
}
//finding a product using id and updating its quantity

const updateQuantity = async function(req, res) {
  try {
      const {id:productID} = req.params;
      const foundProduct = await Product.findById({_id:productID});
      if (!foundProduct) {
          res.status(404).json({ error: 'Product not found' });
          return;
      }
      
       // Note - To increment the quantity of the product put number as a positive value in the query 
            //        and to decrement the quantity put the number as negative value in the query

      const newQty = parseInt(foundProduct.quantity) + parseInt(req.query.number);
      foundProduct.quantity = newQty;
      await foundProduct.save();

      res.send({
          product: foundProduct,
          message: 'Updated successfully'
      });
  } catch (err) {
      res.status(500).send(err);
  }
};

module.exports = {
    getAllProducts,
    createProduct,
    deleteProduct,
    updateQuantity
}