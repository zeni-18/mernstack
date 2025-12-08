//Parent to child
/*import React from 'react'
import Child from './Child.jsx'
export default function Parent({programme}) {
  return (
    <div>
        <h2>This is Parent component</h2>
        <h2>{programme}</h2>
        <Child propschild={programme}/>
    </div>
  )
}*/

//Child to parent

import React from 'react'
import {useState}from 'react';
import Child from './Child.jsx'
export default function Parent() {
  const [count,setCount] = useState(0);
  const increment = () => { setCount(count+1000000)}
  return ( 
    <div>
        <h2>This is Parent component</h2>
        
        <Child custombutton ={increment}/>

        <h1>{count}</h1>
        <button onClick = {()=>{setCount(count-1)}}>Click</button>
        <button onClick = {()=>{setCount(count+1)}}>Click</button>
        
    </div>
  )
}