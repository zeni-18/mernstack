/*import { useState } from 'react'

function App() {

  const [count,setCount] = useState(10)
  const [color,setColor] = useState("black");
  const [a,setA] = useState([0,1,2,3,4,5])
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);

  return (
    <>
      <h1>Welcome {count}</h1>

      <button onClick={() => setCount(count + 1)}>Click To Increment</button>{"   "}
      <button onClick={() => setCount(count - 1)}>Click To Decrement</button>

      <h2 style={{ color: color }}>Color</h2>
      <button onClick={() => setColor("red")}>Red</button>
      <button onClick={() => setColor("green")}>Green</button>
      <button onClick={() => setColor("blue")}>Blue</button>

      <h2>{a}</h2>

      <button onClick={() => setA(a.length)}>
        Array Length
      </button>

      <button onClick={() => setA([...a, 6])}>Push</button>
      <button onClick={() => setA(a.slice(0, -1))}>Pop</button>

      <hr />
      <h2>Likes: {like}</h2>
      <h2>Dislikes: {dislike}</h2>

      <button onClick={() => setLike(like + 1)}>👍 Like</button>{" "}
      <button onClick={() => setDislike(dislike + 1)}>👎 Dislike</button>
    </>
  )
}

export default App*/

/*import Parent from "./components/Parent"

function App() {
  const name= "aids"
  return (
    <>
    <h1>App Component</h1>
    <Parent programme={name}/>
    </>
  )
}

export default App*/

import React from 'react'

function App() {
  const productList = ['fruit','vegs','dairy'];
  return (
    <>
    <h1>Product List</h1>

    {productList.map((s,i)=>(
      <p key = {i}>{s}</p>
    ))}
    </>
  )
}

export default App

