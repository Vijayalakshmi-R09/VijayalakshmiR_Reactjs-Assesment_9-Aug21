import React from 'react'
import {Nav,Navbar} from 'react-bootstrap';

export default function Navigate() {
    return (
        <div>
             <div>
             <Navbar bg="primary" variant="dark">
                <Nav className="mr-auto">
                <Navbar.Brand href="/dashborad">Student Account</Navbar.Brand>
                <Nav.Link href="/dashborad">Dashboard</Nav.Link><br/>
                <Nav.Link href="/logout">Logout</Nav.Link>
                </Nav>  
            </Navbar>         
            </div>    
        </div>
    )
}
