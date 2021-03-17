import React, { useState, useEffect } from 'react';


const IndButton = (props)=> {


useEffect(()=> {
   
    console.log(props);
      
    })
 
return(

<button onClick={props.clicker}> Ind Button</button>

);

}


export default IndButton;
