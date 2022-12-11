const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());

mongoose.connect("mongodb+srv://abhishekprasad:abhiprasad@cluster0.ygncry8.mongodb.net/Ujjwal", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use('/', route);

app.use((req, res, next) => {
    
    const error = new Error('/ Path not found /');
    return res.status(400).send({ status: 'ERROR', error: error.message })
});

app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});

