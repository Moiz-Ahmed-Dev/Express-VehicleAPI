const express = require('express')
const app = express()
require('dotenv').config()
const CategoryRouter = require('./API/Category/Router')
const UserRouter = require('./API/User/Router')
const ProductRouter = require('./API/Products/Router')
const BrandRouter = require('./API/Brands/Router')
const MailRouter = require('./API/Mailer/Router')
const OrderRouter = require('./API/Orders/Router')

const port = process.env.SERVER_PORT || 3200

app.use(express.json())
app.use ('/api', CategoryRouter)
app.use ('/api', UserRouter)
app.use ("/api", BrandRouter)
app.use ("/api", ProductRouter)
app.use ("/api", MailRouter)
app.use ("/api", OrderRouter)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})