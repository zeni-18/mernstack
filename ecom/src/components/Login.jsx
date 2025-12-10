import React, { useState } from 'react'
import { useNavigate, useLocation, Link } from 'react-router-dom'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const location = useLocation()

  const handleLogin = (e) => {
    e.preventDefault()
    if (email && password) {
      // Store login info in localStorage
      localStorage.setItem('user', JSON.stringify({ email, loggedIn: true }))
      
      // Get the item to add to cart from state
      const itemToAdd = location.state?.itemToAdd
      if (itemToAdd) {
        const storedCart = localStorage.getItem('cart')
        const cart = storedCart ? JSON.parse(storedCart) : []
        cart.push(itemToAdd)
        localStorage.setItem('cart', JSON.stringify(cart))
      }

      // Redirect to the previous page or home
      const returnTo = location.state?.from || '/'
      navigate(returnTo)
    } else {
      alert('Please fill in all fields')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-pink-50 flex items-center justify-center py-12 px-4">
      <div className="bg-white p-10 rounded-xl shadow-xl border border-orange-100 max-w-md w-full">
        <h2 className="text-4xl font-bold text-orange-600 mb-2 text-center">Welcome Back</h2>
        <p className="text-gray-600 text-center mb-8">Sign in to your account</p>
        
        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-gray-800 font-bold mb-2">📧 Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border-2 border-orange-200 rounded-lg focus:outline-none focus:border-orange-600 focus:ring-2 focus:ring-orange-100 text-gray-900 bg-white"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label className="block text-gray-800 font-bold mb-2">🔒 Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border-2 border-orange-200 rounded-lg focus:outline-none focus:border-orange-600 focus:ring-2 focus:ring-orange-100 text-gray-900 bg-white"
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="w-full px-6 py-3 bg-gradient-to-r from-orange-600 to-pink-600 text-white rounded-lg hover:from-orange-700 hover:to-pink-700 transition font-bold text-lg shadow-lg">
            Sign In →
          </button>
        </form>

        <div className="my-6 flex items-center gap-4">
          <div className="flex-1 bg-gray-200 h-px"></div>
          <span className="text-gray-500 font-semibold">OR</span>
          <div className="flex-1 bg-gray-200 h-px"></div>
        </div>

        <div className="text-center">
          <p className="text-gray-700 mb-4">Don't have an account?</p>
          <Link to="/signup" className="inline-block w-full px-6 py-3 border-2 border-orange-600 text-orange-600 rounded-lg font-bold hover:bg-orange-50 transition">
            Create Account →
          </Link>
        </div>

        <p className="text-center text-gray-500 text-sm mt-8">Demo: Use any email and password to login</p>
      </div>
    </div>
  )
}
