import React from 'react'
import BarChart from './BarChart';
import styles from './Dashboard.module.css';
import HorizontalBarChart from './HorizontalBarChart';
import PieChart from './PieChart';
import {Container,Row,Col} from 'react-bootstrap';
import TableData from './TableData';




const Dashboard = () => {  

  return (
    <>
    <h1>Dashboard page for admin</h1>
    
    <Container>
  <Row>
    <Col className={styles.col1}><HorizontalBarChart/></Col>
  </Row>
  <Row>
    <Col className={styles.col2}><PieChart/></Col>
    <Col className={styles.col3}><BarChart/></Col>
  </Row>
</Container>
    <HorizontalBarChart/>
    <PieChart/>
    <BarChart/>
    <Row>
    <Col><TableData/></Col>
  </Row>
  <Row>

  </Row>
    </>
  )
}

export default Dashboard