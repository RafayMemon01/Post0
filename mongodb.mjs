// mongoDB

import { MongoClient } from 'mongodb';
const uri = "mongodb+srv://rafayrashid200611:787898@cluster0.fqvso92.mongodb.net/?retryWrites=true&w=majority";


// Connect to your Atlas cluster
export const client = new MongoClient(uri);
async function run() {
    try {
        await client.connect();
        console.log("Successfully connected to Atlas");
    } catch (err) {
        console.log(err.stack);
        await client.close();
        process.exit(1);
    }
    
}
run().catch(console.dir);
process.on('SIGINT', async function() {/////this function will run jst before app is closing
    console.log("app is terminating");
    await client.close();
    process.exit(0);

    });



// mongodb end 
