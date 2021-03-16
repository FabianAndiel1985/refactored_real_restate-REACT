import React, { Component } from 'react';
import axios from 'axios';
import { Redirect, withRouter } from "react-router-dom";

class AddProducts extends React.Component {
	
  constructor(props){
		super(props);
    this.state = {
            products: null
        }
    }

    componentDidMount() {
    }

   
  render() {
    
    return (
      <p> Bin die Products Komponenete</p>
      );
      
  }
}



export default AddProducts;