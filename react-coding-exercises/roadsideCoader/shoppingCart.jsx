import React from 'react';
import create from 'zustand';

// Create a store using Zustand
const useStore = create((set) => ({
  cart: [],
  addToCart: (item) =>
    set((state) => ({
      cart: state.cart.some((cartItem) => cartItem.id === item.id)
        ? state.cart.map((cartItem) =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          )
        : [...state.cart, { ...item, quantity: 1 }],
    })),
  removeFromCart: (itemId) =>
    set((state) => ({
      cart: state.cart
        .map((cartItem) =>
          cartItem.id === itemId
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
        .filter((cartItem) => cartItem.quantity > 0),
    })),
  clearCart: () => set({ cart: [] }),
}));

// Component using the shopping cart store
const ShoppingCart = () => {
  const { cart, addToCart, removeFromCart, clearCart } = useStore();

  // Fake items for demonstration
  const fakeItems = [
    { id: 1, name: 'Product A', price: 19.99, image: 'productA.jpg' },
    { id: 2, name: 'Product B', price: 29.99, image: 'productB.jpg' },
    { id: 3, name: 'Product C', price: 39.99, image: 'productC.jpg' },
  ];

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <img
              src={item.image} // Image path is relative to the current location
              alt={item.name}
              style={{ width: '50px', height: '50px', marginRight: '10px' }}
            />
            {item.name} - Quantity: {item.quantity}{' '}
            <button onClick={() => removeFromCart(item.id)}>
              Remove One
            </button>
            <button onClick={() => addToCart(item)}>Add One</button>
          </li>
        ))}
      </ul>
      <h2>Available Items</h2>
      <ul>
        {fakeItems.map((item) => (
          <li key={item.id}>
            <img
              src={item.image} // Image path is relative to the current location
              alt={item.name}
              style={{ width: '50px', height: '50px', marginRight: '10px' }}
            />
            {item.name} - Price: ${item.price}{' '}
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </li>
        ))}
      </ul>
      <button onClick={clearCart}>Clear Cart</button>
    </div>
  );
};

// Example usage
const App = () => {
  return (
    <div>
      <h1>My Shopping App</h1>
      <ShoppingCart />
    </div>
  );
};

export default App;
