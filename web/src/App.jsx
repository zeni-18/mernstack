/*import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log("form submitted successfully");
    console.log("Name entered:",name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          placeholder="Enter name"
          onChange={handleName}
        />
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}*/
/*export default function App(){
  const[name,setName]=useState();
    const inRef=useRef();
    const handleClick=()=>{
      setName(inRef.current.value);
    }
  
return (
  <>
  <input type="text" placeholder="Type something..." ref={inRef}/>
  <button onClick={handleClick}>Submit</button>
  <p>{name}</p>
  </>
)
}*/

/*import { useEffect, useState } from "react"


function App() {
  const [data, setData] = useState([])
  const [type, setType] = useState("photos");
  useEffect(()=>{console.log('Redering'); 
      fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then(response => response.json())
      .then(json => setData(json))})
  
  return (
    <>
    <p>Type: {type}</p>
    <button type = "submit" onClick ={() => {setType("albums")}}>Albums</button>
    <button type = "submit" onClick ={() => {setType("photos")}}>Photos</button>
    {
      data.map((item, index) => (<p key = {index}>{item.title}</p>))
    }
    </>
  )
}
export default App*/

/*import { useState } from "react";
export default function App() {
  const [name,setName] = useState("");
  const handleSave=()=>{
    const user ={
    name: name,
    role: "student"
    };
    localStorage.setItem("Name",JSON.stringify(user));
}
  return(
    <>
    <input 
     placeholder="Name"
     value={name}
     onChange={(e)=>setName(e.target.value)}
    />
    <button onClick={handleSave}>Save</button>
    <p>{localStorage.getItem("Name")}</p>-0
     </>
  );
}*/

import { Route } from 'react-router-dom'
import { BrowserRouter,Link,Routes} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Product from './components/Product';
export default function App() {
  return (
    <>
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>|{" "}
        <Link to="/about">About</Link>|{" "}
        <Link to="/contact">Contact</Link><br/>
      <Link to="/product/10">Go to Product 10</Link><br/>
      <Link to="/product/50">Go to Product 50</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/product/:id" element={<Product />}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}