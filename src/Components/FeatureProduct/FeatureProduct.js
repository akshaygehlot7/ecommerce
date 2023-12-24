import React from 'react'
import { Col, Row } from 'reactstrap'
import Product from '../Product/Product'
import { useProductContext } from '../../context/productcontex'

const FeatureProduct = () => {
  const {isLoading, featureProducts} = useProductContext();
  if (isLoading){
    return<div>.....Loading</div>
  }
  return (
    <Row>
      <Col>
        <div className="text-center mt-12 mb-12">
          <div className="text-2xl mb-3">Our Feature Products</div>
          <div className='flex justify-between mx-16'>
            {featureProducts.map((curElem)=>{
              return<Product key={curElem.id} {...curElem} />
            })}
          </div>
        </div>
      </Col>
    </Row>
  )
}

export default FeatureProduct