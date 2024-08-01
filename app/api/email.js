// pages/api/submit-email.js
import connectDB from '@/lib/mongoose';
import Email from '@/models/Email';

connectDB();

export default async function handler(req, res) {
  console.log(req);
  if (req.method === 'POST') {
    const { email } = req.body;
    try {
      const newEmail = new Email({ email });
      await newEmail.save();
      res.status(200).json({ message: 'Email saved successfully!' });
    } catch (error) {
      res.status(500).json({ message: 'Error saving email', error });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
