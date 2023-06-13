const mongoose = require("mongoose");


const connectDataBase =() => {
    mongoose.connect(process.env.DB_URL, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    }).then((data) => {
        console.log(`mongodb connected  with server: ${data.connection.host}`)
    })
}

module.exports =connectDataBase;