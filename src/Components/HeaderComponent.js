import React, { Component } from 'react';


import { NavLink } from 'react-router-dom';

import {
    Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem,
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label
} from 'reactstrap';

class Header extends Component {
    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false,

        };

    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }



    render() {
        return (
            <div>
                <Navbar dark expand="md" className="header-navbar">
                    <div className="container">


                        <NavbarToggler onClick={this.toggleNav} className='bg-dark' />
                        <NavbarBrand className="mr-auto" href="/"><img src='assets/images/logo.png' height="80" width="90" alt='Fitness and healthy' /></NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink active className="nav-link header-navlink-item  " to='/home'>HOME</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link header-navlink-item " to='/aboutus'>ABOUT</NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink className="nav-link header-navlink-item " to='/contactus'>CONTACT</NavLink>
                                </NavItem>
                            </Nav>

                            <Nav className="ml-auto mt-4" navbar>
                                <NavItem>
                                    <Form>
                                        <FormGroup style={{ display: 'flex', backgroundColor: 'white', border: '1px solid #333' }}>
                                            <Button type="submit" value="submit" style={{ backgroundColor: 'white', border: 'none' }}><i class="fa fa-search" style={{ color: 'black' }} aria-hidden="true"></i></Button>
                                            <Input type="email" style={{ backgroundColor: 'white', border: 'none' }} name="email" id="exampleEmail" placeholder="Search" />
                                        </FormGroup>
                                    </Form>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>

            </div>
        );
    }
}


export default Header;

