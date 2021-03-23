import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { reduceProduct } from '../../actions/actions';
import styles from './shopping-cart.module.css';


const ShoppingCart = () => {

  const dispatch = useDispatch();

  const[productsInCart,setProductsInCart] = useState(undefined);

  const products= useSelector(state => state);

  useEffect(() => {
    if(products) {
        setProductsInCart(products);
    }
    }, [products]); 

    const calculate = (array) => {
      let totalPrice = 0;
      for(let i=0;i<array.length;i++){
        totalPrice += array[i].price;
      }
      return totalPrice.toFixed(2);
   }


    const totalAmount = productsInCart != null ? 
      calculate(productsInCart)
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
        {productsInCart? productsInCart.map(
               (item,index)=>{
                 return (
                 <tr key={item.id}>
                  <td className={styles.tableText}>{item.id}</td>
                  <td className={styles.tableText}>{item.name}</td>
                  <td className={styles.tableText}>{item.price}</td>
                  <td className={styles.tableText}>{item.amount}</td>
                  <td className={styles.tableText}><button onClick={(event)=>dispatch(reduceProduct(event))}> Reduce amount</button></td>
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

export default ShoppingCart;