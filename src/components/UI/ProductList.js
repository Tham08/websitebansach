
import React from 'react'
import ProductCard from '../UI/ProductsCard'
const ProductList = ({data}) => {
  return (
  <div>
    {
      data.map((item,index)=>(
        <ProductCard item={item} key={index}/>
      ))
    }
    
   
    </div>
  )
}

export default ProductList