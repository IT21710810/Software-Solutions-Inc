import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import './ContactUs.css';

function ContactUs({ onSubmit }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const [animateButton, setAnimateButton] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    country: '',
    jobTitle: '',
    jobDetails: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAnimateButton(true);
    onSubmit(formData);
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      country: '',
      jobTitle: '',
      jobDetails: ''
    });
  };

  return (
    <section id="contact" className={`contact-section ${inView ? 'fade-in' : ''}`} ref={ref}>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone"
          required
        />
        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder="Company Name"
          required
        />
        <input
          type="text"
          name="country"
          value={formData.country}
          onChange={handleChange}
          placeholder="Country"
          required
        />
        <input
          type="text"
          name="jobTitle"
          value={formData.jobTitle}
          onChange={handleChange}
          placeholder="Job Title"
          required
        />
        <textarea
          name="jobDetails"
          value={formData.jobDetails}
          onChange={handleChange}
          placeholder="Job Details"
          required
        />
        <button type="submit" className={animateButton ? 'bounce' : ''}>
          Submit
        </button>
      </form>
    </section>
  );
}

export default ContactUs;