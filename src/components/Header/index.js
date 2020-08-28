import React from 'react';

import './style.css';

function Header({ black }) {
  return <header className={black ? 'header-bg' : ''} >
    <div className='header--logo'>
      <a href="https://fontmeme.com/netflix-font/"><img src="https://fontmeme.com/permalink/200828/d7fa46218581e004139f5ad9298e915d.png" alt="netflix-font" border="0" /> </a>

    </div>

    <div className='header--user' >
      <a href='# '>
        <img src="https://lh3.googleusercontent.com/hOyPnc131KoSUUFvKIT1-UJB95D_cgVa6CXN9lMInVcOigPCjTtGfJBCXZUM5vgVmD068w=s85" alt="netflix-font" />
      </a>
    </div>

  </ header>;
}

export default Header;