import React from 'react';
import './App.css';
import dogImage from './assets/download.png';
import dog1 from './assets/Home.jpg';
import Form from './Form';
import {useNavigate} from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './Services';
import Footer from './Footer';
import dog2 from './assets/dog2.jpg';
import dog3 from './assets/dog3.jpg';




function Index(){
  const navigate=useNavigate();

  const handleButtonClick=()=>{
    navigate('/form');

  }
  return(
     <section>
      <div>
        
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: 'violet',
            padding: '10px 20px'
          }}
        >
          <img src={dogImage} alt="Cute Dog" style={{ width: '50px',borderRadius:"50%",objectFit: 'cover' }} />
          <h1 style={{ margin: 0 ,marginRight:"75%"}}>Pet Care</h1>
          <button
         style={{
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
  onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
onClick={handleButtonClick}>
  Book an Appointment
</button>

        </div>

       
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <img src={dog1} alt="Cute Dog" style={{ width: '400px',borderRadius:"50%",objectFit: 'cover',height:"300px"}} />
          <img src={dog2} alt="Cute Dog" style={{ width: '400px',borderRadius:"50%",objectFit: 'cover',height:"300px"}} />
          <img src={dog3} alt="Cute Dog" style={{ width: '400px',borderRadius:"50%",objectFit: 'cover',height:"300px"}} />
          <h2
     style={{
       fontSize: "3rem",       
       fontWeight: "bold",     
       textAlign: "center",    
       margin: "20px 0",       
       letterSpacing: "1px"    
  }}
>
  Where Your Pet Finds Joy
</h2>
        </div>
        <div>
         <h2
  style={{
    textAlign: "left",
    fontSize: "2rem",
    fontWeight: "bold",
    background: "linear-gradient(90deg, #ff8a00, #e52e71)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    marginBottom: "30px",
    textShadow: "1px 1px 2px rgba(0,0,0,0.2)"
  }}
>
  Services We Provide
</h2>
          <Services />
        </div>
      </div>
      <Footer />
    </section>
  
  );
}

function App() {
  return (
    <div className="App">
       <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
