import React from 'react';
import { useInView } from 'react-intersection-observer';
import './Solutions.css';

function Solutions({ className }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const solutions = [
    {
      title: 'Custom CRM Systems',
      description: 'Tailored solutions to manage customer relationships effectively.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=500',
      icon: 'https://cdn-icons-png.flaticon.com/512/1673/1673621.png',
    },
    {
      title: 'Enterprise Resource Planning (ERP)',
      description: 'Streamline your business operations with our ERP solutions.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=500',
      icon: 'https://cdn-icons-png.flaticon.com/512/2099/2099058.png',
    },
    {
      title: 'Cloud-Based Workflow Automation',
      description: 'Automate workflows with scalable cloud technology.',
      image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=500',
      icon: 'https://cdn-icons-png.flaticon.com/512/1243/1243061.png',
    },
    {
      title: 'Inventory Management Software',
      description: 'Optimize inventory tracking and management for businesses.',
      image: 'https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=500',
      icon: 'https://cdn-icons-png.flaticon.com/512/2991/2991148.png',
    },
    {
      title: 'AI-Powered Analytics Platform',
      description: 'Leverage AI to gain actionable insights from your data.',
      image: 'https://images.pexels.com/photos/6694543/pexels-photo-6694543.jpeg?auto=compress&cs=tinysrgb&w=500',
      icon: 'https://cdn-icons-png.flaticon.com/512/4256/4256812.png',
    },
    {
      title: 'E-Commerce Integration Tools',
      description: 'Seamlessly integrate e-commerce platforms with your systems.',
      image: 'https://images.pexels.com/photos/5632371/pexels-photo-5632371.jpeg?auto=compress&cs=tinysrgb&w=500',
      icon: 'https://cdn-icons-png.flaticon.com/512/3144/3144456.png',
    },
  ];

  const handleImageError = (e, title, type) => {
    console.error(`Failed to load ${type} for solution "${title}": ${e.target.src}`);
    e.target.src = '';
  };

  return (
    <section id="solutions" className={`section ${inView ? 'fade-in' : ''} ${className}`} ref={ref}>
      <h2>Our Software Solutions</h2>
      <div className="solutions-grid">
        {solutions.map((solution, index) => (
          <div key={index} className="solution-card" data-title={solution.title}>
            <div className="solution-image-wrapper">
              <img
                src={solution.image}
                alt={solution.title}
                className="solution-image"
                onError={(e) => handleImageError(e, solution.title, 'image')}
              />
              <img
                src={solution.icon}
                alt={`${solution.title} icon`}
                className="solution-icon"
                onError={(e) => handleImageError(e, solution.title, 'icon')}
              />
            </div>
            <div className="solution-content">
              <h3>{solution.title}</h3>
              <p>{solution.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Solutions;