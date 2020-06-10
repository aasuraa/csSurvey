import React, { useContext } from 'react';

import { AuthContext } from '../Context/AuthContext';
import AuthService from '../Services/AuthService';
import { Nav, Navbar } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

const Header = props => {
    const { setUser, isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

    const authNavBar = () => {
        return (
            <Nav className="bg-light">
                <Nav.Link href="/surveys/senior/edit" className="m-2 bg-light">Senior Survey</Nav.Link>
                <Nav.Link href="/surveys/alumni/edit" className="m-2 bg-light">Alumni Survey</Nav.Link>
                <Nav.Link href="/surveys/iba/edit" className="m-2 bg-light">Iba Survey</Nav.Link>
                <Button variant="light" className="m-2" onClick={onClickLogout}>Logout</Button> 
            </Nav>
        )
    }

    const nauthNavBar = () => {
        return (
            null
        )
    }

    const onClickLogout = () => {
        AuthService.logout().then(data => {
            if(data.success){
                setUser(data.user);
                setIsAuthenticated(false);
            }
        })
    }


    return(
        <Container>
            <Navbar className="bg-light justify-content-between" variant="light">
                <Navbar.Brand href="/">{props.value}</Navbar.Brand>
                    { isAuthenticated ? authNavBar() : nauthNavBar() }
            </Navbar> <hr/> <br />
        </Container>
    );
}

export default Header;