import React from 'react';
import { Link } from 'react-router-dom';

import "./Header.css"



const Header = () => {

  return (
    <div>
      <h1>CMS</h1>
      <div className="header">
        <Link to='/'>Input</Link>
        <Link to='/'>Blogs</Link>
        <Link to='/blog-form'>Add Blog</Link>
      </div>
    </div>
  )
}

export default Header;