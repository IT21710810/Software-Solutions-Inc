import React from 'react';
import { useInView } from 'react-intersection-observer';
import './Articles.css';

function Articles() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const articles = [
    {
      title: 'How We Revolutionized Retail Software',
      description: 'Discover how our innovative solutions transformed the retail industry.',
      image: 'https://images.unsplash.com/photo-1556740714-a8395b3c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
      link: '#',
    },
    {
      title: 'The Future of ERP Systems',
      description: 'Explore the next generation of ERP systems and their impact on businesses.',
      image: 'https://images.unsplash.com/photo-1556740738-6b4d6b8b7b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
      link: '#',
    },
    {
      title: 'Innovations in Cloud Computing',
      description: 'Learn about the latest advancements in cloud technology and their impact on scalability and efficiency.',
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e525b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
      link: '#',
    },
    {
      title: 'AI in Software Development',
      description: 'How AI is shaping the future of software development.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
      link: '#',
    },
    {
      title: 'Cybersecurity Trends 2025',
      description: 'Stay ahead with the latest cybersecurity trends for 2025.',
      image: 'https://images.unsplash.com/photo-1556740758-90de0a6e6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
      link: '#',
    },
    {
      title: 'The Rise of Low-Code Development',
      description: 'Explore how low-code platforms are accelerating software development.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
      link: '#',
    },
    {
      title: 'Blockchain in Enterprise Software',
      description: 'Discover the potential of blockchain for secure enterprise solutions.',
      image: 'https://images.unsplash.com/photo-1639762681485-8c0b8c63e7c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
      link: '#',
    },
    {
      title: 'The Impact of 5G on Software Solutions',
      description: 'How 5G technology is transforming software applications and connectivity.',
      image: 'https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
      link: '#',
    },
    {
        title: 'The Impact of 5G on Software Solutions',
        description: 'How 5G technology is transforming software applications and connectivity.',
        image: 'https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
        link: '#',
      },
  ];

  const handleImageError = (e, title) => {
    console.error(`Failed to load image for article "${title}": ${e.target.src}`);
    e.target.src = 'https://images.unsplash.com/photo-1545987796-200677ee1011?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'; // Fallback image
  };

  return (
    <section id="articles" className={`section ${inView ? 'fade-in' : ''}`} ref={ref}>
      <h2>Company Articles</h2>
      <div className="articles-grid">
        {articles.map((article, index) => (
          <a key={index} href={article.link} className="article-card">
            <img
              src={article.image}
              alt={article.title}
              onError={(e) => handleImageError(e, article.title)}
            />
            <div className="article-content">
              <h3>{article.title}</h3>
              <p>{article.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Articles;