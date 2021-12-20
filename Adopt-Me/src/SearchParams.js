import { useState } from 'react';
// useState is a hook that allows us to keep track of state as indicated by the state
// hooks always begins with 'use'


const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input id="location" value={location}
          placeholder="Location" />
        </label>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default SearchParams;

// the word class is a reserved word hence we use className
// For is reserved for for loops in JS hence we use htmlFor
