import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import {Link} from 'react-router-dom';
// import logo from './logo.png';

import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap';
import {Modal, ModalHeader, ModalTitle} from 'react-bootstrap';


class Navbarr extends Component {
    render() {
        
        return (
            <React.Fragment>
            <div>
                <Navbar className="navbar-dark navbar" expand="lg">
                    <Container>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Brand href="/" className="nav-bar mx-auto">Meppsimo</Navbar.Brand>
                        <Navbar.Collapse  id="basic-navbar-nav">
                            <Nav className="mr-auto nav-link">
                                <Nav.Link href="/kategori-pria" className="nav-men" >Men</Nav.Link>
                                <Nav.Link href="/kategori-wanita">Women</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                        
                        <Nav>
                        <Nav.Link href="#home" className="mr-2"><i className="fas fa-shopping-cart"></i> Cart (<span>5</span>)</Nav.Link>
                        
                        <Navbar.Collapse  id="basic-navbar-nav">
                            <NavDropdown title="Akun" id="basic-nav-dropdown">
                            
                                    <NavDropdown.Item href="/masuk">Masuk</NavDropdown.Item>
                                    
                                    <NavDropdown.Item href="/daftar">Daftar</NavDropdown.Item>
                                    
                            </NavDropdown>
                        </Navbar.Collapse>
                        </Nav>
                        
                    </Container>
                </Navbar>
            </div>


            
        
            </React.Fragment>
        
        );
    }
}

export default Navbarr;