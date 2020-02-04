import React from 'react';
// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import routes from './routes'

function App() {
  return (
    <div className="App">
      <NavBar/>
      {routes}
    </div>
  );
}

export default App;
