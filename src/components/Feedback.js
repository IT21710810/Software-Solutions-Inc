import React from 'react';
import { useInView } from 'react-intersection-observer';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import './Feedback.css';

function Feedback() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const feedbacks = [
    {
      name: 'John Doe',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      comment: 'Great service! The team was incredibly helpful and delivered beyond expectations.',
      rating: 5,
    },
    {
      name: 'Jane Smith',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      comment: 'Transformed our workflow. A few minor issues, but overall a fantastic experience.',
      rating: 4.5,
    },
    {
      name: 'Michael Brown',
      image: 'https://randomuser.me/api/portraits/men/15.jpg',
      comment: 'Highly recommend! Their solutions saved us so much time and effort.',
      rating: 4.8,
    },
    {
      name: 'Sarah Johnson',
      image: 'https://randomuser.me/api/portraits/women/65.jpg',
      comment: 'The software solution was a game-changer for our business. Excellent support!',
      rating: 4.9,
    },
    {
      name: 'David Lee',
      image: 'https://randomuser.me/api/portraits/men/78.jpg',
      comment: 'Very professional team. The implementation was smooth, and the results are impressive.',
      rating: 4.7,
    },
    {
      name: 'Emily Davis',
      image: 'https://randomuser.me/api/portraits/women/29.jpg',
      comment: 'A reliable partner for our tech needs. We’re thrilled with the outcome!',
      rating: 4.6,
    },
  ];

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - Math.ceil(rating);

    return (
      <div className="rating">
        {[...Array(fullStars)].map((_, i) => (
          <FaStar key={`full-${i}`} className="star full" />
        ))}
        {halfStar && <FaStar key="half" className="star half" />}
        {[...Array(emptyStars)].map((_, i) => (
          <FaStar key={`empty-${i}`} className="star empty" />
        ))}
      </div>
    );
  };

  const handleImageError = (e, name) => {
    console.error(`Failed to load image for feedback from "${name}": ${e.target.src}`);
    e.target.src = 'https://randomuser.me/api/portraits/lego/1.jpg'; // Fallback image (a generic LEGO portrait)
  };

  return (
    <section id="feedback" className={`section ${inView ? 'fade-in' : ''}`} ref={ref}>
      <h2>Customer Feedback</h2>
      <p className="testimonial-count">Hear from Our {feedbacks.length} Happy Customers</p>
      <div className="testimonials">
        {feedbacks.map((feedback, index) => (
          <div key={index} className="testimonial">
            <FaQuoteLeft className="quote-icon" />
            <img
              src={feedback.image}
              alt={feedback.name}
              onError={(e) => handleImageError(e, feedback.name)}
            />
            <p>{feedback.comment}</p>
            {renderStars(feedback.rating)}
            <span>{feedback.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Feedback;