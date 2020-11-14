import * as express from 'express';

const app = express();

app.get("/", (req, res) => {
    res.send("Hei")
})

app.listen(8080, () => console.log("running"))