// app/api/email/route.js
import connectDB from '@/lib/mongoose';
import Email from '@/models/Email';

connectDB();

export async function POST(request) {
  const { email } = await request.json();
  try {
    const newEmail = new Email({ email });
    await newEmail.save();
    return new Response(JSON.stringify({ message: 'Email saved successfully!' }), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Error saving email', error }), {
      status: 500,
    });
  }
}
