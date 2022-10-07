import React from 'react';
import {
  BrowserRouter,
  Routes, Route,
} from 'react-router-dom';
import Books from './components/Books';
import Categories from './components/Categories/Categories';
import Nav from './components/Nav/Nav';

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
