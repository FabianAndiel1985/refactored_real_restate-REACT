import React, { useState, useEffect } from 'react';
import {Modal,InputGroup,FormControl,Button} from 'react-bootstrap';
import { Redirect } from "react-router-dom";


const ModalF = ({lgShow,
                setLgShow, 
                changeShowProperty,
                setUser,
                setPassword,
                onFocus,
                onBlur,
                handleChange,
                user,
                password,
                login,
                isLoggedIn,
                setIsLoggedIn})=> {

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
        </Modal.Header>
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


          <Button onClick={(e)=>{login(e,user,password); setIsLoggedIn(true);}} variant="success">Login</Button>
        </Modal.Body>
          {user && password && isLoggedIn ? <Redirect to="/products"/> : null }  
      </Modal>
      
);

}


export default ModalF;
