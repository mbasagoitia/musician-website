const fetchConfig = async () => {
    try {
      const response = await fetch('YOUR_API_GATEWAY_ENDPOINT');
      const config = await response.json();
      return config;
    } catch (error) {
      console.error('Error fetching configuration:', error);
      throw error;
    }
  };

export default fetchConfig;