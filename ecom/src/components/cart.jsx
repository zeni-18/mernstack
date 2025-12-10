import React from 'react'

export default function Cart({ cart, setcart }) {
  if (!cart || cart.length === 0) {
    return <div>Your cart is empty.</div>
  }

  const total = cart.reduce((sum, item) => sum + Number(item.price || 0), 0);

  const handleRemove = (removeIndex) => {
    setcart(prevCart => prevCart.filter((_, index) => index !== removeIndex));
  };

  return (
    <div>
      <h2>Cart</h2>
      {cart.map((item, index) => (
        <div key={`${item.id}-${index}`}>
          {item.image && (
            <img src={item.image} alt={item.name} width={150} height={120} />
          )}
          <p>{item.name}</p>
          <p>${item.price}</p>
          <button onClick={() => handleRemove(index)}>Remove</button>
        </div>
      ))}
      <hr />
      <p><strong>Total:</strong> ${total.toFixed(2)}</p>
    </div>
  )
}
