import React from 'react';
import Book from './Book';
import AddBook from '../AddBook/AddBook';

function Booklist() {
  return (
    <div>
      <Book type="Action" title="The Hunger Games" author="Suzanne Collins" />
      <Book type="Science Fiction" title="Dune" author="Frank Herbert" />
      <Book type="Economy" title="Capital in the Twenty-First Century" author="Suzanne Collins" />
      <AddBook />
    </div>

  );
}

export default Booklist;
