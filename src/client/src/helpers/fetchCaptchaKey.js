const fetchCaptchaKey = async () => {
    try {
      const response = await fetch('YOUR_LAMBDA_FUNCTION_URL');
      const captchaKey = response.data.captchaKey;
  
      return captchaKey;
  
    } catch (error) {
      console.error('Error fetching captcha key:', error);
    }
};

export default fetchCaptchaKey;

// exports.handler = async (event) => {
//     try {
//       // Access environment variable
//       const captchaKey = process.env.REACT_APP_CAPTCHA_KEY;
  
//       // Your other logic here
  
//       return {
//         statusCode: 200,
//         body: JSON.stringify({ captchaKey }),
//       };
//     } catch (error) {
//       return {
//         statusCode: 500,
//         body: JSON.stringify({ message: 'Error retrieving environment variable' }),
//       };
//     }
//   };
  