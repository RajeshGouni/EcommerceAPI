const  express = require('express');
const router = express.Router();

const { getAllProducts,createProduct,deleteProduct,updateQuantity} = require('../controllers/products')

//to get all products 
router.route('/').get(getAllProducts)
//to create a new product
router.route('/create').post(createProduct)
// to delete a product using it's ID
router.route('/:id').delete(deleteProduct)
// to update the quantity of a product
router.route('/:id/update_quantity/').post(updateQuantity)

module.exports = router