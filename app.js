
const express = require('express')

const app = express();

const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose',)
const main = require('./api/routes/main');
const upload = require('./api/routes/upload');

mongoose.connect("mongodb+srv://mingjian:"+ process.env.MONGO_ATLAS_PW +"@koye-cluster-8lfh0.mongodb.net/koye?retryWrites=true&w=majority",
{
   useNewUrlParser: true ,
   useUnifiedTopology: true
}
);


app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin,X-Requested-Widh, Content-Type, Accept, Authorization");
    // res.header('Access-Control-Allow-Headers','*');

    if (req.method === 'OPTIONS') {

        req.header("Access-Control-Allow-Methods','PUT, POST, PATCH, DELETE, GET");
        return res.status(200).json({});
    }
    next();
})


app.use('/main', main);

app.use('/upload',upload);

app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
})

app.use((error, req, res, next) => {


    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;
