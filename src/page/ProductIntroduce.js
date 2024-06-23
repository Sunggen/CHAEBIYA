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
              <img alt="" className="Carousel-detail" width={800} src="https://cafeptthumb-phinf.pstatic.net/MjAyNDA2MTFfMjMx/MDAxNzE4MDcxMjM2NDY4.i4df7Gm5Psq1T_u4QLphv7DUSelncAJKhwAlMx61wQsg.EfozhrzOVirWBcdBSlENIQwYkzMDLEK5z7qPaqKz4RMg.JPEG/1000063874.jpg?type=w1600" />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img alt="" className="Carousel-detail" width={800} src="https://cafeptthumb-phinf.pstatic.net/MjAyNDA2MTFfNjMg/MDAxNzE4MDcxMjc1NjMx.nTGq8tmi2qi6XfFVFlluZUHLyYMj_JKtoVHMdhGTHvQg.b9Y5kDTYQxjrX8ZmqAQKCqTxMTQQJ6H43p_rowGNdqMg.JPEG/1000063718.jpg?type=w1600" />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img alt="" className="Carousel-detail" width={800} src="https://cafeptthumb-phinf.pstatic.net/MjAyNDAzMTRfMjMg/MDAxNzEwMzk1ODgyNDIz.DeFdqQHl-1s2qHItm-MDbEAazexj_bhT0nK6mBMu3DMg._togy0JeczvJ4S-rItRUaZZbmtBtLmhIBsEIU2S_Of4g.JPEG/1000053741.jpg?type=w1600" />
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
