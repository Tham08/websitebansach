import React,{useRef,useEffect} from 'react'
import './header.css';
import logo from '../img/images.png';
import usericon from '../img/usericon(1).jpg';
import { NavLink,useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Col, Container, Row } from 'reactstrap';
import {useSelector} from 'react-redux'
const nav_link = [
  {
    path:'home',
    display:'Home'
  },
  {
    path:'shop',
    display:'Shop'
  },
  {
    path:'cart',
    display:'Cart'
  },
]
function Header() {
    const headerRef = useRef(null)
    // chọn sản phẩm để thêm vào giỏ hàng
    const totalQuantity = useSelector(state=>state.cart.totalQuantity )
   const navigate=useNavigate()
    const navigateToCart =()=>{navigate('/cart')}


    const stickyHeaderFunc =()=>{
      window.addEventListener('scroll',()=>{
        if(document.body.scrollTop>80 ||document.documentElement.scrollTop>80){
          headerRef.current.classList.add('sticky_header')
        } else{
          headerRef.current.classList.remove('sticky_header')
        }
      })
    }
    useEffect(()=>{
      stickyHeaderFunc()
      return ()=>window.removeEventListener('scroll',stickyHeaderFunc)
    });
  return (
    <>
      <header className='header' ref={headerRef}>
      <Container>
        <Row>
        <div className='col-6 col-sm-4'>
          <div className='nav-wrapper'>
          <div className='logo'>
            <img width='80px' height='40px'src={logo} alt="logo"/>
            <div>
              <h1 >H2T Company</h1>
  
            </div>
          </div>
          </div>
        </div>
          <div className='col-3 col-sm-3'>
          <div className='navigation'>
            <ul className='menu'>
              {
                nav_link.map((item,index) =>(
                  <li className='nav_item' key={index}>
                    <NavLink to ={item.path} className={(navClass)=>navClass.isActive ? 'nav_active':'' }>{item.display}</NavLink>
                  </li>
                ))
              }
            </ul>
          </div>
          </div>
          <Col>
          <div className='nav_icons'>
            <span className='cart___icon' onClick={navigateToCart}>
              <svg width='20px' height='20px' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
              <span className='bagde'>{totalQuantity}</span>
            </span>
            
            <span><motion.img whileTap={{scale:1.5}} src={usericon} width='30px'height='30px' alt=""/></span>
            < div className='mobile-menu'>
              <span>
                <svg width='20px' height='20px' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
              </span>
            
          </div>
          </div>
          
          </Col>
         
        </Row>
       </Container>
       </header></>
  )
}

export default Header;