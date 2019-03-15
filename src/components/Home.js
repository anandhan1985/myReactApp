import React, { Component, Fragment } from 'react';
import './custom.css';
class Home extends Component {

    loginSubmit = () => {
        this.props.history.push('/emp-list');
    }

    render() {

        return (
            <Fragment>
                <div className="modal-content login-outer">
                    <div className="modal-header">
                        <h4 className="modal-title">Member Login</h4>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={this.loginSubmit}>
                            <div className="form-group">
                                <input type="text" className="form-control" name="username" placeholder="Username" required="required" />
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" name="password" placeholder="Password" required="required" />
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary btn-lg btn-block login-btn">Login</button>
                            </div>
                        </form>
                    </div>

                </div>
            </Fragment>
        );
    }
}
export default Home;