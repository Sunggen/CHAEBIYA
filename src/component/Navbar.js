import React from 'react'
import {Container} from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom'




const Navbar = () => {
    // const menuList = ['1. 상품 소개', '2. 채비야 상품보기', '3. 조합 요청', '4. 구매 요청']

    // const navigate = useNavigate()

    // const goToPage = (event) => {

    //   console.log(event)
    // }

  return (
    <div>
      <Container>
        <div className="nav-area">
         <img src={process.env.PUBLIC_URL + 'img/chaebiya.jpg'} width={1300}/>
        </div>
        <div className="nav-area">
            <Link className="nav-menu" to={'/'}> 1. 상품 소개 </Link>
            <Link className="nav-menu" to={'/Product'}> 2. 채비야 상품보기 </Link>
            <Link className="nav-menu" to={'/Request'}> 3. 조합 요청 </Link>
            <Link className="nav-menu" to={'/Buy'}> 4. 구매 요청 </Link>
        </div>
        </Container>

    </div>
  )
}

export default Navbar
