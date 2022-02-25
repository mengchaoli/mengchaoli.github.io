import React, { useState } from 'react';
import Hamburger from 'hamburger-react';

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className='header'>
      <Hamburger className='hamburger-btn' toggled={isOpen} toggle={setOpen} />
      <div className={`nav ${isOpen ? 'open' : ''}`}>
        <ul className='nav-list'>
          <li>ABOUT</li>
          <li>PROJECTS</li>
          <li>CONTACT</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
