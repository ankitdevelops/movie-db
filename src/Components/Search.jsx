import React, { useState } from "react";

function Search({ searchContent }) {
  const [text, setText] = useState("");
  const [type, setType] = useState("");

  const setSearchContent = (e) => {
    e.preventDefault();
    if (type && text) {
      searchContent(type, text);
      setText("");
      setType("");
    } else if (type || text) {
      searchContent(type, text);
      setText("");
      setType("");
    }
  };

  return (
    <div className="form-control flex justify-center mt-10  sm:mt-40 h-full">
      <form
        className="input-group w-full mx-auto text-center flex items-center justify-center "
        onSubmit={setSearchContent}
      >
        <select
          className="select select-bordered"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option defaultValue>Type</option>
          <option value="movie">Movie</option>
          <option value="series">Series</option>
        </select>
        <input
          type="text"
          placeholder="What are you Looking for"
          className="input input-bordered w-full max-w-xl "
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="btn btn-square" type="submit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </form>
    </div>
  );
}

export default Search;
