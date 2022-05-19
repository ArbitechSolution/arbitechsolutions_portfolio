import React, { useEffect } from 'react'
import "./Navbar.css"
import { Navbar, Nav } from 'react-bootstrap'
import Home from '../Home/Home'
function Navbars() {
    return (
        <div className='main-image'>
            <Navbar collapseOnSelect expand="lg" variant="dark">

                <Navbar.Brand href="#home" className='logobrand ps-md-4'>
                    ARBITECH SOLUTIONS<br />
                    <div className='arbitech-box'>Full Stack Developer</div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">

                    </Nav>
                    <Nav className="pe-md-5">
                        <Nav.Link className='nav-text pe-2' href="#feedback">About</Nav.Link>
                        <Nav.Link className='nav-text' href="#Experience">Experience</Nav.Link>
                        <Nav.Link className='nav-text' href="#project">My Project</Nav.Link>
                        <Nav.Link className='nav-text' href="#contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>

            </Navbar>
            <Home/>
        </div>
    )
}

export default Navbars