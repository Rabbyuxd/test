import React from 'react'
import styles from './UserRegistration.module.css'
import { Container,Row,Col } from 'react-bootstrap'
import { BsPerson, BsFillEnvelopeFill, BsFillLockFill} from "react-icons/bs";


const UserRegistration = () => {
  return (
    <>
    <Container fluid>
    <Row >
    <Col className={styles.header} xs={12}>header</Col>
    </Row>
    
    <Row offset={3}>
    <Col className={styles.leftSideBar} xs={2} >leftSideBar </Col>
    <Col className={styles.body} xs={8}>
        Registration page for user
    <form className={styles.formStyle}>
  <h2 className={styles.reg}>Registration Form</h2>
  <div className={styles.inputContainer}>
    <i className={styles.icon}><BsPerson/></i>
    
    <input className={styles.inputField} type="text" placeholder="Username" name="uname"></input>
  </div>
  <div className={styles.inputContainer}>
    <i className={styles.icon}><BsPerson/></i>
    
    <input className={styles.inputField} type="text" placeholder="Fullname" name="fname"></input>
  </div>

  <div className={styles.inputContainer}>
    <i className={styles.icon}><BsFillEnvelopeFill/></i>
    <input className={styles.inputField} type="text" placeholder="Email" name="email"></input>
  </div>
  
  <div className={styles.inputContainer}>
    <i className={styles.icon}><BsFillLockFill/></i>
    <input className={styles.inputField} type="password" placeholder="Password" name="psw"></input>
  </div>
  <div className={styles.inputContainer}>
    <i className={styles.icon}><BsFillLockFill/></i>
    <input className={styles.inputField} type="password" placeholder="Confirm Password" name="psw"></input>
  </div>
  
  <input className={styles.loginCheckBox} type="checkbox" id="vehicle1" name="vehicle1"></input>
  <label className={styles.loginCheckBox1} for="vehicle1">Check me out</label>
  

  <button type="submit" className={styles.btn}>Register</button>
  
  <h5 className={styles.underLogin}>If you have an account please <a href="#">Login</a></h5>
  {/* <p>If you have an account please <a href="#">Login</a></p> */}
</form>
    </Col>
    <Col className={styles.rightSideBar} xs={2}>rightSideBar</Col>
    </Row>
  <Row>
    <Col className={styles.below} xs={12}>under</Col>
  </Row>
  </Container>
    </>
  )
}

export default UserRegistration