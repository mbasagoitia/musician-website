import fetchConfig from "./fetchConfig";

const submitFormData = async (formData) => {
  try {
    // Fetch configuration
    const config = await fetchConfig();
    const { storeDataEndpoint, sendEmailEndpoint } = config;

    // Store data in the database
    const storeResponse = await fetch(storeDataEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!storeResponse.ok) {
      throw new Error('Error storing form data');
    }

    // Send email to client
    const sendEmailResponse = await fetch(sendEmailEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!sendEmailResponse.ok) {
      throw new Error('Error sending email');
    }

    console.log('Form submitted successfully');
    return 'success';
  } catch (error) {
    console.error('Error submitting form:', error);
    throw error;
  }
};

export default submitFormData;
