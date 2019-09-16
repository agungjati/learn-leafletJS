import React from 'react';

class Login extends React.Component {

    render() {
        return (
            <div className="container d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
                <form className="shadow px-4 pb-5 pt-4 rounded" style={{ width: "400px" }}>
                    <h3>Login</h3>
                    <hr />
                    <div className="form-group">
                        <label >Email address</label>
                        <input type="email" className="form-control" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <label >Password</label>
                        <input type="password" className="form-control" placeholder="Password" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>);
    }
}

export default Login;