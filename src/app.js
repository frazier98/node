var path = require('path');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();

//Connecting to db Mongo
//mongoose.connect('mongodb://localhost/crud', {useNewUrlParser: true}).then(
  //  db => console.log('Db connected')
//).catch(
  //  err => console.log(err)
//);
mongoose.connect('mongodb+srv://zapa:Hola12345.@cluster0-zkmzq.azure.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true});

//importing routes
const indexRoutes = require('./routes/index');

//settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

//routes
app.use('/', indexRoutes);

//starting the serve
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});