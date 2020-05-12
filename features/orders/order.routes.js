const express = require ('express')
const detail_order = require ('../../features/deatail_orders/detail_order.model')
const product = require ('../../features/products/product.model')
const Order = require ('../../features/orders/order.model')
const state = require ('../../features/states/state.model')
const payment = require ('../../features/payments/payment.model')
const user = require ('../../features/users/user.model')
const detail_order_has_product = require ('../../features/orders/detail_order_has_product.model')


const router = express.Router()

Order.belongsTo(detail_order, {
    foreignKey: 'detail_order_id'
})



const getDetailOrder = router.get('/order/detail', (req, res, err) => {
    detail_order.findAll({
        include: [detail_order_has_product]
    })
    .then((detail_order) => {
        if (detail_order){
          res.json(detail_order)          
        } else {
          err.status(400).json({
            status: '404',
            message: 'Detail Order is not found'
          })
        }

    })
  })

  const getDetailOrderId = router.get('/order/detail/:id', (req, res,) => {
    let { id } = req.params
    detail_order.findByPk(id,{
      include: [{ all: true }]
    })
      .then((detail_order) => {
      if (detail_order){
        res.json(detail_order)          
      } else {
        err.status(400).json({
          status: '400',
          message: 'That detail order does not exist'
        })
      }
    })

  })

  const newDetailOrder = router.post('/order/detail', (req, res) =>{
    detail_order.create({
      order_id: req.body.order_id,
      
      total: req.body.total,

    })
    .then((detail_order) =>{
      res.json(detail_order)
    }, (errors) => {
      res.json(errors)
    })
  
  })

  Order.belongsTo(state, {
    foreignKey: 'statet_id'
  })

  state.hasMany(Order,{
    foreignKey: 'statet_id'
  })
  
  Order.belongsTo(payment, {
    foreignKey: 'payment_id'
  })
  payment.hasMany(Order, {
    foreignKey: 'payment_id'
  })

  Order.belongsTo(user, {
    foreignKey: 'user_user_id'
  })
  user.hasMany(Order, {
    foreignKey: 'user_user_id'
  })
  
  
  detail_order.belongsToMany(product, {as: 'orderDet', through: 'detail_order_has_product', foreignKey: 'detail_order_id'})
  product.belongsToMany(detail_order, { as: 'orderDet' ,through: 'detail_order_has_product', foreignKey: 'product_id'})
  



  const getOrder = router.get('/order', (req, res, err) => {
    Order.findAll({
        include: [ {all: true}]
    })
    .then((order) => {
        if (order){
          res.json(order)          
        } else {
          res.status(400).json({
            status: '404',
            message: 'Order not founds'
          })
        }

    })
  })

  const getOrderId = router.get('/order/:id', (req, res,) => {
    let { id } = req.params
    Order.findByPk(id,{
      include: [{ all: true }]
    })
      .then((order) => {
      if (order){
        res.json(order)          
      } else {
        res.status(400).json({
          status: '400',
          message: 'That order does not exist'
        })
      }
    })

  })

  const modifyorderstate  = router.put('/order/:id', (req,res) => {
    Order.update(
      { 
        state_id: req.body.state_id,
        
  
    },
    {
      where:
      {
        id: req.params.id
      }
    })
    .then( () => res.status(200).json({
      status: '200',
      message: 'The state order was update'
    }))
  })


  const orderNew = router.post('/order', (req, res) =>{
    Order.create({
      user_user_id: req.body.user_user_id,
      hour: req.body.hour,
      statet_id: req.body.statet_id,
      payment_id: req.body.payment_id,
      detail_order_id: req.body.detail_order_id

    })
    
      .then((order) => {
      res.json(order)
      
      })

    , (errors) => {
      res.json(errors)
    }

  })

  const addDetailOrder = router.put('/order/:id/detail', (req,res,next) =>{
    Order.findByPk(req.params.id)
    .then(order => {
      return order.setOrderDet(req.body.detId)

    })
    .then (res.send.bind(res))
    .catch(next)
  })

  



  

  
  

  

  module.exports = getDetailOrder ,getDetailOrderId,  newDetailOrder, getOrder, getOrderId, modifyorderstate , orderNew , addDetailOrder