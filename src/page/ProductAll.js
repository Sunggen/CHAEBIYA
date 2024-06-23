import React from 'react'
import {useEffect, useState} from 'react';
import ProductCard from '../component/ProductCard'
import {Container, Row, Col} from "react-bootstrap"

const ProductAll = () => {

    const [productList, setProductList] = useState([]);
    const getProducts = async () =>{
        let url = `https://my-json-server.typicode.com/Sunggen/CHAEBIYA/products`;
        let response = await fetch(url);
        let data = await response.json();
        console.log("data:",data)
        setProductList(data);
    }

    useEffect(()=>{
        getProducts()
    },[])
  return (
    <div>
        <Container>
          <Row>
                {productList.map((menu)=>(
                    <Col lg={3}><ProductCard item={menu}/></Col>
                    ))}
            </Row>
        </Container>
    </div>
  )
}

export default ProductAll
