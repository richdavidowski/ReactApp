import React from 'react';

export default class LoginForm extends React.Component {
    render() {
        return <div className="container"><br/>
            <div className="card" id="login-card">
            <div className="card-header">
            <h3>Log In</h3>
            </div>

            <div className="card-body">
            <form>
                <label for="username">Username: </label><br/>
                <input type="text" id="username" name="username" /><br/><br/>
                <label for="password">Password: </label><br/>
                <input type="text" id="password" name="password" />
            </form>
            </div>
            <div className="card-footer">
                <input type="submit" />
            </div>

            </div>
            </div>

    }
}