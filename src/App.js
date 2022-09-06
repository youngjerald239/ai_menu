import React, {useState, useEffect} from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import alanBtn from '@alan-ai/alan-sdk-web'

function App() {

  const [cart, setCart] = useState([])
  const [menuItems, setMenuItems] = useState([])

  useEffect(() => {
  alanBtn({
      key: 'b85ff7bc8eefa99733b28c0eca2c6acd2e956eca572e1d8b807a3e2338fdd0dc/stage',
      onCommand: (commandData) => {
        if(commandData.command === 'getMenu'){
          setMenuItems(commandData.data)
        } else if(commandData.command === 'addToCart'){
          addToCart(commandData.data)
        }
      }
  });
}, []);

  const addToCart = (menuItem) => {
    setCart((oldCart) => {
      return [...oldCart, menuItem]
    })
  }

  return (
    <div className="App">
      {menuItems.map(menuItem => (
        
        <Card key={menuItem.name} style={{ width: '18rem' }}>
        <Card.Img variant="top" src={menuItem.image} />
        <Card.Body>
        <Card.Title>{menuItem.name}</Card.Title>
        <Card.Title>${menuItem.price}</Card.Title>
        <Card.Title>{menuItem.category}</Card.Title>
        <Button variant="primary" onClick={() => addToCart(menuItem)}>add to cart</Button>
        </Card.Body>
        </Card>
        
      ))}
      <h2>Cart</h2>
      {cart.map(cartItem =>(
        <li key={cartItem.name}>
          {cartItem.name} - ${cartItem.price} - {cartItem.category}
        </li>
      ))}
    </div>
  )
}

export default App;
