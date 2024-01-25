const mysql = require('mysql2');
const sgMail = require('@sendgrid/mail');
const dotenv = require("dotenv");
const sanitizeHtml = require('sanitize-html');

dotenv.config();

exports.handler = async (event) => {
  try {
    const formData = JSON.parse(event.body);
    const { name, email, phoneNumber, message } = formData;

    // Sanitize HTML input for all fields
    const sanitizedName = sanitizeHtml(name, { allowedTags: [], allowedAttributes: {} });
    const sanitizedEmail = sanitizeHtml(email, { allowedTags: [], allowedAttributes: {} });
    const sanitizedPhoneNumber = sanitizeHtml(phoneNumber, { allowedTags: [], allowedAttributes: {} });
    const sanitizedMessage = sanitizeHtml(message, { allowedTags: [], allowedAttributes: {} });

    const pool = mysql.createPool({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      waitForConnections: true,
    });

    const query = 'INSERT INTO form_submissions (name, email, phone, message) VALUES (?, ?, ?, ?)';
    const values = [sanitizedName, sanitizedEmail, sanitizedPhoneNumber, sanitizedMessage];

    pool.query(query, values, (error, results) => {
        if (error) {
          console.error('Error inserting into the database:', error);
          return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Error inserting into the database' }),
          };
        }
        console.log('Inserted into the database:', results);
        pool.end();

        // Send email notification USE A TEMPLATE
        sgMail.setApiKey(process.env.SENDGRID_API_KEY);
        const msg = {
          to: 'marika.basagoitia@gmail.com',
          from: 'belenhernandez.violin@gmail.com',
          subject: 'New Form Submission',
          text: 'You have a new form submission. Details: ' + JSON.stringify(formData),
        };
        sgMail.send(msg)
        .then(() => console.log('Email sent'))
        .catch(error => console.error(error));

        return {
          statusCode: 200,
          body: JSON.stringify({ message: 'Form submitted successfully' }),
        };
    });
  } catch (error) {
    console.error('Error parsing form data:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error submitting form' }),
    };
  }
};
