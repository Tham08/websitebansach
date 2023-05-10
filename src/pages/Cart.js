import React from 'react'
import './cart.css'
import Helmet from '../components/Helmet'
import CommonSection from '../components/UI/CommonSection'
import { Col, Container, Row } from 'reactstrap'
import { motion } from 'framer-motion'
import { cartActions } from '../app/slices/cartslice'
import { useSelector,useDispatch } from 'react-redux'
import '../app/slices/cartslice'
import { Link } from 'react-router-dom'

const Cart = () => {
  //hiển thị sản phẩm trong giỏ
  const cartItem =useSelector(state=>state.cart.cartItem)
  const totalQty=useSelector(state=>state.cart.totalQuantity)
  const totalAmount=useSelector(state=>state.cart.totalAmount)
  return (
    <Helmet title={'Cart'}>
      <CommonSection title={'Shopping Cart'}/>
      <section>
        <Container>
          <Row>
            <Col lg='9'>
              {
                cartItem.length===0? (<h2 className='fs-4 text-center'>Không có hàng trong giỏ hàng</h2>):(
              
              <table className='table bordered'>
                <tbody>
                  <tr>
                  <th>Image</th>
                  <th>ProductName</th>
                  <th>Price</th>
                  <th>Qty</th>
                  <th>Delete</th>
                  </tr>
                </tbody>
                <tbody>
                  {
                    cartItem.map((item,index)=>(
                      <Tr item={item} key={index}/>
                  ))}
                </tbody>
              </table>
              
              )}
            </Col>
            <Col lg='3'>
            <div className='checkout_cart'>
                <h6>Total Qty: <span>{totalQty}</span></h6>
                <h6>Subtotal: <span>{totalAmount} VND</span></h6>
                <h4>Total Cost: <span>0</span></h4>
                <button className='buy_btn w-100 '><Link to='/checkout'>CheckOut</Link></button>
                <button className='buy_btn w-100'><Link to='/shop'>Continute</Link></button>
              </div>
            </Col>
          </Row>
        </Container>
        </section>
    </Helmet>
   
  );
  
};
const Tr=({item})=>{
  const dispatch=useDispatch()
  const deleteProduct =()=>{
    dispatch(cartActions.deleteItem(item.id))
  }
  return <tr >
  <td>
    <img src={item.imgUrl} alt='' width= '70px' height='120px'/>
    </td>
  <td>{item.productName}</td>
  <td>{item.price} VND</td>
  <td>{item.quantity}</td>
  <td><motion.svg whileTap={{scale:1.2}} onClick={deleteProduct} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width='20px' height='20px'><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></motion.svg></td>
</tr>
}

export default Cart;