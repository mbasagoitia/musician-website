const dotenv = require('dotenv');
dotenv.config();

exports.handler = async (e) => {
  try {
    const captchaKey = process.env.CAPTCHA_KEY;

    return {
      statusCode: 200,
      body: JSON.stringify({ captchaKey }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error retrieving environment variable' }),
    };
  }
};