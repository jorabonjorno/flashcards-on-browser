require('@babel/register');

const express = require('express');
const path = require('path');
const logger = require('morgan');
const mainRouter = require('./routes/mainRouter');
const app = express();
require('dotenv').config()
const PORT = process.env.PORT ?? 3000;
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', mainRouter)

app.listen(PORT, () => {
    console.log(`server started PORT: ${PORT}`);
});
