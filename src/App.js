import React, { useState, useEffect } from 'react';
import styles from './App.module.css';
import {Container} from 'react-bootstrap';
import { 
        getFontColour,
        changeShowProperty,
        getGreeting,
        onFocus,
        onBlur,
        handleChange,
        login,
        test
      } from './app-helper-functions';

      import IndButton from './IndButton.jsx';
      import ModalF from './ModalF.jsx';

// TODOS: 
// authListener

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

      
      <IndButton clicker={test}/>

  </Container>

);

}


export default App;
