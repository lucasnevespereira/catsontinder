import React from 'react';
import './Header.css';
import cat from './cat.svg';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';

const Header = () => {
  return (
    <div className="header">
      <PersonIcon className="header__icon" fontSize="large" />
      {/* <h2>Logo</h2> */}
      <img className="header__logo" src={cat} alt="cat logo" />
      <ForumIcon className="header__icon" fontSize="large" />
    </div>
  );
};

export default Header;
