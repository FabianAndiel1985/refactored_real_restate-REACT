import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import TeamMemberDetail from './team-member-detail/team-member-detail';
import {Container, Row, Col} from 'react-bootstrap';
import axiosErrorHandling from '../higher-order-component/axios-error-handling';
import DateContext from '../higher-order-component/date-context';
import styles from './team.module.css';

const Team = () => {
    const [teamMembers, setTeamMembers] = useState('');
    const [date, setDate] = useState();

    useEffect(()=> {
       let date = DateContext._currentValue2;
       setDate(date);
      })

    const transformResponseToObjectArray=(response)=> {
      
        const{m1,m2,m3,m4,m5,m6,m7,m8,m9} = response.data;
        
        return [m1,m2,m3,m4,m5,m6,m7,m8,m9];
    }

    useEffect(()=> {
        axios.get('/team.json').then((response) => {
            let teamMembers = transformResponseToObjectArray(response);
            setTeamMembers(teamMembers);
        })
        .catch((error) => {
            console.log(error.message);
        });
      })

      return (
        <Fragment>
        <div className="pt-5">
            <h1 className={styles.heading}> Our team </h1>
        <sub className={styles.sub}> as of  { date ? <span> {date} </span> : null }  </sub>


            <Container className="my-5" fluid style={{ padding: " 0 10% 0 10%" }}>
            <Row>
               {teamMembers ? teamMembers.map(
                   (item,index)=>{
                       return (
                       <Col key={item.id} xs={12} s={12}  md={12} lg={6} xl={4} className="mt-5">
                           <TeamMemberDetail
                               firstname={item.firstname}
                               lastname = {item.lastname}
                               job={item.job}
                                image={item.image}
                           /> 
                       </Col>
                       )	
                             
                   }
                   )
               :null}
            </Row>
            </Container>
          </div>
    </Fragment>
    );




}

export default axiosErrorHandling(Team,axios);