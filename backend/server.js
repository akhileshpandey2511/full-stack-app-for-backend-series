// const express = require ('express');
import express from 'express';

const app = express();

// app.use(express.static('dist'))
// app.get('/',(req,res) => {
//     res.send('server is ready');
// });

app.get('/api/jokes',(req,res)=>{
    const jokes = [
        {
            id : 1,
            title : 'first joke',
            content : "here is first joke"
        },
        {
            id : 2,
            title : 'SECOND joke',
            content : "here is SECOND joke"
        },
        {
            id : 3,
            title : 'third joke',
            content : "here is third joke"
        },
        {
            id : 4,
            title : 'fourth joke',
            content : "here is fourth joke"
        },
        {
            id : 5,
            title : 'fifth joke',
            content : "here is fifth joke"
        }
    ];
    res.send(jokes)
});

const port = process.env.PORT || 3000;

app.listen(port, () =>{
    console.log(`port is running on http://localhost:${port}`)
})