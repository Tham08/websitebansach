import React from 'react'

import  '../UI/productscard.css'
import { Col } from 'reactstrap'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Product from '../../assets/products'
import {useDispatch} from 'react-redux'
import { cartActions } from '../../app/slices/cartslice'
import {  toast } from 'react-toastify';
const ProductsCard = ({item}) => {
  const dispatch = useDispatch();
  const addtoCart =()=>{
    dispatch(cartActions.addItem(
      {
        id:item.id,
        productName:item.productName,
        price:item.price,
        image:item.imgUrl
      }
    ))
   toast.success('Thêm Giỏ hàng thành công');
  }
  return (
    <Col lg='3' md='4'>
    <div className='product_item'>
        <div className='product_img '>
        <motion.img whileHover={{scale:1.1}} src={item.imgUrl} width='200px' height='300px'  alt=''></motion.img>
        </div>
        <div className='p-2 product__info' >
        <h3 className='product_name ' ><Link to = {'/shop/' + item.id}>{item.productName}</Link></h3>
        <span  >{item.category}  </span>
        </div>
        <div className='product_card_bottom d-flex aligin-item-center justify-content-between p-2'>
            <span className='price'>{item.price} VND</span>
            <motion.span whileHover={{scale:1.1}} onClick={addtoCart} ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width='20px' height='20px'>
                <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/>
                </svg>
            </motion.span>
      
        </div>
    </div>
    </Col>
  )
}

export default ProductsCard