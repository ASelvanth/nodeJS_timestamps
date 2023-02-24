const dotenv = require('dotenv');
const express = require('express')
dotenv.config();

const app = express();
const router = require('./router/path.router');

app.use(express.json());

app.use('/file',router);

// app.get('/', (req, res) => {
//     res.send('Home page')
// })

app.get('/', (req, res) => {
    res.send('Please use endpoints: /file/createfile- to create &&  /file/getfile- to lists')
})

const PORT = process.env.PORT || 5000;

app.listen(PORT , ()=>{
    console.log(`server is listening ${PORT}`);
})

