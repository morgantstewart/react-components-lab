// src/App.jsx


import Navbar from './components/Navbar/Navbar.jsx';

import './App.css';

const App = () => {
  return (
    <> 
      <nav id="top-navbar">
        <a href="/">Home</a>
        <a href="/about-us">About Us</a>
        <a href="/money-pit">Investment Opportunities</a>
        <a href="/the-fine-print">Terms of Service</a>
      </nav>

          <h1>Welcome to Hyperbo.ly</h1>
        <h2>The future is firmly in front of us!</h2>
        <p>If you can't explain it to a fifth-grader, our product does it.</p>

      <main>
        <h1>Welcome to Hyperbo.ly</h1>
        <h2>The future is firmly in front of us!</h2>
        <p>If you can't explain it to a fifth-grader, our product does it.</p>
      </main>
      <h2>Our Founders</h2>
      <ul>
        <li>
          <h3>Elizabeth Holmes: CEO</h3>
          <p>MBA from SuperLegit University</p>
        </li>
        <li>
          <h3>Sam Bankman-Fried: CFO</h3>
          <p>CPA from TotallyReal State</p>
        </li>
        <li>
          <h3>Matt Damon: CMO</h3>
          <p>Was in that Movie You saw</p>
        </li>
      </ul>
    </>
  );
};
export default App;
