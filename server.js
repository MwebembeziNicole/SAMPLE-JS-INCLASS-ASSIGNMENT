// const express = require('express');
// // import express from 'express';


// const app = express();
// app.get("/", (req, res) => {
//     res.send("Server is ready")
// });
// app.listen(5000,()=>{
//     console.log('server is running on port http://localhost:5000');

// })

import express from 'express';

const app = express();

app.get("/", (req, res) => {
    res.send("Server is ready");
});

app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
});
