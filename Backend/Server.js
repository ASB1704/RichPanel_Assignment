const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

require('dotenv').config(); 

app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'Dummydb', 
  }).then(() => {
    console.log('Connected to MongoDB');
  }).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

const routes = require('./Routes/Routes');
app.use('/api', routes);

app.use((req, res) => {
  res.status(404).send('404 - Not Found');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
