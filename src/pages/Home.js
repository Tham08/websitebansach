import React ,{useEffect,useState}from 'react'
import Helmet from '../components/Helmet';
import img999 from '../img/book/999lathu.jpg';
import '../pages/home.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Services from '../Services/Services';
import { Col, Container, Row } from 'reactstrap';
import ProductList from '../components/UI/ProductList'
import Product from '../../src/assets/products'
import imgcouter from '../img/book/toikhongodon.jpg'
import Clock from '../components/UI/Clock';
const Home = () => {
  const [trendingproducts,settrendingproducts]=useState([]) 
  const [bestsaleproducts,setbestsale]=useState([]) 
  const [newarrivalproducts,setnewarrival]=useState([]) 
  const year = new Date().getFullYear
  useEffect(()=>{
    const filteredtrendingProducts = Product.filter(item=> item.category ==='Tiểu Thuyết');
    const filteredbestProducts = Product.filter(item=> item.category ==='Ngoại Ngữ');
    const filterednewProducts = Product.filter(item=> item.category ==='New arrival');
    settrendingproducts(filteredtrendingProducts)
    setbestsale(filteredbestProducts)
    setnewarrival(filterednewProducts)
  },[]);
  return (
    <Helmet title={'Home'}>
      <section className='hero_section'>
        <Container>
          <Row>
            <Col lg='6' md='4'>
            
           
              <div className='hero_content'>
                <p className='hero_subtitle'>Trending product in 2023</p>
                <h2>There is nothing better than to read</h2>
                <p>rfgfbfhtggggggggg ggggggggg gggggggggggggggggg ggggggggggggggggggg gggggggggg ggggggggggg gggggggsefd</p>
                <motion.button  whileTap={{scale:1.5}} className='buy_btn'><Link to='/shop'>Shop Now</Link></motion.button>
                 
              </div>
              </Col>
            <Col lg='6' md='6'>
              <img src={img999} alt='' width='250px' height='350px'/>
            </Col>
           
          </Row>
        </Container>
      </section>
      
      <Services />
      <section className='trending_products'>
        <Container>
          <div className='row'>
            <div className='col-lg-12 col-md-6'>
                <div className='text-center'>
                  <h2 className='section_title'>Trending Products</h2>
                </div>
            </div>
            <ProductList data={trendingproducts}/>
          </div>
          </Container>
      </section>
      <section className='best_sale'>
        <Container>
          <div className='row'>
            <div className='col-lg-12 col-md-6'>
                <div className='text-center'>
                  <h2 className='section_title'>Best Sales</h2>
                </div>
            </div>
            <ProductList data={bestsaleproducts}/>
          </div>
          </Container>
      </section>
      <section className='timer_count'>
        <Container>
          <Row>
            <Col lg='6' md='12' className='count_down_col'>
                <div className='clock_top-content'>
                  <h4 className='text-white fs-7'>Limited Offers</h4>
                  <h3 className='text-white fs-7'>Quanlity Book</h3>
                </div>
                <Clock/>
                <motion.button whileTap={{scale:1.2}} className='buy_btn store_btn'><Link to='/shop'>Visit Shop</Link></motion.button>
            </Col>
            <Col lg='6' md='6'className='text-end counterimg'>
              <img src={imgcouter} alt='' ></img>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
      <Container>
        <Row>
          <Col lg='12' className='text-center'>
              <h2 className='section_title'>New Arrivals</h2>
          </Col>
          <ProductList data={newarrivalproducts}/>
        </Row>
      </Container>
      </section>
    </Helmet>
  )
}

export default Home;