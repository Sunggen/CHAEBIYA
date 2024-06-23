import React from 'react'
import {useNavigate } from "react-router-dom"

const ProductCard = ({item}) => {
  const navigate = useNavigate()

  const showDetail = () =>{
    navigate(`/Product/${item.id}`)
  }

  return (
    <div className="card" onClick={showDetail}>
      <img alt="" height={300} src={item?.img}/>
      <div>태클박스</div>
      <div>39,000원</div>
    </div>
  )
}

export default ProductCard
