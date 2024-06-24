import React from 'react'
import {useNavigate } from "react-router-dom"

const ProductCard = ({item}) => {
  const navigate = useNavigate()

  const showDetail = () =>{
    navigate(`/Product/${item.id}`)
  }

  return (
    <div className="card" onClick={showDetail}>
      <img alt="태클박스 이미지" height={300} src={item?.img}/>
      <div>태클박스</div>
      <div>39,000원</div>
    </div>
  )
}

export default ProductCard
