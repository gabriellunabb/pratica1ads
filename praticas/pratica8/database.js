const { MongoClient } = require("mongodb");

const url = "mongodb+srv://admin:admin@cluster0.mytl2y2.mongodb.net/";

async function conectarDb() {
    try {
        const client = await MongoClient.connect(url);
        return client.db("agenda");
    } catch (error) {
        console.log(error);
    }
}

module.exports = { conectarDb };
