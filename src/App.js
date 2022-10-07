import React from 'react';
import {
  BrowserRouter,
  Routes, Route,
} from 'react-router-dom';
import Books from './Components/Books';
import Categories from './Components/Categories/Categories';
import Nav from './Components/Nav/Nav';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
