import React,{ useState } from 'react';
import "./Desktop2.css";
import { Navbar, Nav, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Desktop2 = () => {
  return (
    <div className="desktop-2">
      <div className="desktop-2-child" />
      <div className="desktop-2-item" />
      <div className="desktop-2-inner" />
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
      <b className="hamoudi-iyadi">hamoudi iyad</b>
      <img className="desktop-2-child1" alt="" src="/group-155@2x.png" />
      
      <ul className="roleee">
          <li  className="roleee">An item</li>
          <li  className="roleee">A second item</li>
          <li  className="roleee">A third item</li>
       </ul>
      <div className="ftyguhjc-jhv-jzdhh">
        ftyguhjc jhv jzdh hdvsd sdj sjb bs s d cbnjdbshvv jzdh hdvsd sdj sjb bs
        s d cbnjdbshvv jzdh hdvsd sdj sjb bs s d cbnjdbshvv jzdh hdvsd sdj sjb
        bs s d cbnjdbshvv jzdh hdvsd sdj sjb bs s d cbnjdbshvv jzdh hdvsd sdj
        sjb bs s d cbnjdbshv
      </div>
      <div className="gqghjkc-qjck-n2">
        gqghjkc qjck n sqvc bhjsqklc dhb hvdj n
      </div>
      
      <div className="desktop-2-child3" />
      <img className="fi-sr-envelope-icon2" alt="" src="/fisrenvelope@2x.png" />
      <img
        className="fi-sr-phone-call-icon2"
        alt=""
        src="/fisrphonecall@2x.png"
      />
      <img className="globe-icon2" alt="" src="/globe@2x.png" />
      <div className="cost-13121123">cost : 1é3121123</div>
      <div className="set-a-rendvu">
      <button type="submit" className="set-a-rendvu">set-a-rendvu</button></div>
      <div className="desktop-2-child4" />
      <div className="about1"><a className="nav-link2"  href="#">
              About
            </a></div>
      <div className="location2"> <a className="nav-link2"  href="#">
              Location
            </a></div>
      <div className="reviws"><a className="nav-link2 active"  aria-current="page" href="#">
              Reviews
            </a></div>
      <div className="cost"><a className="nav-link2" href="#">
              Cost
            </a></div>
    </div>
  );
};

export default Desktop2;
