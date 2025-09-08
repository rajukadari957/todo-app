import React from 'react';
import dog3 from './assets/dog3.jpg';
import dog4 from './assets/dog4.jfif';
import dog5 from './assets/dog5.jpg';       
import dog6 from './assets/dog6.jpg';
import dog7 from './assets/dog7.jpg';
import dog8 from './assets/dog8.jpg';


function Services() {
  const services = [
    { title: "AC Boarding", description: "Cozy, climate-controlled lodging for ultimate comfort.",img:dog3},
    { title: "Grooming & Spa", description: "Pampering that keeps your pet relaxed and beautiful.",img:dog5},
    { title: "Swimming & Fitness", description: "Splash, swim, and stay fit in a safe aquatic space.",img:dog6 },
    { title: "Behavioral Training", description: "Smart, positive training to shape good habits.",img:dog7 },
    { title: "Fresh Cooked Meals", description: "Nutritious meals prepared with love, daily.",img:dog8},
    { title: "Wellness Services", description: "Massage, supplements, and holistic health care.",img:dog3 },
  ];

  const sectionStyle = {
  padding: '50px 20px 30px 20px', 
  background: 'linear-gradient(135deg, #ff9a9e 0%, #fad0c4 50%, #fad0c4 100%)',
};

  const gridStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
  };

  const cardStyle = {
    background: 'white',
    padding: '25px',
    width: '260px',
    borderRadius: '20px',
    boxShadow: '0 5px 20px rgba(0,0,0,0.15)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    textAlign: 'center',
    cursor: 'pointer',
  };

  const cardHoverStyle = {
    transform: 'translateY(-10px)',
    boxShadow: '0 15px 25px rgba(0,0,0,0.3)',
  };

  const titleStyle = {
    color: '#ff6a00',
    marginBottom: '10px',
    fontSize: '1.2rem',
  };

  const descStyle = {
    fontSize: '0.95rem',
    color: '#555',
  };

  return (
    <section style={sectionStyle}>
      <div style={gridStyle}>
        {services.map(({title,description,img}, index) => (
            
          <div
            key={index}
            style={cardStyle}
            onMouseOver={(e) => Object.assign(e.currentTarget.style, cardHoverStyle)}
            onMouseOut={(e) => Object.assign(e.currentTarget.style, cardStyle)}
          >
            <h3 style={titleStyle}>{title}</h3>
            <p style={descStyle}>{description}</p>
            <img src={img} alt='not' style={{width:"250px",height:"250"}}></img>
            <button style={{
             background: 'linear-gradient(90deg, #ff8a00, #e52e71)',
             color: 'white',
             padding: '10px 20px',
             border: 'none',
             borderRadius: '25px',
             cursor: 'pointer',
             fontSize: '16px',
             fontWeight: 'bold',
             boxShadow: '0 5px 15px rgba(0,0,0,0.2)',
             transition: 'all 0.3s ease',
  }}
  onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
  onMouseOut={(e) => e.target.style.transform = 'scale(1)'}>Explore More</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
