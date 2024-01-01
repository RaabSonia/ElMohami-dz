import React,{ useState } from 'react';
import { useNavigate } from 'react-router-dom';

import "./Desktop4.css";
import { Navbar, Nav, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import"./Desktop1.css"


const Desktop4 = () => {

  const navigate = useNavigate();
  return (
    <div className="desktop-4">
      <div className="desktop-4-child" />
      <div className="desktop-4-item" />
      <div className="desktop-4-inner" />
     {/* Bootstrap Navbar */}
     <Navbar bg="light" expand="lg" >
        <Navbar.Brand href="#home">
          
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Bootstrap Nav */}
          <Nav className="about" >
            {/* Navigation items */}
            <Nav.Link href="#about"onClick={() => navigate('/desktop2')} >About</Nav.Link>
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
      <img className="group-icon4" alt="" src="/group-2@2x.png" />
      <img
        className="janko-ferlic-g-jo31esure-unspl-icon4"
        alt=""
        src="/jankoferlicgjo31esureunsplash-1@2x.png"
      />
      <b className="hamoudi-iyad4">hamoudi iyad</b>
      <img className="desktop-4-child1" alt="" src="/group-155@2x.png" />
      
      <ul className="roleee4">
          <li  className="roleee4">An item</li>
          <li  className="roleee4">A second item</li>
          <li  className="roleee4">A third item</li>
       </ul>
      <div className="ftyguhjc-jhv-jzdh4">
        ftyguhjc jhv jzdh hdvsd sdj sjb bs s d cbnjdbshvv jzdh hdvsd sdj sjb bs
        s d cbnjdbshvv jzdh hdvsd sdj sjb bs s d cbnjdbshvv jzdh hdvsd sdj sjb
        bs s d cbnjdbshvv jzdh hdvsd sdj sjb bs s d cbnjdbshvv jzdh hdvsd sdj
        sjb bs s d cbnjdbshv
      </div>
      <div className="gqghjkc-qjck-n4">
        gqghjkc qjck n sqvc bhjsqklc dhb hvdj n
      </div>
      
      <div className="desktop-4-child3" />
      <img className="fi-sr-envelope-icon4" alt="" src="/fisrenvelope@2x.png" />
      <img
        className="fi-sr-phone-call-icon4"
        alt=""
        src="/fisrphonecall@2x.png"
      />
      <img className="globe-icon4" alt="" src="/globe@2x.png" />
      <div className="set-a-rendvu">
      <button type="submit" className="set-a-rendvu4">set-a-rendvu</button></div>
      <div className="desktop-4-child4" />
      <div className="about4"  style={{ color: 'white', fontSize: '1.5em' }}><a className="nav-link4"  href="#" onClick={() => navigate('/desktop2')}>
              About
            </a></div>
      <div className="location4" style={{  fontSize: '1.5em' }}> <a className="nav-link4"  href="#"onClick={() => navigate('/desktop3')}>
              Location
            </a></div>
      <div className="reviws4" style={{  fontSize: '1.5em',left: '788px' }}><a className="nav-link4 active"  aria-current="page" href="#"onClick={() => navigate('/desktop4')}>
              Reviews
            </a></div>
      <div className="cost4" style={{ color: 'white', fontSize: '1.5em' }}><a className="nav-link4" href="#">
              Cost
            </a></div>
    </div>
  );
};

export default Desktop4;
