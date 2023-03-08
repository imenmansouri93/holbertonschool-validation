const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')

dotenv.config()
const app = express()
dotenv.config();
const mongoose = require('mongoose');

app.use(express.json());

mongoose.set('strictQuery', true);
app.use( cors() );
app.get('/', (req, res) => {
    res.send('hello social media app')
})
const userRoutes  = require('./routes/user.router')
app.use('/users', userRoutes)


mongoose.connect(process.env.mongoURI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});
console.log("MongoDB Connected");

app.listen(process.env.PORT, () => {
    console.log(`app listing on port ${process.env.PORT}`);
})