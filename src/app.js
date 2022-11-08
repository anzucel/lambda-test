const express = require ('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

require('dotenv').config();

app.use(morgan('dev'));

//CORS
app.use(cors());
app.options('*', cors());

app.use(bodyParser.json());

//Live check
app.use('/live', express.Router().get('/', (req, res, next) => res.status(200).send()))

//Examples
app.use('/examples', require('./routes/examples.router'));

//Routes
app.use('/users', require('./routes/users.router'));
app.use('/feed', require('./routes/feed.router'));
app.use('/chat', require('./routes/chat.router'));

module.exports = app;
