import React from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import './style.css';


function Header({ black }) {

  return <header className={black ? 'header-bg' : ''} >

    <div className='header--logo'>
      <img src="https://fontmeme.com/permalink/200828/d7fa46218581e004139f5ad9298e915d.png" alt="netflix-font" border="0" />
    </div>

    <div className='header--user' >
      <AccountCircleIcon color='white' style={{ fontSize: 30 }} />
    </div>

  </ header >;
}

export default Header;