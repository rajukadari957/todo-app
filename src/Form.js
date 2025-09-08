import React, { useState } from 'react';
import './App.css';

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    phone: '',
    breed: '',
    time: '',
    date: ''
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSuccess(true);
    setFormData({ name: '', location: '', phone: '', breed: '', time: '', date: '' });

    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div
     style={{
    minHeight: '100vh', 
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
  }}>
    <section style={{ maxWidth: '500px', margin: '40px auto', padding: '30px',  borderRadius: '15px', boxShadow: '0 10px 25px rgba(0,0,0,0.15)', background: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)', }}>
      <h2 style={{ textAlign: 'center', marginBottom: '25px', fontSize: '2rem', color: '#ff6a00' }}>Book an Appointment</h2>

     
      {success && (
        <div style={{
          background: 'linear-gradient(90deg, #00c6ff, #0072ff)',
          color: 'white',
          padding: '25px',
          borderRadius: '15px',
          textAlign: 'center',
          marginBottom: '25px',
          fontSize: '1.5rem',
          fontWeight: 'bold',
          boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
          transform: 'scale(1)',
          transition: 'all 0.3s ease-in-out'
        }}>
          🎉 Appointment booked successfully!
        </div>
      )}

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required style={{ padding: '12px', fontSize: '1rem', borderRadius: '8px', border: '1px solid #ccc' }} />
        <input type="text" name="location" placeholder="Location" value={formData.location} onChange={handleChange} required style={{ padding: '12px', fontSize: '1rem', borderRadius: '8px', border: '1px solid #ccc' }} />
        <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required style={{ padding: '12px', fontSize: '1rem', borderRadius: '8px', border: '1px solid #ccc' }} />
        <input type="text" name="breed" placeholder="Dog Breed" value={formData.breed} onChange={handleChange} required style={{ padding: '12px', fontSize: '1rem', borderRadius: '8px', border: '1px solid #ccc' }} />
        <input type="time" name="time" value={formData.time} onChange={handleChange} required style={{ padding: '12px', fontSize: '1rem', borderRadius: '8px', border: '1px solid #ccc' }} />
        <input type="date" name="date" value={formData.date} onChange={handleChange} required style={{ padding: '12px', fontSize: '1rem', borderRadius: '8px', border: '1px solid #ccc' }} />

        <button type="submit" style={{
          background: 'linear-gradient(90deg, #ff8a00, #e52e71)',
          color: 'white',
          padding: '15px',
          border: 'none',
          borderRadius: '25px',
          cursor: 'pointer',
          fontSize: '1.2rem',
          fontWeight: 'bold',
          transition: 'all 0.3s ease',
          boxShadow: '0 5px 15px rgba(0,0,0,0.2)'
        }}
        onMouseOver={(e)=> e.target.style.transform="scale(1.05)"}
        onMouseOut={(e)=> e.target.style.transform="scale(1)"}
        >
          Submit
        </button>
      </form>
    </section>
    </div>
  );
}

export default Form;
