import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav className='container d-md-flex d-sm-inline-flex justify-content-between bg-secondary p-3'>
            <div>
                <h4>Quiz Ocean Mania</h4>
            </div>
            <div className='header'>
                <Link to="/">Home</Link>
                <Link to="/">Topics</Link>
                <Link to="/statistics">Statistics</Link>
                <Link to="/blog">Blog</Link>

            </div>
        </nav>
    );
};

export default Header;