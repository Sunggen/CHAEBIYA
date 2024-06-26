import React from 'react'

const ProductCard = () => {
  const assembleList = ['ass1','ass2','ass3'];
  return (
    <span>
      {assembleList.map((item)=>(
      <div className="card">
      <img alt="태클박스 이미지" height={300} src={process.env.PUBLIC_URL + `img/assemble/${item}.jpg`}/>
    </div>
  ))}
  </span>
  )
}

export default ProductCard



