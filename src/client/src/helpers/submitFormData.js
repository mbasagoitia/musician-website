const submitFormData = async (formData) => {
  try {
    // Store data in the database
    const storeResponse = await fetch('store-data-api-endpoint', {
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
    const sendEmailResponse = await fetch('send-email-api-endpoint', {
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
