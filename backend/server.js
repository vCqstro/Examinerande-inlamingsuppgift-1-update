const express = require('express');
const app = express();

app.get('/', (request, response) => {
    response.send("Bröllopsappen!");
});

const port = 5050;

app.listen(port, () => {
    console.log(`Listening to port ${port}...`);
})