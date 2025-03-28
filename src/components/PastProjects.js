import React from 'react';
import { useInView } from 'react-intersection-observer';
import './PastProjects.css';

function PastProjects() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const projects = [
    {
      title: 'Retail POS System',
      description: 'Implemented a custom POS system for 50+ stores.',
      image: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=500',
      link: '#retail-pos',
    },
    {
      title: 'Hospital Management System',
      description: 'Developed a patient management system for a hospital chain.',
      image: 'https://images.pexels.com/photos/3845983/pexels-photo-3845983.jpeg?auto=compress&cs=tinysrgb&w=500',
      link: '#hospital-management',
    },
    {
      title: 'E-Commerce Platform',
      description: 'Built a scalable e-commerce platform for a global retailer.',
      image: 'https://images.pexels.com/photos/5632371/pexels-photo-5632371.jpeg?auto=compress&cs=tinysrgb&w=500',
      link: '#e-commerce',
    },
    {
      title: 'Inventory Management App',
      description: 'Created an app to streamline inventory tracking for warehouses.',
      image: 'https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=500',
      link: '#inventory-management',
    },
    {
      title: 'Learning Management System (LMS)',
      description: 'Developed an LMS for educational institutions to manage online learning.',
      image: 'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=500',
      link: '#lms',
    },
    {
      title: 'Supply Chain Optimization Tool',
      description: 'Built a tool to optimize supply chain logistics for a manufacturing firm.',
      image: 'https://images.pexels.com/photos/577514/pexels-photo-577514.jpeg?auto=compress&cs=tinysrgb&w=500',
      link: '#supply-chain',
    },
    {
      title: 'Customer Support Chatbot',
      description: 'Created an AI-powered chatbot to enhance customer support for a tech company.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=500',
      link: '#chatbot',
    },
    {
      title: 'Financial Analytics Dashboard',
      description: 'Designed a dashboard for real-time financial analytics for a banking client.',
      image: 'https://images.pexels.com/photos/6694543/pexels-photo-6694543.jpeg?auto=compress&cs=tinysrgb&w=500',
      link: '#financial-dashboard',
    },
  ];

  return (
    <section id="projects" className={`section ${inView ? 'fade-in' : ''}`} ref={ref}>
      <h2>Past Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PastProjects;