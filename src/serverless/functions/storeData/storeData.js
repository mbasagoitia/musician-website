const mysql = require('mysql2');
const sanitizeHtml = require('sanitize-html');
const dotenv = require("dotenv");

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

    const results = await new Promise((resolve, reject) => {
      pool.query(query, values, (error, results) => {
        if (error) {
          console.error('Error inserting into the database:', error);
          reject(error);
        } else {
          // Display this to user
          console.log('Inserted into the database:', results);
          resolve(results);
        }
      });
    });

    pool.end();
    
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Form submitted successfully',
        insertId: results.insertId,
      }),
    };

  } catch (error) {
    console.error('Error parsing form data:', error);
    throw new Error('Error submitting form');
  }
};
