import About from "./components/About"
import {useState} from 'react'
import Contact from "./components/Contact"
import Product from "./components/product"
import Home from "./components/Home"
import Products from "./components/Products"
import Cart from "./components/cart"
import {Routes,Route,Link} from 'react-router-dom'
import "./App.css"
import { useEffect } from "react"


function App() {

  const [cart,setcart]=useState(()=>{
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(()=>{
    localStorage.setItem("cart",JSON.stringify(cart));
  },[cart])
  
  return (
    <>
    <div style={{ width:"100%"}} >
         <header style={{ width:"100%"}}>
          <h1 className="i" >My App </h1>
          <nav className='l' style={{ width:"100%"}}>
              <Link to="/" className="o"> Home  |{" "} </Link>
              <Link to="/about" className="o">About Us | {" "} </Link>
              <Link to="/contact" className="o"> Contact us |{" "}   </Link>
              <Link to="/products"className="o">Products |{" "}</Link>
              <Link to="/cart" className="o">Cart ({cart.length})</Link>
              <br></br>
              <br></br>
              <hr></hr>

          </nav>

         </header>
         
         <main >
         <Routes>
          <Route path="/" element={<Home/>}>Home</Route>
          <Route path="/About" element={<About/>}>About</Route>
          <Route path="/Contact" element={<Contact/>}>Contact</Route>
          <Route path="/Products" element={<Products cart={cart} setcart={setcart}/>}>Products</Route>
          <Route path="/cart" element={<Cart cart={cart} setcart={setcart}/>}>Cart</Route>
          <Route path="/product/:id" element={<Product setcart={setcart}/>}></Route>
         </Routes>
         </main>
         
         </div>
      </>
  )
}

export default App
