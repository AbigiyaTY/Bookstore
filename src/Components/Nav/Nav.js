import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import './Nav.css';

function Nav() {
  return (
    <div>
      <div className="container navContainer">
        <div className="row my-2 py-4">
          <h2 className="col-3 navTitle">Bookstore CMS</h2>
          <li className="col-1  my-2"><Link to="/">BOOKS</Link></li>
          <li className="col-1  my-2"><Link to="/CATEGORIES">CATEGORIES</Link></li>
          <div className="col-5" />
          <div className="col-1 logo mx-4 px-5">
            <FaUser />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
