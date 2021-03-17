import React, { useState, useEffect } from 'react';

import styles from './App.module.css';
import welcomePic from './assets/images/welcomePic.jpg';
import {Image,Modal,InputGroup,FormControl,Button,Container} from 'react-bootstrap';
import { Redirect } from "react-router-dom";
import {getTime, 
        getDaytimeString, 
        getFontColour,
        changeShowProperty,
        getGreeting,
        onFocus,
        onBlur,
        handleChange,
        authListener,
        login,
        test
      } from './app-helper-functions';



// TODOS: 
// authListener
// MODAL EIGENE KOMPONENTE

const ModalF = ({lgShow, setLgShow, changeShowProperty})=> {

  const [user, setUser] = useState('');

  useEffect(()=> {
    
  })


return(

  // <Modal>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => {setLgShow(changeShowProperty(lgShow))}}
        aria-labelledby="example-modal-sizes-title-lg"
      > 
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
           Login Data
          </Modal.Title>
        </Modal.Header> {/*
        <Modal.Body>

          <label htmlFor="email"> Username</label>
          <InputGroup className="mb-3">
            <FormControl
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              type="email"
              id="email"
              name="email"
              onChange= {(e)=> setUser(handleChange(e))}
              onFocus = {(e)=>onFocus(e)}
              onBlur= {(e)=>onBlur(e) }
            />
          </InputGroup>


          <label htmlFor="password"> Password</label>
          <InputGroup className="mb-3">
            <FormControl
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              type="password"
              id="password"
              name="password"
              onChange= {(e)=> setPassword(handleChange(e))}
              onFocus = {(e)=>onFocus(e)}
              onBlur= {(e)=>onBlur(e)}
            />
          </InputGroup>

          <Button onClick={(e)=>login(e,user,password)} variant="success">Login</Button>
        </Modal.Body>
        {user ? <Redirect to="/products"/> : null }  */}
      </Modal>
      
);

}


export default ModalF;
