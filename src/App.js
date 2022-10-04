import React from 'react';
import {
  BrowserRouter,
  Routes, Route,
} from 'react-router-dom';
import Nav from './Components/Nav/Nav';
import Booklist from './Components/Book/Booklist';
import Categories from './Components/Categories/Categories';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Booklist />} />
          <Route path="CATEGORIES" exact element={<Categories />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
