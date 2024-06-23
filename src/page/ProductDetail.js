import React from 'react'
import {useEffect, useState } from 'react'
import {useParams} from 'react-router-dom' 
import { Container, Row, Col } from 'react-bootstrap'

const ProductDetail = () => {
  let {id} = useParams()
  const [product, setProduct] = useState(null)
  const getProductDetail = async () =>{
    let url= `https://my-json-server.typicode.com/Sunggen/CHAEBIYA/products/${id}`;
    let response = await fetch(url)
    let data = await response.json()
    setProduct(data);
    console.log(product)
  }

  useEffect(()=>{
    getProductDetail()
  },[])

  return (
    <Container>
      <Row>
        <Col className="detail-card">
          <img width={300} src={product?.img}/>
        </Col>
        <Col className="detail-color">
          <div>
            {product?.title}
          </div>
          <div>
            뚜껑 : {product?.뚜껑}
          </div>
          <div>
            박스 : {product?.박스}
          </div>
          <div>
            손잡이 : {product?.손잡이}  
          </div>
          <div>
            날개 : {product?.날개}
          </div>
          </Col>
      </Row>
    </Container>
  )
}

export default ProductDetail
