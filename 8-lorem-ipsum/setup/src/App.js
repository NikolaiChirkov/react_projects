import React, { useState } from 'react';
import data from './data';

function App() {
  const [text, setText] = useState([]);
  const [count, setCount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  
  return (
  <section className="section-center">
    <h3>Tired of boring lorem ipsum?</h3>
    <form className="lorem-form" onSubmit={handleSubmit}>
      <label htmlFor="amount">paragraphs:</label>
      <input type="number" name="amount" id="amount" 
        value={count} onChange={(e) => setCount(e.target.value)} 
      />
      <button type="submit" className="btn">generate</button>
    </form>
    <article className="lorem-text">
      
    </article>
  </section>
  );
}

export default App;
