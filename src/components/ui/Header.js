import React from 'react'

import {Nav, NavItem, Navbar} from 'react-bootstrap';
import {BrowserRouter} from 'react-router-dom'

const header = (message) => <div>
    <BrowserRouter>
        <div>
            <div>
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="https://keyholesoftware.com/">Keyhole Software</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                        <NavItem eventKey={1} href="/movies">Movies</NavItem>
                        <NavItem eventKey={2} href="/login">Login</NavItem>
                        <NavItem eventKey={3} href="/register">Register</NavItem>
                    </Nav>
                </Navbar>
            </div>

            <div className="error">
              {message}
            </div>
        </div>
    </BrowserRouter>
</div>

export default header;