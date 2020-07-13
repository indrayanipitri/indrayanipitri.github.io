import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Footer.css';
import fb from './fb.png';
import tw from './tw.png';
import ig from './ig.png';

class Footer extends Component {
    render () {
        return (
            <footer className="footer border-top">
                <div className="container">
                    <div className="row icon justify-content-between">
                        <div className="col-7 col-lg-6">
                            <Link to="\">
                                <img src={fb} alt="facebook" className="icons"/>
                            </Link>
                            <Link to="\">
                                <img src={tw} alt="twitter" className="icons"/>
                            </Link>
                            <Link to="\">
                                <img src={ig} alt="instagram"/>
                            </Link>
                        </div>
                        <div className="col-4 col-lg-6">
                            <nav className="nav justify-content-end text-uppercase ">
                                <Link to="\" className="nav-link footernav">Contact</Link>
                                <Link to="\" className="nav-link footernav">Developer</Link>
                                <Link to="\" className="nav-link footernav">Jobs</Link>
                                <Link to="\" className="nav-link footernav">Policy</Link>
                            </nav>
                        </div>
                    </div>

                    <div className="row footerp">
                        <div className="col">
                            <p>Copyright 2020 | indrayanipitri</p>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;