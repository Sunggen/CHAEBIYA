import React from 'react'
import {Container} from 'react-bootstrap'

const WantBuy = () => {
  return (
    <Container>
    <div className="not-open">
      <div className="buy-card">    
        <h2>구매 문의</h2>
        <div>이동현(채비야 대표)</div><br/>
        <div>연락처 : 010-2521-9034</div>
      </div>
      <div className="buy-card">   
        <h2>구매 문의</h2>
        <div>한숙자(채비야 대표)</div><br/>
        <div>연락처 : 010-9957-6111</div>
      </div>
    </div>
    </Container>
  )
}

export default WantBuy
