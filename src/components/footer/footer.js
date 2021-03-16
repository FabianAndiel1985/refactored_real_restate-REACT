import React from 'react';
import classes from './footer.module.css';

function Footer(props) {
  return (<footer> Created by {props.creator}</footer>)
}

export default Footer;