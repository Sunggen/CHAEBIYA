import React from 'react'
import {Container} from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom'

const Navbar = () => {
    const menuList = ['1. 상품 소개', '2. 채비야 상품보기', '3. 조합 요청', '4. 구매 요청']

    const navigate = useNavigate()

    const goToPage = (event) => {

      console.log(event)
    }

  return (
    <div>
      <Container>
        <div className="nav-area">
         <img alt="" width={1300} src="https://cafeptthumb-phinf.pstatic.net/MjAyNDA2MDZfNyAg/MDAxNzE3NjUyOTI2NjQw.5Z0LXjCm3e0lfsbiIwdrtdhXDVyNCnakUauboXgaKYcg.c3FT5pKQ-Ag-BsYWUx3rpxRuauVeufUiIIi4ZulQ770g.JPEG/%ED%83%80%EC%9D%B4%ED%8B%80.jpg"/> 
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
