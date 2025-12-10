import React from 'react'

export default function Footer() {
    const year = new Date().getFullYear();
  return (
    <div>
        <p>&copy;{year} MERN INTERNSHIP. All rights reserved.</p>
    </div>
  )
}
