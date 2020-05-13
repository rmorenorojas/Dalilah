const express = require("express")
const app = express()
const config = require("./Conf/index")

// const { getUsers, registro, getUserId } = require("./features/users/user.routes")
// const { getDetailOrder, getDetailOrderId, newDetailOrder, getOrder, getOrderId, modifyorderstate, orderNew, addDetailOrder } = require("./features/orders/order.routes")
// const { getProducts, newProduct, getProductId, deleteProduct, modifyProduct } = require("./features/products/product.routes")
// const { loguinUser } = require("./features/users/loguin.routes")
// const { verificarRole } = require("./middleware/role-middleware")
// const { verificarToken } = require("./middleware/token-middleware")

// Conf de puerto
app.listen(app.get(config.SERVER_PORT), () => {
  console.log("server on port", config.SERVER_PORT)
})

// Middleware
// app.use(express.json())

// // Registro de usuarios
// app.use(require('./features/users/user.routes',registro))
// // Logueo
// app.use(require('./features/users/loguin.routes', loguinUser ))
// // Token
// app.use(require ('./middleware/token-middleware', verificarToken))
// Productos
// app.use(require("./features/products/product.routes", getProducts))
// app.use(require("./features/products/product.routes", getProductId))
// app.use(require('./features/orders/order.routes', addDetailOrder ))

// app.use(require('./features/orders/order.routes', newDetailOrder))
// app.use(require('./features/orders/order.routes', orderNew  ))

// // Pedido
// app.use(require('./features/orders/order.routes', getDetailOrder))
// app.use(require('./features/orders/order.routes', getDetailOrderId))
// app.use(require('./features/orders/order.routes', getOrder))
// app.use(require('./features/orders/order.routes', getOrderId ))

// // verificar role
// app.use(require ('./middleware/role-middleware', verificarRole))

// // modificar ordenes stado
// app.use(require('./features/orders/order.routes',modifyorderstate ))

// modifcar producto
// app.use(require("./features/products/product.routes", newProduct))
// app.use(require("./features/products/product.routes", deleteProduct))
// app.use(require("./features/products/product.routes", modifyProduct))

// // usuarios
// app.use(require('./features/users/user.routes',getUsers))
// app.use(require('./features/users/user.routes',getUserId ))
