import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class login extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container-login">
                   
               

                <div className="container-backgroundlogin">
                    <div className="row text-center">
                        <div className="col">
                            <h2>Masuk</h2>
                        </div>
                    </div>

                    <form className="p-4 mr-3 ml-3">
                        <div className="form-group">
                            <label for="email">Email</label>
                            <input className="form-control" type="text" placeholder="Email" />
                        </div>
                        <div className="form-group mb-1">
                            <label for="password">Password</label>
                            <input className="form-control" type="password" placeholder="Password" />
                        </div>
        
                        <div className="row">
                            <div className="col">
                                <p>Bukan member? <Link to="signup.html"> Daftar </Link> Sekarang!</p>
                            </div>
                        </div>
                        <div className="row justify-content-end ">
                            <div className="col-2 mr-5 mb-2">
                                <Link to="">
                                <button type="button" class="btn login-btn" >Login</button>
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>
                </div>
            </React.Fragment>
        );
    }
}

export default login;