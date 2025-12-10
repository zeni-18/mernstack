import React, { useState } from 'react'
import { useNavigate, useLocation, Link } from 'react-router-dom'
import { products, categories } from '../utils/productsData'

export default function Products({ cart, setcart }) {
  const [selectedCategory, setSelectedCategory] = useState('accessories')
  const navigate = useNavigate()
  const location = useLocation()

  const addTocart = (product) => {
    const user = localStorage.getItem('user')
    if (!user) {
      navigate('/login', { state: { itemToAdd: product, from: location.pathname } })
      return
    }

    const item = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    }
    setcart(prevCart => [...prevCart, item])
    alert('Added to cart!')
  }

  const filteredProducts = products.filter(product => product.category === selectedCategory)

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-pink-50 flex flex-col justify-center items-center px-4 py-20">
        <h2 className="text-6xl md:text-7xl font-bold text-orange-600 mb-6 text-center">Shop by Category</h2>
        <p className="text-xl md:text-2xl text-gray-700 text-center max-w-2xl">
          Find exactly what you're looking for
        </p>
      </div>

      {/* Categories Section */}
      <div className="bg-white px-4 py-20">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-orange-600 mb-12 text-center">Browse Categories</h3>
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`p-6 rounded-xl transition font-bold text-lg transform hover:scale-105 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-br from-orange-600 to-pink-600 text-white shadow-lg scale-105'
                    : 'bg-gradient-to-br from-orange-50 to-pink-50 text-orange-600 border-2 border-orange-200 hover:border-orange-600'
                }`}
              >
                <div className="text-4xl mb-2 text-center">{category.icon}</div>
                <div className="text-xs text-center whitespace-nowrap overflow-hidden text-ellipsis">{category.name.split(' ')[1] || category.name}</div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="bg-gradient-to-b from-white to-orange-50 px-4 py-20">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-orange-600 mb-4 text-center">
            {categories.find(c => c.id === selectedCategory)?.name}
          </h3>
          <p className="text-center text-gray-600 mb-12">Showing {filteredProducts.length} products</p>
          
          <div className="flex flex-wrap justify-center gap-8">
            {filteredProducts.map(product => (
              <div key={product.id} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition overflow-hidden border border-orange-100 transform hover:scale-105 w-full md:w-80">
              <div className="relative">
                  <img src={product.image} alt={product.name} className="w-full h-56 object-cover bg-gray-100" />
                  <div className="absolute top-4 right-4 bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {product.price}
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h4>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
                  <div className="flex gap-3">
                    <Link 
                      to={`/product/${product.id}`} 
                      className="flex-1 px-4 py-3 bg-orange-100 text-orange-600 rounded-lg hover:bg-orange-200 transition font-bold text-center"
                    >
                      Details
                    </Link>
                    <button 
                      onClick={() => addTocart(product)} 
                      className="flex-1 px-4 py-3 bg-gradient-to-r from-orange-600 to-pink-600 text-white rounded-lg hover:from-orange-700 hover:to-pink-700 transition font-bold"
                    >
                      Add Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-2xl text-gray-500">No products found in this category</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
