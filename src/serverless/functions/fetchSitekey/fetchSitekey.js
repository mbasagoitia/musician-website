const dotenv = require('dotenv');
dotenv.config();

exports.handler = async (event) => {
    try {
      const captchaKey = process.env.REACT_APP_CAPTCHA_KEY;

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