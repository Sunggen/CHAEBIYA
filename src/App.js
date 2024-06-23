import './App.css';
import {Routes, Route} from "react-router-dom"
import ProductIntroduce from "./page/ProductIntroduce"
import ProductAll from "./page/ProductAll"
import ProductDetail from "./page/ProductDetail"
import RequestMake from "./page/RequestMake"
import WantBuy from "./page/WantBuy"
import Navbar from "./component/Navbar"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
         <Route path="/" element={<ProductIntroduce/>}/>
         <Route path="/Product" element={<ProductAll/>}/>
         <Route path="/Product/:id" element={<ProductDetail/>}/>
         <Route path="/Request" element={<RequestMake/>}/>
         <Route path="/Buy" element={<WantBuy/>}/>
      </Routes>

    </div>
  );
}

export default App;
