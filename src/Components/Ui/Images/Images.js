import React, { useState } from 'react'
import { Col, Row } from 'reactstrap'

const Images = ({ imgs = [{ url: ""}]}) => {
    const [mainImage, setMainImage] = useState(imgs[0]);
    
  return (
    <Row>
       <Col className="flex">
       <div className="grid flex-row justify-center items-center w-auto gap-y-8 template-row">
        {imgs.map((curElm, index) => {
          return (
            <figure>
              <img
                src={curElm.url}
                alt={curElm.filename}
                className="w-60 h-40 cursor-pointer"
                key={index}
                onClick={() => setMainImage(curElm)}
              />
            </figure>
          );
        })}
      </div>
      {/* 2nd column  */}

      <div className="grid place-items-center order-1">
        <img
        className="w-96 h-auto ml-4" 
        src={mainImage.url} alt={mainImage.filename} />
      </div>
       </Col>
    </Row>
  )
}

export default Images