const submitFormData = (formData) => {
    fetch('api-endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      .then(response => response.json())
      .then(data => {
        // Display this to user
        console.log('Form submitted successfully:', data);
      })
      .catch(error => {
        console.error('Error submitting form:', error);
      });
};

export default submitFormData;