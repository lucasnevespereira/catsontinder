import React from 'react';
import './Header.css';
import cat from './cat.svg';
import IconButton from '@material-ui/core/IconButton';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';

const Header = () => {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon className="header__icon" fontSize="large" />
      </IconButton>
      {/* LOGO */}
      <img className="header__logo" src={cat} alt="cat logo" />
      <IconButton>
        <ForumIcon className="header__icon" fontSize="large" />
      </IconButton>
    </div>
  );
};

export default Header;
