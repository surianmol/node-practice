import express from 'express';

//const router = express.Router();
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("<h1>Hello World</h1>");
});

app.listen(port, () => {
    console.log(`App Started, listening on port ${port}`);
});

