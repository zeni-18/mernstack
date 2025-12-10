import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {products} from "../utils/api"

export default function Product({ setcart }) {
  const {id} = useParams();
  const navigate = useNavigate();
  const p = products.find((item)=>item.id===parseInt(id, 10));

  if(!p) return <div>Product not found</div>

  const handleBuyNow = () => {
    if (setcart) {
      const item = {
        id: p.id,
        name: p.name,
        price: p.price,
        image: p.image
      };
      setcart(prevCart => [...prevCart, item]);
    }
    navigate('/cart');
  };

  return (
    <div>
      <h2>Product</h2>
      <br></br>
      <img src={p.image} alt={p.name} width={400} height={400}/>
      <br></br>
      <p>{p.name}</p>
      <p>${p.price}</p>
      <p>{p.description}</p>
      <button onClick={handleBuyNow}>Buy Now</button>
    </div>
  )
}
