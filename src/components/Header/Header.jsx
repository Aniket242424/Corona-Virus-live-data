import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.module.css';
import { Link } from 'react-router-dom';
const Header = () => {
    return (

        <div >
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark d-flex flex-row">
                <ul className="nav nav-fill rounded-0  nav-pills flex-column flex-sm-row">
                    <li className="nav-item ">
                        <Link className="navbar-brand" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="navbar-brand" to="/chart">Graph View</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="navbar-brand" to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="navbar-brand" to="/help">Help</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;