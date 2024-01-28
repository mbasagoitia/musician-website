const sgMail = require('@sendgrid/mail');
const dotenv = require('dotenv');

dotenv.config();

exports.handler = async (event) => {
  try {
    const formData = JSON.parse(event.body);

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    
    const htmlContent = `
      <html>
      <head>
        <title>Email Template</title>
        <style>
            body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            color: #333;
            }

            .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #fff;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }

            .header {
            text-align: center;
            color: #007bff;
            }
        </style>
        </head>
        <body>
          <h2>New Form Submission</h2>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Phone Number:</strong> ${formData.phoneNumber}</p>
          <p><strong>Message:</strong> ${formData.message}</p>
        </body>
      </html>
    `;

    const msg = {
      to: 'marika.basagoitia@gmail.com',
      from: 'belenhernandez.violin@gmail.com',
      subject: 'New Form Submission',
      html: htmlContent,
    };

    await sgMail.send(msg);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully' }),
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error sending email' }),
    };
  }
};
