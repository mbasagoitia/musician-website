const dotenv = require('dotenv');
dotenv.config();

exports.handler = async (event) => {
  try {
    const captchaKey = process.env.CAPTCHA_KEY;
    const storeDataEndpoint = process.env.STORE_DATA_ENDPOINT;
    const sendEmailEndpoint = process.env.SEND_EMAIL_ENDPOINT;

    return {
      statusCode: 200,
      body: JSON.stringify({
        captchaKey,
        storeDataEndpoint,
        sendEmailEndpoint
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error retrieving environment variables' }),
    };
  }
};
