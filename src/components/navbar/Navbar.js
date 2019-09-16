import React from 'react';
import Menu from './Menu'

class Navbar extends React.Component {
    state = {
        displayMenu: false
    }

    onToggleMenu = () => {
        this.setState({ displayMenu: !this.state.displayMenu })
    }

    render() {
        const { displayMenu } = this.state

        return (
                <nav className="navbar navbar-expand-lg navbar-light bg-light mb-2 shadow">
                    <div className="d-flex">
                        <button onClick={this.onToggleMenu} className="navbar-toggler border-0" type="button">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <a className="navbar-brand ml-2" href="#">
                            <span className="fa fa-camera mr-1"></span> Title</a>
                    </div>
                    <Menu displayMenu={displayMenu}  />
                </nav>
        );
    }
}

export default Navbar;
