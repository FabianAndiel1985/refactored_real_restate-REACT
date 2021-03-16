import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Table} from 'react-bootstrap';
import {reduceProduct} from '../../actions/actions';
import {Container} from 'react-bootstrap';
import styles from './shopping-cart.module.css';

class ShoppingCart extends React.Component {

  render() {

    function calculate(array) {
       let totalPrice = 0;
       for(let i=0;i<array.length;i++){
         totalPrice += array[i].price;
       }
       return totalPrice.toFixed(2);
    }

    const totalAmount = this.props.products != null ? 
      calculate(this.props.products)
     :null ;
    
    return (
    	<Container className="pt-5">

    	<h1 className="mb-5">Your purchases </h1>

    	<Table className="mb-5">
        <thead>
          <tr>
            <th className={styles.tableHeading}>number</th>
            <th className={styles.tableHeading}>product</th>
            <th className={styles.tableHeading}>price </th>
            <th className={styles.tableHeading}>amount</th>
            <th className={styles.tableHeading}>action</th>
          </tr>
        </thead>
        <tbody>
        {this.props.products? this.props.products.map(
               (item,index)=>{
                 return (
                 <tr key={item.id}>
                  <td className={styles.tableText}>{item.id}</td>
                  <td className={styles.tableText}>{item.name}</td>
                  <td className={styles.tableText}>{item.price}</td>
                  <td className={styles.tableText}>{item.amount}</td>
                  <td className={styles.tableText}><button onClick={(event)=>this.props.onClick(event)}> Reduce amount</button></td>
                </tr>
                )           
                }  
        )
             :null}
          
        </tbody>
      </Table> 
      <p className={styles.tableHeading}> Your total is: {totalAmount}</p>
      </Container>
    	);
  }
}


const mapStateToProps = (state)=> {
	return{
		products:state
	}
}

const mapDispatchToProps = {
      onClick:reduceProduct
   }


let ShoppingCart2 = connect(mapStateToProps,mapDispatchToProps)(ShoppingCart);

export default ShoppingCart2;