import { useState } from 'react';

const useContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(formData)
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {

    e.preventDefault();
    setSubmitted(true);

    // Validate the form data before submission
    
      if(!formData.message){
        console.error('Please write your message.');
        return;
      }
  
      if (formData.name.length > 50) {
        console.error('Name should not exceed 50 characters.');
        return;
        
      }
  
      if (!/\S+@\S+\.\S+/.test(formData.email)) {
        console.error('Please enter a valid email address.');
        return;
    
      }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Form submitted successfully!');
        // Reset the form fields after successful submission
        setFormData({ name: '', email: '', message: '' });
      } else {
        console.error('Form submission failed.');
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
    }
  };

  return { formData, handleChange, handleSubmit, submitted, };
};

export default useContactForm;