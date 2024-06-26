import React from 'react'
import {useEffect} from 'react'
import Carousel from 'react-bootstrap/Carousel';
import {Container} from 'react-bootstrap'




const ProductIntroduce = () => {


  return (
    <div>
       <Container>
        <img className="intro-img" alt="" src={process.env.PUBLIC_URL + 'img/carousel1.jpg'} />
    </Container>
    </div>
  )
}

export default ProductIntroduce
