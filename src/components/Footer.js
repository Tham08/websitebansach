import React from 'react'
import './footer.css'
import logo from '../img/images.png';
import { Col, Container, Row,ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg='4' className='mb-4' md='4'>
            <div className='logo'>
              <div>
                <h1 className='text-white'>H2T Company</h1>
              </div>
              </div>
              <p className='footer_text mt-4'>
                H2T Company - Công ty chuyên bán sách tốt nhất Việt Nam. 
                Công Ty sẽ Luôn Đồng hành với khách hàng và phục vụ khách hàng tốt nhất .
              </p>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
          </Col>
          <Col lg='3' md='3'>
            <div className='footer_quick-links'>
              <h4 className='quick_links-title'>Top Categories</h4>
              <ListGroup className='mb-3'>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Văn Học Và Tiểu Thuyết</Link>
                </ListGroupItem>
                <ListGroupItem  className='ps-0 border-0'>
                  <Link to='#'> Tiểu Thuyết</Link>
                </ListGroupItem>
                <ListGroupItem  className='ps-0 border-0'>
                  <Link to='#'>Tâm Lý-Kỹ Năng Sống</Link>
                </ListGroupItem>
                <ListGroupItem  className='ps-0 border-0'>
                  <Link to='#'>Ngoại Ngữ</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg='2' className='mb-4' md='4' >
          <div className='footer_quick-links'>
              <h4 className='quick_links-title'>Userful link</h4>
              <ListGroup className='mb-3'>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/shop'>Shop</Link>
                </ListGroupItem>
                <ListGroupItem  className='ps-0 border-0'>
                  <Link to='/cart'> Cart</Link>
                </ListGroupItem>
                <ListGroupItem  className='ps-0 border-0'>
                  <Link to='/login'>Login</Link>
                </ListGroupItem>
                <ListGroupItem  className='ps-0 border-0'>
                  <Link to='#'>Privacy Policy</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg='3'>
          <div className='footer_quick-links'>
              <h4 className='quick_links-title'>Contact</h4>
              <ListGroup className='footer_contact'>
                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                 <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width='10px' height='10px'><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
                  <p>+0265656562232</p>
                 </span>
                </ListGroupItem>
                <ListGroupItem  className='ps-0 border-0 d-flex align-items-center gap-2'>
                 <span>
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"width='10px' height='10px'><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
                 <p>Email:abc@gmail.com</p>
                 </span>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg='12'>
            <p className='footer_copyright'>
              Copyright developed by H2T company . All Rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer;