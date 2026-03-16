const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', require('./api/auth-api'));
app.use('/api/licensing', require('./api/licensing-api'));
app.use('/api/royalty', require('./api/royalty-api'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`SMGPUB Multiverse Engine Active on Port ${PORT}`));

