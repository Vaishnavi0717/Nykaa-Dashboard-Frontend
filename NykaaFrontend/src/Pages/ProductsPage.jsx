import React from 'react'
import Productdata from './Productdata'
import FilterData from './FilterData'

const ProductsPage = () => {
  return (
    <div style={{border:"1px soild red", width:"90%"}}>
      <div></div>
      <div><FilterData/></div>
      <div><Productdata/></div>
    </div>
  )
}

export default ProductsPage