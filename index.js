const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./route/userRoute');
const productRoutes = require('./route/productRoute');
const app = express();
const PORT = 2200;
const live_uri =
'mongodb+srv://nandutut2013:<Israel@1>@cluster.b8wuy.mongodb.net/ecommerce?retryWrites=true&w=majority&appName=Cluster';

const local_URI = 'mongodb://localhost:27017/multer';
app.get('/', (req, res) => {
  res.status(200).send('api is ready!!!');
});
app.use(cors());
app.use(express.json());
app.use('/auth', userRoutes);
app.use('/product', productRoutes);

mongoose
  .connect(local_URI)
  .then(() => console.log('mongoDB Connected'))
  .catch((err) => console.log('Connection Error: ', err));

app.listen(PORT, () => {
  console.log(`app is running on port ${PORT}`);
});
