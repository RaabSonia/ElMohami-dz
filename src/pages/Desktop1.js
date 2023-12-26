import React,{ useState } from 'react';

import "./Desktop1.css";
import { Navbar, Nav, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';







const Desktop1 = () => {

  const { t, i18n } = useTranslation();
  console.log('Current language:', i18n.language);

  const changeLanguage = (lng) => {
    console.log(`Changing language to ${lng}`);
    i18n.changeLanguage(lng);
  };
  

  const [showMore, setShowMore] = useState(false);

  const buttonStyle = {
    width: '220px',
    height: '60px',
    marginTop: '1px',
  };

  const handleMoreClick = () => {
    console.log("handleMoreClick called");
    setShowMore(!showMore);
  };

  
  return (
    
    <div>
    <Button onClick={() => changeLanguage('fr')} variant="outline-light">
      🇫🇷
    </Button>
    <Button onClick={() => changeLanguage('ar')} variant="outline-light">
      🇦🇪
    </Button>
    
    <div className="desktop-1">
      
      
      <div className="desktop-1-child" />
      
      <img
        className="austin-distel-h1rw-nftuyc-unsp-icon"
        alt=""
        src="/austindistelh1rwnftuycunsplash-1@2x.png"
      />
      
      <div className="desktop-1-item" />
      <div className="desktop-1-inner" />
     

      
           {/* Bootstrap Navbar */}
           <Navbar bg="light" expand="lg" >
        <Navbar.Brand href="#home">
          <img
            className="austin-distel-h1rw-nftuyc-unsp-icon"
            alt=""
            src="/austindistelh1rwnftuycunsplash-1@2x.png"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Bootstrap Nav */}
          <Nav className="about" >
            {/* Navigation items */}
            <Nav.Link href="#about" >{t('About')}</Nav.Link>
           </Nav>
           <Nav className="fq">
            {/* Navigation items */}
            <Nav.Link href="#faq">{t('F&Q')}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div className="login-btn">
          {/* Bootstrap Button */}
          <Button className="login-as-lawyer" variant="outline-success">
            Login as Lawyer
          </Button>
        </div>
      </Navbar>
      <div className="rectangle-div" />
      <div className="desktop-1-child1" />

      <img className="group-icon" alt="" src="/group-2@2x.png" />
      <div className="desktop-1-child2" />
      
      <div className="search-form">
  <div className="location">
    <button className="btn btn-secondary btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={buttonStyle}>
      Location
    </button>
    <ul className="dropdown-menu">
      <li><a className="dropdown-item" >{t('Action')}</a></li>
      <li><a className="dropdown-item">{t('Another action')}</a></li>
      <li><a className="dropdown-item" >{t('Something else here')}</a></li>
    </ul>
  </div>
  <form className="lawer-search">
    <input type="text" placeholder="Lawyer Name" className="lawer-name" id="lawyerName" />
    <button type="submit" className="find-a-lawyer">Find a Lawyer</button>
  </form>
  <div className="the-place-to">the place to find truth</div>
 </div>

      <div className="subscribed-lawyer">+200 subscribed lawyer</div>
      <b className="top-rated-lawyers-near">Top-rated lawyers near you</b>
      
      <div className="desktop-1-child3" />
      <div className="desktop-1-child4" />
      <div className="rectangle-parent">
        <div className="group-child" />
        <img className="mask-group-icon" alt="" src="/mask-group@2x.png" />
        <b className="hamoudi-iyad">hamoudi iyad</b>
        <address className="medea">
         <span>Medea</span>
         </address>
        <div className="ftyguhjc-jhv-jzdh">
          ftyguhjc jhv jzdh hdvsd sdj sjb bs s d cbnjdbshvv jzdh hdvsd sdj sjb
          bs s d cbnjdbshvv jzdh hdvsd sdj sjb bs s d cbnjdbshvv jzdh hdvsd sdj
          sjb bs s d cbnjdbshvv jzdh hdvsd sdj sjb bs s d cbnjdbshvv jzdh hdvsd
          sdj sjb bs s d cbnjdbshv
        </div>
        <div className="ftyguhjc-jhv-jzdh1">
          ftyguhjc jhv jzdh hdvsd sdj sjb bs s d cbnjdbshvv jzdh hdvsd sdj sjb
          bs s d cbnjdbshvv jzdh hdvsd sdj sjb bs s d cbnjdbshvv jzdh hdvsd sdj
          sjb bs s d cbnjdv
        </div>
        <img className="group-item" alt="" src="/group-155@2x.png" />
        <img className="group-inner" alt="" src="/group-156@2x.png" />
        <img className="group-child1" alt="" src="/vector-2@2x.png" />
        <div className="group-child2" />
        <img
          className="fi-sr-phone-call-icon"
          alt=""
          src="/fisrphonecall@2x.png"
        />
        <div><button className="see-profile"style={{ backgroundColor: '#6ff46c', border: 'none' }}>see profile</button></div>
      </div>
      {showMore && (
        <>
        <b className="lawyers">Lawyers</b>
      <div className="rectangle-group">
        <div className="group-child" />
        <img className="mask-group-icon" alt="" src="/mask-group@2x.png" />
        <b className="hamoudi-iyad">hamoudi iyad</b>
        <address className="medea">
      <span>Medea</span>
       </address>
        <div className="ftyguhjc-jhv-jzdh">
          ftyguhjc jhv jzdh hdvsd sdj sjb bs s d cbnjdbshvv jzdh hdvsd sdj sjb
          bs s d cbnjdbshvv jzdh hdvsd sdj sjb bs s d cbnjdbshvv jzdh hdvsd sdj
          sjb bs s d cbnjdbshvv jzdh hdvsd sdj sjb bs s d cbnjdbshvv jzdh hdvsd
          sdj sjb bs s d cbnjdbshv
        </div>
        <div className="ftyguhjc-jhv-jzdh1">
          ftyguhjc jhv jzdh hdvsd sdj sjb bs s d cbnjdbshvv jzdh hdvsd sdj sjb
          bs s d cbnjdbshvv jzdh hdvsd sdj sjb bs s d cbnjdbshvv jzdh hdvsd sdj
          sjb bs s d cbnjdv
        </div>
        <img className="group-item" alt="" src="/group-155@2x.png" />
        <img className="group-inner" alt="" src="/group-156@2x.png" />
        <img className="group-child1" alt="" src="/vector-2@2x.png" />
        <div className="group-child2" />
        <img
          className="fi-sr-phone-call-icon"
          alt=""
          src="/fisrphonecall@2x.png"
        />
        <div><button className="see-profile"style={{ backgroundColor: '#6ff46c', border: 'none' }}>see profile</button></div>
      </div>
      <div className="rectangle-container">
        <div className="group-child" />
        <img className="mask-group-icon" alt="" src="/mask-group@2x.png" />
        <b className="hamoudi-iyad">hamoudi iyad</b>
        <address className="medea">
      <span>Medea</span>
     </address>
        <div className="ftyguhjc-jhv-jzdh">
          ftyguhjc jhv jzdh hdvsd sdj sjb bs s d cbnjdbshvv jzdh hdvsd sdj sjb
          bs s d cbnjdbshvv jzdh hdvsd sdj sjb bs s d cbnjdbshvv jzdh hdvsd sdj
          sjb bs s d cbnjdbshvv jzdh hdvsd sdj sjb bs s d cbnjdbshvv jzdh hdvsd
          sdj sjb bs s d cbnjdbshv
        </div>
        <div className="ftyguhjc-jhv-jzdh1">
          ftyguhjc jhv jzdh hdvsd sdj sjb bs s d cbnjdbshvv jzdh hdvsd sdj sjb
          bs s d cbnjdbshvv jzdh hdvsd sdj sjb bs s d cbnjdbshvv jzdh hdvsd sdj
          sjb bs s d cbnjdv
        </div>
        <img className="group-item" alt="" src="/group-155@2x.png" />
        <img className="group-inner" alt="" src="/group-156@2x.png" />
        <img className="group-child1" alt="" src="/vector-2@2x.png" />
        <div className="group-child2" />
        <img
          className="fi-sr-phone-call-icon"
          alt=""
          src="/fisrphonecall@2x.png"
        />
        <div><button className="see-profile"style={{ backgroundColor: '#6ff46c', border: 'none' }}>see profile</button></div>
      </div>
      <div className="group-div">
        <div className="group-child" />
        <img className="mask-group-icon" alt="" src="/mask-group@2x.png" />
        <b className="hamoudi-iyad">hamoudi iyad</b>
        <address className="medea">
      <span>Medea</span>
       </address>
        <div className="ftyguhjc-jhv-jzdh">
          ftyguhjc jhv jzdh hdvsd sdj sjb bs s d cbnjdbshvv jzdh hdvsd sdj sjb
          bs s d cbnjdbshvv jzdh hdvsd sdj sjb bs s d cbnjdbshvv jzdh hdvsd sdj
          sjb bs s d cbnjdbshvv jzdh hdvsd sdj sjb bs s d cbnjdbshvv jzdh hdvsd
          sdj sjb bs s d cbnjdbshv
        </div>
        <div className="ftyguhjc-jhv-jzdh1">
          ftyguhjc jhv jzdh hdvsd sdj sjb bs s d cbnjdbshvv jzdh hdvsd sdj sjb
          bs s d cbnjdbshvv jzdh hdvsd sdj sjb bs s d cbnjdbshvv jzdh hdvsd sdj
          sjb bs s d cbnjdv
        </div>
        <img className="group-item" alt="" src="/group-155@2x.png" />
        <img className="group-inner" alt="" src="/group-156@2x.png" />
        <img className="group-child1" alt="" src="/vector-2@2x.png" />
        <div className="group-child2" />
        <img
          className="fi-sr-phone-call-icon"
          alt=""
          src="/fisrphonecall@2x.png"
        />
        <div><button className="see-profile"style={{ backgroundColor: '#6ff46c', border: 'none' }}>see profile</button></div>
      </div>
      <div className="rectangle-parent1">
        <div className="group-child" />
        <img className="mask-group-icon" alt="" src="/mask-group@2x.png" />
        <b className="hamoudi-iyad">hamoudi iyad</b>
        <address className="medea">
      <span>Medea</span>
        </address>
        <div className="ftyguhjc-jhv-jzdh">
          ftyguhjc jhv jzdh hdvsd sdj sjb bs s d cbnjdbshvv jzdh hdvsd sdj sjb
          bs s d cbnjdbshvv jzdh hdvsd sdj sjb bs s d cbnjdbshvv jzdh hdvsd sdj
          sjb bs s d cbnjdbshvv jzdh hdvsd sdj sjb bs s d cbnjdbshvv jzdh hdvsd
          sdj sjb bs s d cbnjdbshv
        </div>
        <div className="ftyguhjc-jhv-jzdh1">
          ftyguhjc jhv jzdh hdvsd sdj sjb bs s d cbnjdbshvv jzdh hdvsd sdj sjb
          bs s d cbnjdbshvv jzdh hdvsd sdj sjb bs s d cbnjdbshvv jzdh hdvsd sdj
          sjb bs s d cbnjdv
        </div>
        <img className="group-item" alt="" src="/group-155@2x.png" />
        <img className="group-inner" alt="" src="/group-156@2x.png" />
        <img className="group-child1" alt="" src="/vector-2@2x.png" />
        <div className="group-child2" />
        <img
          className="fi-sr-phone-call-icon"
          alt=""
          src="/fisrphonecall@2x.png"
        />
       <div><button className="see-profile"style={{ backgroundColor: '#6ff46c', border: 'none' }}>see profile</button></div>
      </div>
      
        
      <div className="rectangle-parent2">
        <div className="group-child" />
        <img className="mask-group-icon" alt="" src="/mask-group@2x.png" />
        <b className="hamoudi-iyad">hamoudi iyad</b>
        <address className="medea">
      <span>Medea</span>
    </address>
        <div className="ftyguhjc-jhv-jzdh">
          ftyguhjc jhv jzdh hdvsd sdj sjb bs s d cbnjdbshvv jzdh hdvsd sdj sjb
          bs s d cbnjdbshvv jzdh hdvsd sdj sjb bs s d cbnjdbshvv jzdh hdvsd sdj
          sjb bs s d cbnjdbshvv jzdh hdvsd sdj sjb bs s d cbnjdbshvv jzdh hdvsd
          sdj sjb bs s d cbnjdbshv
        </div>
        <div className="ftyguhjc-jhv-jzdh1">
          ftyguhjc jhv jzdh hdvsd sdj sjb bs s d cbnjdbshvv jzdh hdvsd sdj sjb
          bs s d cbnjdbshvv jzdh hdvsd sdj sjb bs s d cbnjdbshvv jzdh hdvsd sdj
          sjb bs s d cbnjdv
        </div>
        <img className="group-item" alt="" src="/group-155@2x.png" />
        <img className="group-inner" alt="" src="/group-156@2x.png" />
        <img className="group-child1" alt="" src="/vector-2@2x.png" />
        <div className="group-child2" />
        <img
          className="fi-sr-phone-call-icon"
          alt=""
          src="/fisrphonecall@2x.png"
        />
        <div><button className="see-profile"style={{ backgroundColor: '#6ff46c', border: 'none' }}>see profile</button></div>
      </div>
      <div className="rectangle-parent3">
        <div className="group-child" />
        <img className="mask-group-icon" alt="" src="/mask-group@2x.png" />
        <b className="hamoudi-iyad">hamoudi iyad</b>
        <address className="medea">
      <span>Medea</span>
    </address>
        <div className="ftyguhjc-jhv-jzdh">
          ftyguhjc jhv jzdh hdvsd sdj sjb bs s d cbnjdbshvv jzdh hdvsd sdj sjb
          bs s d cbnjdbshvv jzdh hdvsd sdj sjb bs s d cbnjdbshvv jzdh hdvsd sdj
          sjb bs s d cbnjdbshvv jzdh hdvsd sdj sjb bs s d cbnjdbshvv jzdh hdvsd
          sdj sjb bs s d cbnjdbshv
        </div>
        <div className="ftyguhjc-jhv-jzdh1">
          ftyguhjc jhv jzdh hdvsd sdj sjb bs s d cbnjdbshvv jzdh hdvsd sdj sjb
          bs s d cbnjdbshvv jzdh hdvsd sdj sjb bs s d cbnjdbshvv jzdh hdvsd sdj
          sjb bs s d cbnjdv
        </div>
        <img className="group-item" alt="" src="/group-155@2x.png" />
        <img className="group-inner" alt="" src="/group-156@2x.png" />
        <img className="group-child1" alt="" src="/vector-2@2x.png" />
        <div className="group-child2" />
        <img
          className="fi-sr-phone-call-icon"
          alt=""
          src="/fisrphonecall@2x.png"
        />
        <div><button className="see-profile"style={{ backgroundColor: '#6ff46c', border: 'none' }}>see profile</button></div>
      </div>
      </>
      )}
      <div className="more"onClick={handleMoreClick}>more</div>

    </div>
    </div>
  );
};

export default Desktop1;

