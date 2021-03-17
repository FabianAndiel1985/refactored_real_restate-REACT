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

      import IndButton from './IndButton.jsx';
      import ModalF from './ModalF.jsx';

// TODOS: 
// authListener
// MODAL EIGENE KOMPONENTE

const App = ()=> {

  const [daytime, setDaytime] = useState('morning');
  const [lgShow, setLgShow] = useState(false);
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const[isLoggedIn,setIsLoggedIn] = useState(false);

  useEffect(()=> {
    setDaytime(getGreeting());
  })

  useEffect(()=> {
  //  authListener(user);
  console.log(localStorage.getItem('user'));
    
  })


return(
  <Container>
  <h1 style={{'color': getFontColour(daytime)}}  className="text-center"> Good {daytime} </h1>
  <h1>Welcome to Fabian Andiel Real</h1>      
  <img className="mt-5" src={require("./assets/images/welcomePic.jpg")}/>


           <p className="mt-3">
           <a onClick={() => {setLgShow(changeShowProperty(lgShow))}} className={styles.adminLogin}>
             Login as an Administrator
            </a>
         </p>

         <ModalF
         lgShow = {lgShow}
         setLgShow = {setLgShow}
         changeShowProperty = {changeShowProperty}
         setUser = {setUser}
         setPassword = {setPassword}
         onFocus = {onFocus}
         onBlur = {onBlur}
         handleChange = {handleChange}
         user= {user}
         password= {password}
         login = {login}
         isLoggedIn = {isLoggedIn}
         setIsLoggedIn = {setIsLoggedIn}
         />

      {/* <Modal
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

          <Button onClick={(e)=>login(e,user,password)} variant="success">Login</Button>
        </Modal.Body>
      </Modal>
      {user ? <Redirect to="/products"/> : null }  */}

      <IndButton clicker={test}/>

  </Container>




);

}


export default App;
