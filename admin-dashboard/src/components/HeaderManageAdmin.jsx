import React from 'react';
import './header.css';
import Logo from "./LogoAdmin";
import SearchBar from "./SearchBar";
import NavManageUsers from "./NavManageUsers";

export default function HeaderManageUsers() {
  return (
    <header id="header" className="header fixed-top d-flex align-items-center">
      <Logo />
      <SearchBar />
      <NavManageUsers/>
    </header>
  );
}
