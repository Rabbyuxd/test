import React from 'react'
import styles from './Profile.module.css'
import { Container,Row,Col,Card, ListGroup,ListGroupItem} from 'react-bootstrap'

const Profile = () => {
  return (
    <>
    <Container fluid>
    <Row >
    <Col className={styles.header} xs={12}>header</Col>
    </Row>
    
    <Row offset={3}>
    <Col className={styles.leftSideBar} xs={2} >leftSideBar</Col>
    <Col className={styles.body} xs={8}>
        <Row>
            <Col className={styles.bodyHeader} xs={12}>User Profile Info</Col>
            </Row>
        <Row>
            <Col className={styles.bodyLeftSide}xs={6}>
            <Card style={{ width: '100%' }}>
  <Card.Body>
    <Card.Title className={styles.cardHeader}>User Information</Card.Title>
  </Card.Body> 
  <ListGroup className={styles.listGroupLeft}>
    <ListGroupItem><b>User Name:</b> Kamal</ListGroupItem>
    <ListGroupItem><b>Full Name:</b> Kamal Khan</ListGroupItem>
    <ListGroupItem><b>Email:</b> kamal@gamil.com</ListGroupItem>
    <ListGroupItem><b>Company Name:</b> Ultra-X BD</ListGroupItem>
    <ListGroupItem><b>Department Name:</b> AR/VR department</ListGroupItem>
    <ListGroupItem><b>Role:</b> User</ListGroupItem>
  </ListGroup>
</Card>
            </Col>
            <Col className={styles.bodyRightSide} xs={6}>
            <Card style={{ width: '100%' }}>
  <Card.Body>
    <Card.Title className={styles.cardHeader}>Project List</Card.Title>
  </Card.Body> 
  <ListGroup className={styles.listGroupLeft}>
    <ListGroupItem><b>Project #1</b></ListGroupItem>
    <ListGroupItem><b>Project Name:</b> ETTMS</ListGroupItem>
    <ListGroupItem><b>Company Name:</b> Ultra-X BD</ListGroupItem>
    <ListGroupItem><b>Department Name:</b> AR/VR department</ListGroupItem>
    <ListGroupItem><b>Issue:</b> Need to earase data</ListGroupItem>
    <ListGroupItem><b>Status:</b> Active</ListGroupItem>
  </ListGroup>
  <ListGroup className={styles.listGroupLeft}>
    <ListGroupItem><b>Project #2</b></ListGroupItem>
    <ListGroupItem><b>Project Name:</b> Hisen Server</ListGroupItem>
    <ListGroupItem><b>Company Name:</b> Ultra-X BD</ListGroupItem>
    <ListGroupItem><b>Department Name:</b> AR/VR department</ListGroupItem>
    <ListGroupItem><b>Issue:</b> Need to earase data</ListGroupItem>
    <ListGroupItem><b>Status:</b> Active</ListGroupItem>
  </ListGroup>
</Card>
            </Col>
        </Row>

    </Col>
    <Col className={styles.rightSideBar} xs={2}>
        {/* <h4>rightSideBar</h4> */}
        <div className={styles.tab}>
         <button >Update User Info</button>
         <button >Update Email </button>
         <button >Update Password</button>
         <button >Active Project</button>
        </div>
        </Col>
    
    </Row>
  <Row>
    <Col className={styles.below} xs={12}>under</Col>
  </Row>
  </Container>

    </>
  )
}

export default Profile;