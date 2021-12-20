import { useState } from 'react';
// useState is a hook that allows us to keep track of state as indicated by the state
// hooks always begins with 'use'

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA"); // this is a hook that allows us to have the location and setLocation will track it over time
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const breeds = [];

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input id="location"
          onChange={(e) => setLocation(e.target.value)} // 1 line arrow function
          // whenever user does something, it will give us back a function that gives us back an event
          value={location}
          placeholder="Location" />
        </label>

        <label htmlFor="animal">
          Animal
          <select id="animal"
          onChange={(e) => setAnimal(e.target.value)} // with only onChange here, it gives an error to use onBlur instead as it worries onChange might not be enough to capture keyboard or screen reader users' response
          onBlur={(e) => setAnimal(e.target.value)}
          value={animal} >

          <option />
          {/* // same as <option value=""></option> */}
          {
            ANIMALS.map(animal => (
              <option value={animal} key={animal}>
                {animal}
              </option>
            ))
          }
          </select>
        </label>

        <label htmlFor="breed">
          Breed
          <select id="breed"
          onChange={(e) => setBreed(e.target.value)} // with only onChange here, it gives an error to use onBlur instead as it worries onChange might not be enough to capture keyboard or screen reader users' response
          onBlur={(e) => setBreed(e.target.value)}
          value={breed} >

          <option />
          {
            breeds.map(breed => (
              <option value={breed} key={breed}>
                {breed}
              </option>
            ))
          }
          </select>
        </label>

        <button>Submit</button>
      </form>
    </div>
  )
}

export default SearchParams;

// the word class is a reserved word hence we use className
// For is reserved for for loops in JS hence we use htmlFor
