import React from 'react'
import {Container, Button} from 'react-bootstrap'

const ProductPart = () => {
  const handGripList = ['handgrip1','handgrip2','handgrip3','handgrip4','handgrip5','handgrip6','handgrip7','handgrip8','handgrip9']
  const capList = ['cap1','cap2','cap3','cap4','cap5','cap6','cap7','cap8','cap9','cap10','cap11']
  return (
    <Container>
       <div className="part-name">
       <Button variant="secondary">손잡이</Button>{' '}
       </div>
       <div>
        {handGripList.map((item)=>(
          <img src={process.env.PUBLIC_URL + `img/handgrip/${item}.jpg`} width={150}/>
        ))}
        </div>

        <div className="part-name">
       <Button variant="secondary">뚜껑</Button>{' '}
       </div>
       <div>
        {capList.map((item)=>(
          <img src={process.env.PUBLIC_URL + `img/cap/${item}.jpg`} width={150}/>
        ))}
        </div>

    </Container>
  )
}

export default ProductPart
