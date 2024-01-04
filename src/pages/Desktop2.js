import React, { useState } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import "./Desktop2.css";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Desktop2 = () => {
  const [rating, setRating] = useState(0); // État initial

const handleClick1 = () => {
    // Naviguer vers la page Desktop5 login
    navigate("/desktop5");
  }

  

  const navigate = useNavigate();
 

  const handleClick = (selectedRating) => {
    setRating(selectedRating === rating ? 0 : selectedRating); // Si déjà sélectionné, annule la sélection
  };

  const renderStars = () => {
    const stars = [];
    const maxRating = 5; // Nombre maximum d'étoiles

    for (let i = 1; i <= maxRating; i++) {
      const starClassName = i <= rating ? 'star-selected' : 'star-unselected'; // Vérifie si l'étoile est sélectionnée

      stars.push(
        <span key={i} className={starClassName} onClick={() => handleClick(i)}>
          {/* Caractère d'étoile Unicode */}
          ★ 
        </span>
      );
    }

    return (
      <div className="rating-stars">
        {stars}
      </div>
    );
  };


  return (
    
  
    <div className="desktop-3">
      
      {/* Bootstrap Navbar */}
      <Navbar bg="light" expand="lg" >
      <Navbar.Brand href="#home">
     
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
     
       {/* Bootstrap Nav */}
           <Nav className="about" >
       {/* Navigation items */}
           <Nav.Link href="#about" >About</Nav.Link>
           </Nav>
      <Nav className="fq">
       {/* Navigation items */}
       <Nav.Link href="#faq">F&Q</Nav.Link>
     </Nav>
   </Navbar.Collapse>
   <div className="login-btn">
     {/* Bootstrap Button */}
    
     <Button className="login-as-lawyer"
             variant="outline-success"  
             onClick={handleClick1}
             style={{
                backgroundColor: '#6FF46C',
                border: 'none',
                color: 'white',
                borderRadius: '0',
                fontWeight: 'bold' ,
                transition: 'background-color 0.3s ease',
        }}>
       Login as Lawyer
     </Button>
     
   </div>
 
 <img className="group-icon3" alt="" src="/group-2@2x.png" />
 </Navbar>

 <div className="desktop-3-item" style={{height: '33rem'}}/>

   {/* Carte de l'avocat  */}
   <div className="lawyer-details">
       
          <img
             className="lawyer-image"
             alt=""
             src="/jankoferlicgjo31esureunsplash-1@2x.png"
          />
       
     <div className="lawyer-info" >  
          <h2>Nom de l'avocat</h2>
          <div className='dom'> (Domaine) </div>
          <div className="rating-stars">{renderStars()}</div>
          <p>
             ftyguhjc jhv jzdh hdvsd sdj sjb bs s d cbnjdbshvv jzdh hdvsd sdj sjb bs
              s d cbnjdbshvv jzdh hdvsd sdj sjb bs s d cbnjdbshvv jzdh hdvsd sdj sjb
               bs s d cbnjdbshvv jzdh hdvsd sdj sjb bs s d cbnjdbshvv jzdh hdvsd sdj
               sjb bs s d cbnjdbshv ggggggggggg hhhhhhhhhhh jjjjjjjjjjj kkkkkkkkkkkkk hhhhhhghg ftt tree addrds
               gsfsdtyegcd gfdtty gfetdy gfdty
          </p>
          <div className='cost'> cost : 1é3121123</div>

          <div className="custom-section" >
        {/* Bouton */}  
        <Button className="custom-button" variant="outline-primary"
                 style={{
                  backgroundColor: '#1D371D',
                  border: 'none',
                  color: 'white',
                  borderRadius: '0',
                  fontWeight: 'bold', // Correction de la propriété font-weight
                  transition: 'background-color 0.3s ease',
                  width:'10cm',
                  height: '1.6cm',
                  fontSize:'22 px',
                }} >
          Set rendivu
        </Button>

        {/* Images */}    
        <div className="custom-images">
          <img src="/globe@2x.png" alt="Image 1" />
          <img src="/fisrphonecall@2x.png" alt="Image 2" />
          <img src="fisrenvelope@2x.png" alt="Image 3" />
        </div>
      </div>
     </div>
    
    
    </div>
  
     <div className="navbar2" >
     <Link to="/desktop2" className="navbar-link">About</Link>
     <Link to="/desktop3" className="navbar-link">Location</Link>
     <Link to="/desktop4" className="navbar-link">Reviews</Link>
     <Link to="#" className="navbar-link">Cost</Link>
              
  </div>
    

     <div className="container">
      <div className="left-section">
         Partie gauche 
        <p className="text-and-button">ftyguhjc jhv jzdh hdvsd sdj sjb bs s 
          d cbnjdbshvv jzdh hdvsd sdj sjb bs s d cbnjdbshv
          v jzdh hdvsd sdj sjb bs s d cbnjdbshvv jzdh hdvsd sdj sjb 
          bs s d cbnjdbshvv jzdh hdvsd sdj sjb bs s d cbnjdbshvv jzdh hdvsd 
          sdj sjb bs s d cbnjdbshvhdvsd sdj sjb bs s d cbnjdbshvv jzdh hdvsd sdj sjb
           bs s d cbnjdbshvv jzdh hdvsd sdj sjb bs s d cbnjdbshvv jzdh hdvsd sdj sjb bs 
           s d cbnjdbshvhdvsd sdj sjb bs s d cbnjdbshvv jzdh hdvsd sdj sjb bs s
           d cbnjdbshvv jzdh hdvsd sdj sjb bs s d cbnjdbshvv jzdh hdvsd sdj sjb bs s d cbnjdbshv
           </p>
        <Button variant="outline-primary" className="resume-button" 
                style={{
                  color:'#6FF46C',
                  border: '5px #6FF46c solid',
                  borderRadius: '0',
                  fontWeight: 'bold',
                  fontSize: '22px',
                  height:'2cm'
                }}>
          <img
              src='/fisrfile@2x.png'
              style={{
                width: '50px',
                height:'auto',
                marginRight:'1cm',
              }}
          />
          Resume
          </Button>
      </div>
      <div className="right-section">
        {/* Partie droite */}
        
        <img className='img2' src="/jankoferlicgjo31esureunsplash-2@2x.png" alt="Photo" />
        <h1>Hamoudi Iyad</h1>
        {renderStars()}

        <div className="images">
          <img src="/globe@2x.png" alt="Image 1" />
          <img src="/fisrphonecall@2x.png" alt="Image 2" />
          <img src="fisrenvelope@2x.png" alt="Image 3" />
        </div>
      </div>
    </div>

      </div>


  );
};

export default Desktop2;
