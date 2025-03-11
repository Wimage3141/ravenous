import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SearchBar from './SearchBar'
import BusinessList from './BusinessList'

/*
default stuff:
<>
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src={viteLogo} className="logo" alt="Vite logo" />
    </a>
    <a href="https://react.dev" target="_blank">
      <img src={reactLogo} className="logo react" alt="React logo" />
    </a>
  </div>
  <h1>Vite + React</h1>
  <div className="card">
    <button onClick={() => setCount((count) => count + 1)}>
      count is {count}
    </button>
    <p>
      Edit <code>src/App.jsx</code> and save to test HMR
    </p>
  </div>
  <p className="read-the-docs">
    Click on the Vite and React logos to learn more
  </p>
</>
*/

function App() {
  const businessObject = {
    restaurantName: 'Moge Tee - Tampa',
    address: '2850 University Square Dr',
    city: 'Tampa',
    state: 'FL',
    zipcode: '33612',
    category: 'Bubble Tea',
    rating: 4.7,
    reviewCount: 245
  };

  // The yelp API would probably give us a array of 'business' objects
  // each object holding keys such as 'restaurantName', 'address', 'city', etc.

  const businessObjectList = Array.from({ length: 9 }, () => ({ ...businessObject }));

  console.log(businessObjectList);

  return (
    <div>
      <SearchBar />
      <BusinessList businessObjectList={businessObjectList}/>
    </div>
  )
}

export default App