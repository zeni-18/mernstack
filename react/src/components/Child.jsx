// Parent to child
/*import React from 'react'
import Grandchild from './GrandChild'

export default function Child({propschild}) {
  return (
    <div>
      <h2>This is Child component</h2>
      <h2>{propschild}</h2>
      <Grandchild propsgrand={propschild}/>
    </div>
  )
}*/

//Child  to parent

import React from 'react'


export default function Child({custombutton}) {
  return (
    <div>
      Child 
      <button onClick ={custombutton}>Click</button>
    </div>
  )
}