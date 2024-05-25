import React from 'react';
import './header.css';
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import NavManageUsers from "./NavManageUsers";

export default function HeaderManageUsers({ userData }) {
  return (
    <header id="header" className="header fixed-top d-flex align-items-center">
      <Logo />
      <SearchBar />
      <NavManageUsers/>
    </header>
  );
}
