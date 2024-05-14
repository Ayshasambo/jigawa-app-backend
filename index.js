const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { application } = require('express');
const session = require('express-session')
require('dotenv/config');
const cors = require("cors");

//connect to database
// mongoose.connect(process.env.DB_CONNECTION)
// .then(() => console.log('connected to mongodb...'))
// .catch(err => console.error('Could not connect to MongoDB...', err));