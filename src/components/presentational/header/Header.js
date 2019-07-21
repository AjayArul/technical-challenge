import React from 'react'
import { Link } from 'react-router-dom'
import {PROJECT_NAME, MENU_HOME, MENU_COMPAIGNS} from './../../../Strings'

const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg  navbar-dark bg-info">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">{PROJECT_NAME}</Link>
                    <button 
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navBar"
                        aria-controls="navBar"
                        aria-expanded="false"
                        aria-label="nav bar"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse ml-4" id="navbar">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">{MENU_HOME}</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/compaigns">{MENU_COMPAIGNS}</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )  
}

export default Header