import React from 'react';
import {
  BrowserRouter,
  Routes, Route,
} from 'react-router-dom';
import Book from './Components/Book/Book';
import AddBook from './Components/AddBook/AddBook';
import Nav from './Components/Nav/Nav';
import Categories from './Components/Categories/Categories';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route
            path="/"
            element={(
              <>
                <Book type="Action" title="The Hunger Games" author="Suzanne Collins" />
                ,
                <Book type="Science Fiction" title="Dune" author="Frank Herbert" />
                ,
                <Book type="Economy" title="Capital in the Twenty-First Century" author="Suzanne Collins" />
                <AddBook />
              </>
)}
          />
          <Route path="CATEGORIES" exact element={<Categories />} />

        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
