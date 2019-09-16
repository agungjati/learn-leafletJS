import React from 'react';

class Menu extends React.Component {

    

    render() {
        return (
            <div className={this.props.displayMenu ? "navbar-collapse" : "collapse navbar-collapse"}>
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link" href="/">Home
                            <span className="sr-only">(current)</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">How to use</a>
                </li>
            </ul>
            </div>
        );
    }
}

export default Menu;