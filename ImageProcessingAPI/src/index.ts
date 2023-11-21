import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    console.log(req.ip);
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`server started at localhost:${port}`);
});
