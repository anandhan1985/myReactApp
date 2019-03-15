import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Header extends Component {

    render() {
        return (

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">EMP</Link>
                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link className="nav-link" to="/emp-login">Login</Link>
                        </li> */}
                    </ul>

                </div>
            </nav>

        );
    }
}

export default Header;