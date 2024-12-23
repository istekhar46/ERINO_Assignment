const mongoose = require('mongoose');

const connetDb = async () => {

    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`Mongodb Connected: ${conn.connection.host}`);
    }
    catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = connetDb;