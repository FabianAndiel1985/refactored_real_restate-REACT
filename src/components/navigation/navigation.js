import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import styles from './navigation.module.css';
import fire from '../../config/fire';


function Navigation(props) {
	
	function logout() {
		fire.auth().signOut().then((u)=> {
			localStorage.removeItem("user");
			props.history.push("/");
		})		
	}


    return (
        <Navbar bg="light" expand="lg">
	  <Navbar.Brand href=""><img className={styles.navBrand} src={require("../../assets/images/logo.png")}/> </Navbar.Brand>
	  <Navbar.Toggle aria-controls="basic-navbar-nav" />
	  <Navbar.Collapse id="basic-navbar-nav">
	    <Nav className="mr-auto">
	      <Nav.Link href="/" className={styles.navLink}>Home</Nav.Link>
	      <Nav.Link href="#team" className={styles.navLink}>Team</Nav.Link>
	  <NavDropdown className={styles.navLink} title="Shop" id="basic-nav-dropdown">
        <NavDropdown.Item href="#shopping-cart" >shopping cart</NavDropdown.Item>
        <NavDropdown.Item href="#products">products</NavDropdown.Item>
      </NavDropdown>

       {localStorage.getItem("user") ? 
       <div className={styles.logout}>
	         <Nav.Link onClick={logout}>
	         	Logout
	         </Nav.Link>
         </div>
         : null
       }
	    </Nav>
	  </Navbar.Collapse>
	</Navbar>
    )
}

export default withRouter(Navigation);