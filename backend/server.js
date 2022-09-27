const express = require('express');
const cors = require('cors');
const neDB = require('nedb-promise');
const bcrypt = require('bcryptjs');
const {
    response
} = require('express');

const app = express();

const accounts = new neDB({
    filename: 'accounts.db',
    autoload: true
})

const images = new neDB({
    filename: 'images.db',
    autoload: true
})

app.use(cors({
    origin: '*'
}));

app.use(express.json());

app.get('/', (request, response) => {
    response.send("Bröllopsappen!");
});

app.post('/signup', async (request, response) => {
    const credentials = request.body;
    console.log(credentials);
    const resObj = {
        success: true,
        usernameExists: false,
        emailExists: false
    }
    const usernameExists = await accounts.find({
        username: credentials.username
    })
    const emailExists = await accounts.find({
        email: credentials.email
    })
    if (usernameExists.length > 0 || emailExists.length > 0) {
        console.log("Ditt konto kunde inte skapas!")
        resObj.success = false;
    } else {
        accounts.insert(credentials);
    }
    response.json(resObj);
})

app.post('/login', async (request, response) => {
    const credentials = request.body;
    const resObj = {
        success: false
    }
    console.log(credentials);
    const account = await accounts.find({
        username: credentials.username
    })
    const usernameExists = await accounts.findOne({
        username: credentials.username
    })
    const passwordExists = await accounts.findOne({
        password: credentials.password
    })

    if (usernameExists !== null && passwordExists !== null) {
        console.log(`Du har nu loggat in, välkommen ${credentials.username}.`);
        resObj.success = true
    } else {
        console.log("Kan inte hitta användare!");
    }
    response.json(resObj)
})

const port = 5000;

app.listen(port, () => {
    console.log(`Listening to port ${port}...`);
})