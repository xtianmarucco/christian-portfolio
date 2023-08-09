import nodemailer from 'nodemailer';

// Load environment variables from .env file

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const formData = req.body;

  // Create a Nodemailer transporter with Gmail service and environment variables
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'christian.marucco',
      pass: 'nquoapqlssuzxldd'
    }
  });

  // Email content
  const mailOptions = {
    from: 'christian.marucco',
    to: 'christian.marucco',
    subject: 'New Form Submission',
    text: `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);

    // Here, you can process the form data as required.
    // For example, you can save it to a database.

    console.log('Received form data on the server:', formData);

    // Respond with a success message
    res.status(200).json({ message: 'Form submission successful!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to submit the form. Please try again later.' });
  }
}