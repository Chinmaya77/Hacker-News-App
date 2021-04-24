import React from "react";
import "./style.css";

function Search() {
  return (
    <div>
      <form method="get" action="//hn.algolia.com/">
        <span className="search-text"> Search:</span>{" "}
        <input
          type="text"
          name="q"
          defaultValue=""
          size="17"
          autoCorrect="off"
          spellCheck="false"
          autoCapitalize="off"
          autoComplete="false"
        />
      </form>
    </div>
  );
}

export default Search;
