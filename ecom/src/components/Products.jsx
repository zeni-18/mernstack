import React from 'react'
import {products} from '../utils/api'
import { Link } from 'react-router-dom'

export default function Products({setcart,cart}) {

  const addTocart=(product)=>{
    const item={
      id:product.id,
      name:product.name,
      price:product.price,
      image:product.image
    };
    setcart(prevCart => [...prevCart,item]);
  }

  return (
    <div><br></br><br></br>Products<br></br><br></br>
      {products.map(p=>(
        <div key={p.id}>
         <img src={p.image} alt={p.name} width={350} height={300}/>
           <p>{p.name}</p>
           <p>{p.price}</p>
           <p>{p.description}</p>
              <button onClick={() => addTocart(p)}>Add to Cart</button> {" "}{" "}
           <Link to={`/product/${p.id}` } >View</Link>
           <hr></hr>
           <br></br>
        </div>))}

    </div>

  )
}
