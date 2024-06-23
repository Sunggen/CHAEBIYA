import React from 'react'
import {useEffect} from 'react'
import Carousel from 'react-bootstrap/Carousel';
import {Container} from 'react-bootstrap'




const ProductIntroduce = () => {


  return (
    <div>
        <Container>
                  <Carousel fade>
            <Carousel.Item>
              <img alt="" className="Carousel-detail" width={800} src={process.env.PUBLIC_URL + 'img/carousel1.jpg'} />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img alt="" className="Carousel-detail" width={800} src={process.env.PUBLIC_URL + 'img/carousel2.jpg'} />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img alt="" className="Carousel-detail" width={800} src={process.env.PUBLIC_URL + 'img/carousel3.jpg'} />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
    </Container>
    </div>
  )
}

export default ProductIntroduce
