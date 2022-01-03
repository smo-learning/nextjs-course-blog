export default function handler(req, res) {
    if (req.method === 'POST') {
        const { email, name, message } = req.body;

        if (!email || !name || !message) {
            res.status(422).json({ message: 'Invalid input.' });
            return;
        }

        const newMessage = {
            email, name, message
        };
        console.log(newMessage);

        res.status(201).json({ message: 'Succesfully stored message!', message: newMessage });
    }
}