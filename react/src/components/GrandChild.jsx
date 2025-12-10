import React from 'react'

export default function Grandchild({propsgrand}) {
  return (
    <div>
        <h2>This is Grandchild component</h2>
        <h2>{propsgrand}</h2>
    </div>
  )
}