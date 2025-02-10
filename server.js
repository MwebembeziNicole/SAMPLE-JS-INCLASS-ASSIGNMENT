import express from "express";

import { fetchUsingAsyncAwait } from "./async_and_await.js";
import { fetchUsingCallback } from "./callback.js";
import{fetchUsingPromise} from "./promises.js";

const app = express();
const Sampledataurl = 'https://jsonplaceholder.typicode.com/albums'

app.get("/", (req, res) => {
    res.send("Server is ready");
});

app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
});

//CALLBACKS
fetchUsingCallback(Sampledataurl, (error, data)=>{
    if(error){
        console.log(error);
    }
    else{
        console.log('FetchUsingCallback:',data, "\n");
    }
})
console.log("\n")

//Promises

fetchUsingPromise(Sampledataurl)
.then (data => {
    console.log('FetchUsingPromise:',data, "\n");
})
.catch(error => {
    console.log(error);
})

console.log("\n")

fetchUsingAsyncAwait(Sampledataurl)
.then(data => {
    console.log('FetchUsingAsyncAwait:',data, "\n");
})
.catch(error => {
    console.log(error);
})
