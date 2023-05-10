import React from 'react'
import Helmet from '../components/Helmet'
import CommonSection from '../components/UI/CommonSection'
import { Container, FormGroup,Row,Col,Form } from 'reactstrap'
import '../pages/checkout.css'
import { useSelector } from 'react-redux'

const Checkout = () => {
  const totalQty=useSelector(state=>state.cart.totalQuantity)
  const totalAmount=useSelector(state=>state.cart.totalAmount)


  return (
    <Helmet title='CheckOut'>
      <CommonSection title='CheckOut'/>
      <section>
        <Container>
          <Row>
            <Col lg='8'>
              <h6 className='mb-4 fw-bold'>Billing Information</h6>
              <Form className='billing_information'>
                <FormGroup className='form_group'>
                  <input type='text' placeholder='Enter Your Name'/>
                </FormGroup>
                <FormGroup className='form_group'>
                  <input type='email' placeholder='Enter Your Email'/>
                </FormGroup>
                <FormGroup className='form_group'>
                  <input type='number' placeholder=' Phone Number'/>
                </FormGroup>
                <FormGroup className='form_group'>
                  <input type='text' placeholder='Địa chỉ'/>
                </FormGroup>
                <FormGroup className='form_group'>
                  <input type='text' placeholder='Thành Phố'/>
                </FormGroup>
              </Form>
            </Col>
            <Col lg='4'>
              <div className='checkout_cart'>
                <h6>Total Qty: <span>{totalQty}</span></h6>
                <h6>Subtotal: <span>{totalAmount} VND</span></h6>
                <h6>Shipping: <span>0 VND</span></h6>
                <h4>Total Cost: <span>{totalAmount}</span></h4>
                <button className='buy_btn auth_btn w-100'>Order</button>
              </div>
              
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Checkout;