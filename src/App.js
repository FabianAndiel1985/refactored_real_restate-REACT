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
        login
      } from './app-helper-functions';


const App = ()=> {

  const [daytime, setDaytime] = useState('morning');
  const [lgShow, setLgShow] = useState(false);
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(()=> {
    let daytime = getGreeting();
    setDaytime(daytime);
  })


return(
  <div>
  <h1 style={{'color': getFontColour(daytime)}}  className="text-center"> Good {daytime} </h1>
  <h1>Welcome to Fabian Andiel Real</h1>      
  <img className="mt-5" src={require("./assets/images/welcomePic.jpg")}/>


           <p className="mt-3">
           <a onClick={() => {setLgShow(changeShowProperty(lgShow))}} className={styles.adminLogin}>
             Login as an Administrator
            </a>
         </p>










         
  </div>

);




}



// class App extends Component {
  
//   componentDidMount() {
//         this.getGreeting();
//         this.authListener();
//   }



//   render() {
   
//     return ( 
//      
//        <Modal
//         size="lg"
//         show={this.state.lgShow}
//         onHide={() => this.setLgShow()}
//         aria-labelledby="example-modal-sizes-title-lg"
//       >
//         <Modal.Header closeButton>
//           <Modal.Title id="example-modal-sizes-title-lg">
//            Login Data
//           </Modal.Title>
//         </Modal.Header>
//         <Modal.Body>

//           <label htmlFor="email"> Username</label>
//           <InputGroup className="mb-3">
//             <FormControl
//               aria-label="Default"
//               aria-describedby="inputGroup-sizing-default"
//               type="email"
//               id="email"
//               name="email"
//               onChange= {(e)=> this.handleChange(e)}
//               onFocus = {(e)=>this.onFocus(e)}
//               onBlur= {(e)=>this.onBlur(e) }
//             />
//           </InputGroup>


//           <label htmlFor="password"> Password</label>
//           <InputGroup className="mb-3">
//             <FormControl
//               aria-label="Default"
//               aria-describedby="inputGroup-sizing-default"
//               type="password"
//               id="password"
//               name="password"
//               onChange= {(e)=> this.handleChange(e)}
//               onFocus = {(e)=>this.onFocus(e)}
//               onBlur= {(e)=>this.onBlur(e)}
//             />
//           </InputGroup>

//           <Button onClick={(e)=>this.login(e)} variant="success">Login</Button>

//         </Modal.Body>
//       </Modal>
//       {this.state.user ? <Redirect to="/products"/> : null } 
//       </Container>
//     );
//   }
// }

export default App;
