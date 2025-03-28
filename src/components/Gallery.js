import React from 'react';
import { useInView } from 'react-intersection-observer';
import './Gallery.css';

function Gallery() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const galleryItems = [
    {
        image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
        caption: 'Team at Tech Expo 2024',
      },
      {
        image: 'https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
        caption: 'Product Launch Event',
      },
    {
        image: 'https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
        caption: 'Client Meeting 2024',
      },
    {
        image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
        caption: 'Innovation Workshop 2024',
      },
      {
        image: 'https://i.pinimg.com/736x/f8/05/71/f8057120ce3070c3f36cef4761c82de2.jpg=crop&w=500&q=60', // Updated URL
        caption: 'Cloud Tech Summit',

      },
      {
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
        caption: 'Annual Team Retreat 2024',
      },
      {
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
        caption: 'Hackathon 2024',
      },
      {
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
        caption: 'Community Outreach Program 2024',
      },

  ];

  return (
    <section id="gallery" className={`section ${inView ? 'fade-in' : ''}`} ref={ref}>
      <h2>Photo Gallery</h2>
      <div className="gallery-grid">
        {galleryItems.map((item, index) => (
          <div key={index} className="gallery-item">
            <img src={item.image} alt={item.caption} />
            <div className="gallery-caption">
              <p>{item.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;