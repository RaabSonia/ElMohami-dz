import React,{ useState } from 'react';

import "./Desktop4.css";
import { Navbar, Nav, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';


const Desktop4 = () => {
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
            <Nav.Link href="#about" >About</Nav.Link>
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
      <img className="group-icon" alt="" src="/group-2@2x.png" />
      <img
        className="janko-ferlic-g-jo31esure-unspl-icon"
        alt=""
        src="/jankoferlicgjo31esureunsplash-1@2x.png"
      />
      <b className="hamoudi-iyad">hamoudi iyad</b>
      <img className="desktop-3-child1" alt="" src="/group-155@2x.png" />
      
      <ul className="roleee">
          <li  className="roleee">An item</li>
          <li  className="roleee">A second item</li>
          <li  className="roleee">A third item</li>
       </ul>
      <div className="ftyguhjc-jhv-jzdh">
        ftyguhjc jhv jzdh hdvsd sdj sjb bs s d cbnjdbshvv jzdh hdvsd sdj sjb bs
        s d cbnjdbshvv jzdh hdvsd sdj sjb bs s d cbnjdbshvv jzdh hdvsd sdj sjb
        bs s d cbnjdbshvv jzdh hdvsd sdj sjb bs s d cbnjdbshvv jzdh hdvsd sdj
        sjb bs s d cbnjdbshv
      </div>
      <div className="gqghjkc-qjck-n">
        gqghjkc qjck n sqvc bhjsqklc dhb hvdj n
      </div>
      
      <div className="desktop-3-child3" />
      <img className="fi-sr-envelope-icon" alt="" src="/fisrenvelope@2x.png" />
      <img
        className="fi-sr-phone-call-icon"
        alt=""
        src="/fisrphonecall@2x.png"
      />
      <img className="globe-icon" alt="" src="/globe@2x.png" />
      <div className="set-a-rendvu">
      <button type="submit" className="set-a-rendvu">set-a-rendvu</button></div>
      <div className="desktop-3-child4" />
      <div className="about1">about</div>
      <div className="location">location</div>
      <div className="reviws">Reviws</div>
      <div className="cost">cost</div>
      <img
        className="istockphoto-651783402-1024x102-icon"
        alt=""
        src="/istockphoto6517834021024x1024-1@2x.png"
      />
    </div>
  );
};

export default Desktop4;
