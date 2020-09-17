import React from "react";

function SearchComponent({ handleInput, search }) {
  return (
    <section className="searchbox-wrap">
      <input
        type="text"
        placeholder="Search by movie title..."
        className="searchbox"
        onChange={handleInput}
        onKeyPress={search}
      />
      <br />
    </section>
  );
}

export default SearchComponent;
