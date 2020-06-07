import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

export const PageNotFound = () => (
  <div className='page-not-found'>
    <h1>404 Error</h1>
    <p>Page not found</p>
    <Link to='/'>
      <button className='primary-button'>Go to menu</button>
    </Link>
  </div>
);
