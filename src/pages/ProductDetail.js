import React,{useState,useRef} from 'react'
import { useParams } from 'react-router-dom';
import products from '../assets/products';
import Helmet from '../components/Helmet';
import CommonSection from '../components/UI/CommonSection';
import { Col, Container, Row } from 'reactstrap';
import '../pages/productsdetail.css'
import { motion } from 'framer-motion';
import ProductList from '../components/UI/ProductList'
import { useDispatch } from 'react-redux';
import { cartActions } from '../app/slices/cartslice';
import { toast } from 'react-toastify';

const ProductDetail = () => {
  const{id} = useParams()
  const product = products.find(item=>item.id ==id)
  //tìm kiếm id để hiển thị thông tin sản phẩm
  const{imgUrl,productName,price,avgRating,reviews,description,shortDesc,category}=product;
  //lọc bình luận của sản phẩm 
  const [tab,settab] =useState('desc')
  //
  const reviewUser =useRef('')
  const reviewMsg =useRef('')
  const dispatch = useDispatch()
  // Lọc ra sách cùng loại
  const relatedproducts=products.filter(item=>item.category===category)
  //
  const submitHandler =(e)=>{
    e.preventDefault()
    const reviewUserName = reviewUser.current.value
    const reviewmsg = reviewMsg.current.value
    
    // lưu bình luận 
    const reviewobj ={
      userName: reviewUserName,
      text:reviewmsg
    }
    console.log(reviewobj)
    toast.success("Submitted Successfull")
  }

  const addToCart =()=>{
    dispatch(cartActions.addItem({
      id,
      image:imgUrl,
      productName,price,
    }))
    toast.success("Thêm Giỏ Hàng Thành Công")
  }
  return (
   <Helmet title={productName}>
    <CommonSection title={productName}/>

    <section className='pt-0'>
      <Container>
        <Row>
          <Col lg='6'>
            <img src={imgUrl} alt='' width='370px' height='500px'/>
          </Col>
          <Col lg='6'>
            <div className='products_detail'>
              <h2>{productName}</h2>
              <div className='products_rating'>
                <p><span>({avgRating} rating)</span></p>
              </div>
              <span className='product_price'>{price}</span>
              <p className='mt-3'>{shortDesc}</p>
              <motion.button whileTap={{scale : 1.2}} className='buy_btn' onClick={addToCart}>Add to cart</motion.button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <div className='tab_wrapper d-flex align-items-center gap-5'>
              <h6 className={'${tab==="desc" ? "active_tab" :""'} onClick={()=>settab('desc')}>Miêu Tả chi Tiết </h6>
              <h6 className={'${tab==="rev" ? "active_tab" :""'} onClick={()=>settab('rev')}>Reviews ({reviews.length})</h6>
            </div>
            {
              tab==='desc' ? <div className='tab_content mt-5'>
              <p>{description}</p>
            </div> : <div className='products_review'>
              <div className='review_wrapper'>
                <ul>
                  {
                    reviews.map((item,index)=>(<li key={index}>
                      <h6>Kiều Huế</h6>
                      <span>{item.rating}( Rating)</span>
                      <p>{item.text}</p>
                    </li>))
                  }
                </ul>
                <div className='review_form'>
                  <h4>Hãy để lại bình luận về trải nghiệm đọc sách!</h4>
                  <form action='' onSubmit={submitHandler}>
                    <div className='form_group'>
                      <input type='text' placeholder='Enter Name' ref={reviewUser} required/>
                    </div>
                    <div className='form_group'>
                      <textarea rows={4} placeholder='Reviews' ref={reviewMsg} required/>
                    </div>
                    <button type='submit' className='buy_btn'>Submit</button>
                  </form>
                </div>
                
              </div>
            </div>
            }
          </Col>
          <Col lg='12'>
            <h2 className='related_products'>Sản Phẩm có thể bạn sẽ thích </h2>
          </Col>
          <ProductList data={relatedproducts}/>
        </Row>
      </Container>
    </section>
   </Helmet>
  )
}

export default ProductDetail;