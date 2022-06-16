import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, NavItem, NavLink, NavbarBrand, Collapse, NavbarToggler } from "reactstrap";
const logo = require('./lightning-app.png')

export const AppNav = () => {
    const [open, setOpen] = useState(false);

    const toggle = () => setOpen(!open);

    return (
        <Navbar className="main-navbar" light expand="md">
            <NavbarBrand tag={Link} to="/">
                <img height={40} width={120} alt="logo" src={logo} />
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse navbar isOpen={open}>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink tag={Link} to="/">
                            Graph
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
};
