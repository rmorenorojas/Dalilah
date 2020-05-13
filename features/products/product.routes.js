// const express = require ('express')
// const Products = require ('../products/product.model')

// const router = express.Router()

//   const getProducts = router.get('/products', (req, res, err) => {
//     Products.findAll()
//     .then((products) => {
//         if (products){
//           res.json(products)
//         } else {
//           err.status(400).json({
//             status: '404',
//             message: 'Products are not founds'
//           })
//         }

//     })
//   })

// const getProductId = router.get('/products/:id', (req, res,) => {
//     let { id } = req.params
//     Products.findByPk(id).then((product) => {
//       if (product){
//         res.json(product)
//       } else {
//         res.status(400).json({
//           status: '400',
//           message: 'That product is not on the list'
//         })
//       }
//     })

//   })

// const newProduct = router.post('/products', (req, res) =>{
//   Products.create({
//     product_detail: req.body.product_detail,
//     product_price: req.body.product_price,

//   })
//   .then((products) =>{
//     res.json(products)
//   }, (errors) => {
//     res.json(errors)
//   })

// })

// const deleteProduct = router.delete('/products/:id', (req, res) => {
//   let {id} = req.params
//   Products.findByPk(id).then((products) =>{
//     products.destroy().then(() => {
//       res.status(200).json({
//         status: '200',
//         message: 'The products was deleted'
//       })

//     })
//   } )
// })

// const modifyProduct = router.put('/products/:id', (req,res) => {
//   Products.update(
//     {
//       product_detail: req.body.product_detail,
//       product_price: req.body.product_price,

//   },
//   {
//     where:
//     {
//       id: req.params.id
//     }
//   })
//   .then( () => res.status(200).json({
//     status: '200',
//     message: 'The product was change'
//   }))

// })

// module.exports = router, getProducts, getProductId, newProduct, modifyProduct, deleteProduct
