import React, {useEffect, useRef} from 'react'
import styles from './Login.module.css'
import {Form,Button,Group,Label} from 'react-bootstrap'
import lottie from "lottie-web";



function Login() {

  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: false,
      animationData: require("./office.json")
    });

    return () => {
      lottie.destroy();
    };
  }, []);

  return (
    <>
    
    {/* <div className={styles.background}>
     </div> */}
     <div className={styles.lottieAlign}>

     <div
        ref={container}
        onMouseEnter={() => lottie.play()}
        onMouseLeave={() => lottie.pause()}
      />

     </div>
    <Form className={styles.formStyle}>
      <h4>ETTMS Version 2.0</h4>
      <hr/>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label className={styles.formLabel}>Email address</Form.Label>
    <Form.Control className={styles.formControl} type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label className={styles.formLabel}>Password</Form.Label>
    <Form.Control className={styles.formControl} type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button className={styles.button} variant="primary" type="submit">
    Submit
  </Button>
</Form>
    </>
  )
}

export default Login