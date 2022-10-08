import React from 'react';

const Header = ({headerRef}) => {
  return (
    <header className="header" ref={headerRef}>
      <img src="/logo.png" className="logo" alt="logo" />
    </header>
  )
}

export default Header;