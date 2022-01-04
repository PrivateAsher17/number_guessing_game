const path = require('path')
const express = require('express')
const app = express()

const staticPath = path.join(__dirname)
// console.log(__dirname);
app.use(express.static(staticPath))

app.get('/',(req, res)=>{
  res.send()
})
app.listen(4000)