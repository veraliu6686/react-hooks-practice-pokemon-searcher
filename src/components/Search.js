import React, {useState} from "react";

function Search({setSearch}) {
  const [text, searchText] = useState(" ")

  const handleSearch = () =>{
    setSearch(text)
  }

  const handleInput = e =>{
    searchText(e.target.value)
  }

  return (
    <div className="ui search">
      <div className="ui icon input" value = {text} onClick = { handleSearch}>
        <input className="prompt" onChange={handleInput}/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
