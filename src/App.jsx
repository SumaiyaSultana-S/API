import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import axios from 'axios';
import { TbCurrencyTaka } from "react-icons/tb";
import { Container, Row ,Col} from 'react-bootstrap';
import { FaStarHalfAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";

function App() {
  let [count, setCount] = useState(false)
  let [product, setProduct] = useState([])
  let getData = ()=>{
    axios.get("https://dummyjson.com/products")
    .then ((response)=>{
      setProduct(response.data.products);
       
    })
  }
  console.log(product);

  useEffect(()=>{
    getData()
 
  })
  // let handleShow = () => {
  //   setCount(!count)
    
  // }
  return (
    <>
      <Container>
        <Row>
          
          {product.map((item)=>(
            <Col lg={3}>
              <div className="amiase">
                <img src={item.thumbnail} alt="thumbnail" />
            
               <div className="aminai">
                
               <h1>{item.title}</h1>
               {/* <h3 onClick={handleShow}><IoIosArrowDown /></h3>
               {count && (
                  <h2>{item.description}</h2>
               )} */}
               <h4><TbCurrencyTaka />{item.price} </h4>
               <h5>{item.discountPercentage}%off</h5>
                 <p>{item.stock} Stock | <span>
                 {item.rating} <h2><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /></h2>
                  </span></p>
               
               </div>
              </div>
            </Col>
          ))}
          
        </Row>
      </Container>
    </>
  )
}

export default App
