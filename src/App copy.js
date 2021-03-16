import React, {Component} from 'react';
import styles from './App.module.css';
import welcomePic from './assets/images/welcomePic.jpg';
import {Image,Modal,InputGroup,FormControl,Button} from 'react-bootstrap';
import {Container} from 'react-bootstrap';
import { Redirect } from "react-router-dom";
import {getTime, 
        getDaytimeString, 
        getFontColour,
        setLgShow,
        getGreeting,
        onFocus,
        onBlur,
        handleChange,
        authListener,
        login
      } from './app-helper-functions';
import fire from './config/fire';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      daytime:"morning",
      lgShow:false,
      user: '',
      email: '',
      password: ''
    }
    
    this.authListener = authListener.bind(this);
    this.handleChange = handleChange.bind(this);
    this.getTime = getTime;
    this.getDaytimeString = getDaytimeString;
    this.getFontColour = getFontColour;
    this.setLgShow = setLgShow;
    this.getGreeting=getGreeting;
    this.onFocus = onFocus;
    this.onBlur = onBlur;
    this.login = login;
  }

  
  componentDidMount() {
        this.getGreeting();
        this.authListener();
  }



  render() {
   
    return ( 
      <Container className={styles.appContainer}  className="mt-4 mb-5">

        <h1 style={{'color': this.getFontColour()}}  className="text-center"> Good {this.state.daytime} </h1>
        <h1>Welcome to Fabian Andiel Real</h1>
        
        <img className="mt-5" src={require("./assets/images/welcomePic.jpg")}/>
        
        <p className="mt-3">
          <a onClick={() => this.setLgShow()} className={styles.adminLogin}>
            Login as an Administrator
           </a>
        </p>

       <Modal
        size="lg"
        show={this.state.lgShow}
        onHide={() => this.setLgShow()}
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
              onChange= {(e)=> this.handleChange(e)}
              onFocus = {(e)=>this.onFocus(e)}
              onBlur= {(e)=>this.onBlur(e) }
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
              onChange= {(e)=> this.handleChange(e)}
              onFocus = {(e)=>this.onFocus(e)}
              onBlur= {(e)=>this.onBlur(e)}
            />
          </InputGroup>

          <Button onClick={(e)=>this.login(e)} variant="success">Login</Button>

        </Modal.Body>
      </Modal>
      {this.state.user ? <Redirect to="/products"/> : null } 
      </Container>
    );
  }
}

export default App;
