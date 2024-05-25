import React from 'react';
import './headeruser.css';
import Logo from "./Logo";
import Nav from "./Nav";

export default function Header({ userData }) {
  return (
    <header id="header" className="header fixed-top d-flex align-items-center">
      <Logo />
      <Nav userData={userData} />
    </header>
  );
}
