import React, { useState } from 'react'
import Helmet from '../components/Helmet';
import { Col, Container, Form, FormGroup, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import './login.css'

const Login = () => {
  const[email,setEmail ]=useState('')
  const[passport,setpassport]=useState('')
  


  return (
    <Helmet title='login'>
      <section>
        <Container>
          <Row>
            <Col lg='6' className='m-auto text-center'>
              <h3 className='fw-bold mt-4'>Login</h3>
              <Form className='auth_form'>
                <FormGroup className='form_group'>
                  <input type='email'placeholder='Enter Your UserName' 
                  value={email} onChange={e=>setEmail(e.target.value)}></input>
                </FormGroup>
                <FormGroup className='form_group'>
                  <input type='passport'placeholder='Enter Your passport'
                  value={passport} onChange={e=>setpassport(e.target.value)}></input>
                </FormGroup>
                <button className='buy_btn auth_btn' type='submit'>Login</button>
                <p><Link to='/signup'> Create an Account?</Link></p>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Login;