import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Pic from '../../../assets/images/welcomePic.jpg';
import styles from './teamMemberDetail.module.css';

function teamMemberDetail(props) {
	return(
			<Card className={styles.card}>
			  <Card.Img variant="top" src={require("../../../assets/images/"+props.image)} />
			  <Card.Body>
			    <div>
			      <Table>
					  <thead>
					  </thead>
					  <tbody>
					    <tr>
					      <th className={styles.cardHeading}>firstname </th>
					      <td className={styles.cardText}>{props.firstname}</td>
					    </tr>
					    <tr>
					     <th className={styles.cardHeading}>lastname</th>
					      <td className={styles.cardText}>{props.lastname}</td>
					    </tr>
					     <tr>
					     <th className={styles.cardHeading}>job</th>
					     <td className={styles.cardText}>{props.job} </td>
					    </tr>
					  </tbody>
					</Table>
					</div>
			    <Button className={styles.buttonText} variant="primary"> Get details </Button>
			  </Card.Body>
			</Card>
		)
}

export default teamMemberDetail;