import React from 'react'
import {useEffect, useState} from 'react';
import ProductCard from '../component/ProductCard'
import {Container, Row, Col} from "react-bootstrap"

const ProductAll = () => {

  const assembleList = ['ass1','ass2','ass3','ass4','ass5','ass6'];

    // const [productList, setProductList] = useState([]);
    // const getProducts = async () =>{
    //     let url = `https://my-json-server.typicode.com/Sunggen/CHAEBIYA/products`;
    //     let response = await fetch(url);
    //     let data = await response.json();
    //     console.log("data:",data)
    //     setProductList(data);
    // }

    // useEffect(()=>{
    //     getProducts()
    // },[])
  return (
    <div>
        <Container>
          <Row>
            {assembleList.map((item)=>(
                <Col lg={2}>
                  <div className="card">
                  <img alt="태클박스 이미지" height={300} src={process.env.PUBLIC_URL + `img/assemble/${item}.jpg`}/>
                  </div>
                </Col>
                 ))}
            </Row>
        </Container>
    </div>
  )
}

export default ProductAll
