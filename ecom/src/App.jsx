import { useState } from 'react'
import {Routes,Route,Link} from 'react-router-dom'
import Products from './components/Products'

function App() {
  

  return (
    <>
   <div>
    <header>
      <Link to="/"><h1>Mern Ecommerce By Nithish K</h1></Link>
    </header>
    <main>
      <Routes>
       <Route path="/" element={<Products/>}></Route>
     </Routes>
    </main>
   </div>
  



    </>
  )
}

export default App