import React, { Component, useState,useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import {addProduct} from '../../actions/actions';
import {Table} from 'react-bootstrap';
import {Container, Row, Col} from 'react-bootstrap';
import styles from './products.module.css';
import axios from 'axios';
import { Redirect, withRouter } from "react-router-dom";


const Products = ()=> {

  const [products,setProducts] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('http://localhost:8080/realEstateBackend/index.php').then((response) => {
                  setProducts(response.data);
              })
              .catch((error) => {
                  console.log(error.message);
              });
  });


      return (
    	<Container className="my-5">
        <Table>
          <thead>
            <tr>
              <th className={styles.tableHeading}>number</th>
              <th className={styles.tableHeading}>product</th>
              <th className={styles.tableHeading}>price </th>
              <th className={styles.tableHeading}>actions</th>
            </tr>
          </thead>
          <tbody>
          {products != null ? products.map(
                 (item,index)=>{
                   return (
                   <tr key={item.id}>
                    <td className={styles.tableText}>{item.id}</td>
                    <td className={styles.tableText}>{item.name}</td>
                    <td className={styles.tableText}>{item.price}</td>
                    <td> <button className={styles.tableText} onClick={(e) => {
                      dispatch(addProduct(e,item));
                    }}> add to cart</button> </td>
                  </tr>
                  )           
                  }  
          )
               :null}
            
          </tbody>
        </Table>
         {/* {localStorage.getItem("user") ? 
         <button onClick={this.addProduct()}> add Products</button>
         : null
       } */}
    	</Container>);


}

export default Products;