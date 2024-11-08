require('dotenv').config();
const path = require('path');

const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.locals.basedir = path.join(__dirname, 'views');

app.use(express.static('public'));

const router = require('./routes')
app.use('/', router);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
})