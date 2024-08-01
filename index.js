
const express = require('express');
const route = require('./routes/route');
const app = express();
const cors = require('cors');



app.use(cors())

app.use('/', route);


const PORT = 9393;

app.listen(9393, ()=>{

    console.log(`server loading at ${PORT}`);
})