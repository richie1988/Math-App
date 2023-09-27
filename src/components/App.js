import React from 'react';
import {
  BrowserRouter, Routes, Route, Link, Outlet,
} from 'react-router-dom';
import Calculator from './calculator';
import './calculator.css';
import QuoteDisplay from './QuoteDisplay';
import Home from './Home';

export function Header() {
  return (
    <div className="nav-container">
      <h2>My Mathematics Magician</h2>
      <nav className="nav-bar">
        <Link className="nav-item" to="/">Home</Link>
        |
        {' '}
        <Link className="nav-item" to="/Calculator">Calculator</Link>
        |
        {' '}
        <Link className="nav-item" to="/Quotes">Quotes</Link>
      </nav>

      <Outlet />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/Calculator" element={<Calculator />} />
          <Route path="/Quotes" element={<QuoteDisplay />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
