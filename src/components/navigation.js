import React from 'react';

export default class Navigation extends React.Component {
    render() {
        return <div>

            <nav className="navbar navbar-dark bg-dark">
            <div className="container">
            <a className="navbar-brand" href="#">Navbar</a>
            <a className="nav-link" href="#">Home</a>
            <a className="nav-link" href="#">About</a>
            <a className="nav-link" href="#">Gallery</a>
            </div>

            </nav>
        </div>
    }
}