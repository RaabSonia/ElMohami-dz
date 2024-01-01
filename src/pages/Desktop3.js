import React,{ useState } from 'react';
import { useNavigate } from 'react-router-dom';

import "./Desktop3.css";
import { Navbar, Nav, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import MapLink from './Maplink'; 
import"./Desktop1.css";


const Desktop3 = () => {
  const navigate = useNavigate();

  

  const handleImageClick = ()  => {
    const latitude = 48.858844;
    const longitude = 2.294350;
  
    // Create a dynamic link
    const mapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;
  
    // Open a new window with the link
    const newWindow = window.open(mapsUrl, '_blank');
  
    // Optionally, you can focus on the new window
    newWindow.focus();
  };
  return (
    <div className="desktop-3">
      <div className="desktop-3-child" />
      <div className="desktop-3-item" />
      <div className="desktop-3-inner" />
     {/* Bootstrap Navbar */}
     <Navbar bg="light" expand="lg" >
        <Navbar.Brand href="#home">
          
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Bootstrap Nav */}
          <Nav className="about" >
            {/* Navigation items */}
            <Nav.Link href="#about" onClick={() => navigate('/desktop2')}>About</Nav.Link>
           </Nav>
           <Nav className="fq">
            {/* Navigation items */}
            <Nav.Link href="#faq">F&Q</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div className="login-btn">
          {/* Bootstrap Button */}
          <Button className="login-as-lawyer" variant="outline-success">
            Login as Lawyer
          </Button>
        </div>
      </Navbar>
      <img className="group-icon3" alt="" src="/group-2@2x.png" />
      <img
        className="janko-ferlic-g-jo31esure-unspl-icon3"
        alt=""
        src="/jankoferlicgjo31esureunsplash-1@2x.png"
      />
      <b className="hamoudi-iyad3">hamoudi iyad</b>
      <img className="desktop-3-child1" alt="" src="/group-155@2x.png" />
      
      <ul className="roleee3">
          <li  className="roleee3">An item</li>
          <li  className="roleee3">A second item</li>
          <li  className="roleee3">A third item</li>
       </ul>
      <div className="ftyguhjc-jhv-jzdh3">
        ftyguhjc jhv jzdh hdvsd sdj sjb bs s d cbnjdbshvv jzdh hdvsd sdj sjb bs
        s d cbnjdbshvv jzdh hdvsd sdj sjb bs s d cbnjdbshvv jzdh hdvsd sdj sjb
        bs s d cbnjdbshvv jzdh hdvsd sdj sjb bs s d cbnjdbshvv jzdh hdvsd sdj
        sjb bs s d cbnjdbshv
      </div>
      <div className="gqghjkc-qjck-n3">
        gqghjkc qjck n sqvc bhjsqklc dhb hvdj n
      </div>
      
      <div className="desktop-3-child3" />
      <img className="fi-sr-envelope-icon3" alt="" src="/fisrenvelope@2x.png" />
      <img
        className="fi-sr-phone-call-icon3"
        alt=""
        src="/fisrphonecall@2x.png"
      />
      <img className="globe-icon3" alt="" src="/globe@2x.png" />
      <div className="set-a-rendvu3">
      <button type="submit" className="set-a-rendvu3">set-a-rendvu</button></div>
      <div className="desktop-3-child4" />
      <div className="about3"onClick={() => navigate('/desktop2')}><a className="nav-link3" style={{ color: 'white' }}  href="#">
              About
            </a></div>
      <div className="location3"> <a className="nav-link3 active"  aria-current="page" href="#">
              Location
            </a></div>
      <div className="reviws3"><a className="nav-link3" href="#"onClick={() => navigate('/desktop4')}>
              Reviews
            </a></div>
      <div className="cost3"><a className="nav-link3" href="#">
              Cost
            </a></div>
      
            <img
        className="istockphoto-651783402-1024x102-icon3"
        alt=""
        src="/istockphoto6517834021024x1024-1@2x.png"
        onClick={handleImageClick}
        style={{ cursor: 'pointer' }}
      />
    </div>
  );
};

export default Desktop3;
