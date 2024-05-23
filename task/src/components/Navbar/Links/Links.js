import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import './Links.css';
import { Link, useLocation } from 'react-router-dom';

export default function Links() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="nav-links">
      <Link to="/" className={isHome ? 'underline' : ''}>Home</Link>
      <Link to="/aboutUs">About us</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/admin">
        Admin <FaUserCircle />
      </Link>
    </div>
  );
}
