const { urlencoded } = require('express');
const express = require('express');
const { default: mongoose } = require('mongoose');
const dotenv = require('dotenv')
const app = express()
const book = require('./model/model')
const router = require('./routes/routes')

dotenv.config()
mongoose.connect(process.env.mongoString).then(() => {
    console.log('connected to db');
}).catch(err => console.error(err))


const port = 5000;
app.use(express.json())
app.use('/', router)
// app.use(app._router)



app.listen(port, () => {
    console.log(`server is on the ${port}`);
})