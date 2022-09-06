

const menuItems = [
   {name: "Angus Burger", price: 8.99, category: 'burger'},
   {name: "Tuna Steak Burger", price: 15.00, category: 'burger'},
   {name: "Bacon Burger", price: 11.50, category: 'burger'},
   {name: "Southwest Chicken Burger", price: 9.99, category: 'burger'},
   {name: "Mozzarella Burger", price: 12.50, category: 'burger'},
   {name: "Cesar Salad", price: 6.50, category: 'salad'},
   {name: "BBQ Chicken Salad", price: 13.99, category: 'salad'},
   {name: "Garden Salad", price: 9.99, category: 'salad'},
   {name: "Veggie Lasagna", price: 17.99, category: 'pasta'},
   {name: "Spaghetti & Meatballs", price: 17.99, category: 'pasta'},
   {name: "Fettuccine Alfredo", price: 17.99, category: 'pasta'},
];

function App() {
  return (
    <div className="App">
      {menuItems.map(menuItem => (
        <li key={menuItem.name}>{menuItem.name} - ${menuItem.price} - {menuItem.category}</li>
      ))}
    </div>
  )
}

export default App;
