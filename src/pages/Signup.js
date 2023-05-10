import React, { useState } from 'react'
import Helmet from '../components/Helmet';
import { Col, Container, Form, FormGroup, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import './login.css'

const Signup = () => {
  const[username,setusername ]=useState('')
  const[email,setEmail ]=useState('') 
  const[passport,setpassport]=useState('')
  const[file,setfile]=useState('')
  


  return (
    <Helmet title='SignUp'>
      <section>
        <Container>
          <Row>
            <Col lg='6' className='m-auto text-center'>
              <h3 className='fw-bold mt-4'>SignUp</h3>
              <Form className='auth_form'>
              <FormGroup className='form_group'>
                  <input type='text'placeholder='UserName' 
                  value={username} onChange={e=>setusername(e.target.value)}></input>
                </FormGroup>
                <FormGroup className='form_group'>
                  <input type='email'placeholder='Email' 
                  value={email} onChange={e=>setEmail(e.target.value)}></input>
                </FormGroup>
                <FormGroup className='form_group'>
                  <input type='passport'placeholder='Enter Your passport'
                  value={passport} onChange={e=>setpassport(e.target.value)}></input>
                </FormGroup>
                <FormGroup className='form_group'>
                  <input type='file'placeholder=''
                  value={file} onChange={e=>setfile(e.target.value)}></input>
                </FormGroup>
                <button className='buy_btn auth_btn' type='submit'>Signup</button>
               
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Signup;