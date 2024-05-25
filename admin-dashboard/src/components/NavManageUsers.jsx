import React from 'react';
import './nav.css';
import NavAvatar from "./NavAvatarManageUsers";
import NavMessage from "./NavMessage";
import NavNotice from "./NavNotice";
import NavAvatarManageUsers from './NavAvatarManageUsers';

function NavManageUsers() {

  return (
    <nav className="header-nav ms-auto">
      <ul className="d-flex align-items-center">
        <NavNotice />
        <NavMessage />
        <NavAvatarManageUsers/>
      </ul>
    </nav>
  );
}

export default NavManageUsers;
