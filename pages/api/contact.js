import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { email, name, message } = req.body;

        if (!email || !name || !message) {
            res.status(422).json({ message: 'Invalid input.' });
            return;
        }

        const newMessage = {
            email, name, message
        };
        let client;
        try {
            client = await MongoClient.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.5okcp.mongodb.net/my-site?retryWrites=true&w=majority`);

        } catch (error) {
            res.status(500).json({ message: 'Could not connect to database.' });
            return;
        }

        const db = client.db();

        try {
            const result = await db.collection('messages').insertOne(newMessage);
            newMessage.id = result.insertedId;
        } catch (error) {
            res.status(500).json({ message: 'Storing message failed' });
        } finally {
            client.close();
        }

        console.log(newMessage);

        res.status(201).json({ message: 'Succesfully stored message!', message: newMessage });
    }
}