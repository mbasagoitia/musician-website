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


  