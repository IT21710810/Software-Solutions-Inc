import React from 'react';
import { useInView } from 'react-intersection-observer';
import './Events.css';

function Events() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const events = [
    {
      title: 'Tech Conference 2025',
      date: 'April 15',
      image: 'https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg',
      link: '#register',
    },
    {
      title: 'Software Demo Day',
      date: 'May 10',
      image: 'https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg',
      link: '#register',
    },
    {
        title: 'AI Summit 2025',
        date: 'June 20',
        image: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg',
        link: '#register',
      },
      
    {
      title: 'Cloud Tech Expo',
      date: 'July 25',
      image: 'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg',
      link: '#register',
    },
  ];

  return (
    <section id="events" className={`section ${inView ? 'fade-in' : ''}`} ref={ref}>
      <h2>Upcoming Events</h2>
      <div className="events-grid">
        {events.map((event, index) => (
          <div key={index} className="event-card">
            <img src={event.image} alt={event.title} />
            <div className="event-content">
              <h3>{event.title}</h3>
              <p>{event.date}</p>
              <a href={event.link} className="register-btn">Register Now</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Events;
