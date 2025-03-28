import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Solutions from '../components/Solutions';
import PastProjects from '../components/PastProjects';
import Feedback from '../components/Feedback';
import Articles from '../components/Articles';
import Gallery from '../components/Gallery';
import Events from '../components/Events';
import ContactUs from '../components/ContactUs';
import './Home.css';

function Home() {
  const [inquiries, setInquiries] = useState(JSON.parse(localStorage.getItem('inquiries')) || []);

  const handleContactSubmit = (formData) => {
    const updatedInquiries = [...inquiries, formData];
    setInquiries(updatedInquiries);
    localStorage.setItem('inquiries', JSON.stringify(updatedInquiries));
    alert('Thank you for your inquiry! We will get back to you soon.');
  };

  return (
    <div className="home">
      <Header />
      <main>
        <Solutions />
        <PastProjects />
        <Feedback />
        <Articles />
        <Gallery />
        <Events />
        <ContactUs onSubmit={handleContactSubmit} />
      </main>
      <Footer />
    </div>
  );
}

export default Home;