require('dotenv').config();
const path = require('path');

const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.locals.basedir = path.join(__dirname, 'views');

const fileUpload = require('express-fileupload')
app.use(fileUpload())

app.use(express.static('public'));

const session = require('express-session');
app.use(session({
  secret: process.env.SECRET || 'secret',
  resave: false,
  saveUninitialized: false
}));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

const adminRouter = require('./routes/admin');
app.use('/admin', adminRouter);

const router = require('./routes');
app.use('/', router);

app.use((err, req, res, next) => {
  res.status(500).send(err.message)
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
})