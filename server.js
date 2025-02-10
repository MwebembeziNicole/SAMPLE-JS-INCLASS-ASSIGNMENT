import express from "express";

import { fetchUsingAsyncAwait } from "./async_and_await";
import { fetchUsingCallback } from "./callback";
import{fetchUsingPromise} from "./promise.js";

const app = express();

app.get("/", (req, res) => {
    res.send("Server is ready");
});

app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
});
