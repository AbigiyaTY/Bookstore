import React from 'react';
import './Categories.css';

function Categories() {
  return (
    <div>
      <div className="container catContainer">
        <div className="row">
          <hr className="col-12" />
          <button type="button" className="col-4  my-2 py-5 px-3 catButton ">Check status</button>
        </div>
      </div>
    </div>
  );
}

export default Categories;
