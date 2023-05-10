import React, { useState } from 'react'
import CommonSection from '../components/UI/CommonSection';
import Helmet from '../components/Helmet';
import { Col, Container, Row } from 'reactstrap';
import '../pages/shop.css'
import products from '../assets/products';
import ProductList from '../components/UI/ProductList'
const Shop = () => {
  // chức năng tìm kiếm theo tìm kiếm theo phân loại 
  const [productsData,setProductsData] =useState(products)
  const handleFilter =(e)=>{
    // Lọc sách thuộc thể loại Văn Học Và tiểu thuyết
    const filtervalue = e.target.value
    if(filtervalue=='Văn Học Và Tiểu Thuyết'){
      const filteredProducts = products.filter((item)=>item.category=='Văn Học Và Tiểu Thuyết')
      setProductsData(filteredProducts)
    }
    if(filtervalue=='Ngoại Ngữ'){
      const filteredProducts = products.filter((item)=>item.category=='Ngoại Ngữ')
      setProductsData(filteredProducts)
    }
    if(filtervalue=='Tâm Lý-Kỹ Năng sống'){
      const filteredProducts = products.filter((item)=>item.category=='Tâm Lý-Kỹ Năng Sống')
      setProductsData(filteredProducts)
    }
    if(filtervalue=='Tiểu Thuyết'){
      const filteredProducts = products.filter((item)=>item.category=='Tiểu Thuyết')
      setProductsData(filteredProducts)
    }

  }
  // tìm kiếm từ khóa trong thanh search
  const handleSearch =e=>{
    const searchvalue = e.target.value
    const searchProducts = products.filter((item)=>item.productName.toLowerCase().includes(searchvalue.toLowerCase()))
      setProductsData(searchProducts)
  }
  return (
    <Helmet title='Shop'>
      <CommonSection title='Products'/>

      <section>
        <Container>
          <Row>
            <Col lg='3' md='3'>
              <div className='filter_widget'>
                <select onChange={handleFilter}>
                  <option>Filter By category</option>
                  <option value='Văn Học Và Tiểu Thuyết'>Văn Học Và Tiểu Thuyểt</option>
                  <option value='Ngoại Ngữ'>Ngoại Ngữ</option>
                  <option value='Tâm Lý-Kỹ Năng sống'>Tâm Lý - Kỹ Năng Sống</option>
                  <option value='Tiểu Thuyết'> Tiểu Thuyểt</option>
                </select>
              </div>
            </Col>
            <Col lg='3' md='3'>
            <div className='filter_widget'>
                <select>
                  <option>Sort By</option>
                  <option value='Ascending'>Tăng dần</option>
                  <option value='descending'>Giảm dần</option>
                </select>
              </div>
            </Col>
            <Col lg='6' md='6'>
              <div className='search_box'>
                <input type='text' placeholder='Search...........' onChange={handleSearch}/>
                <span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width='20px' height='20px'><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            {
              productsData.length ===0? (<h1 className='text-center fs-4'>Không có sản phẩm nào </h1>) : (<ProductList data={productsData}/>)
            }
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Shop;