import { useState, useEffect } from 'react';
import useBreedList from './useBreedList';
import Results from './Results';
// useState is a hook that allows us to keep track of state as indicated by the state
// hooks always begins with 'use'

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const [location, setLocation] = useState(""); // this is a hook that allows us to have the location and setLocation will track it over time
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);
  const [breedList] = useBreedList(animal);

  useEffect(() => {
    requestPets();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  // 👆 this comment tells eslint to ignore the rule for this particular line only
  // this [] is telling the effect to always run once at the beginning and then when to rerun. Without it, it creates an infinite loop whenever we call setPets


  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}` // this is the API
      );
      const json = await res.json(); // this json is whatever we get back from the API
      setPets(json.pets);
  // so everytime we call requestPets(), it's gonna take all the data that I have, and also grab whatever we were searching for from the API
  }

  return (
    <div className="search-params">
      <form
        onSubmit={e => {
          e.preventDefault();
          requestPets();
        }}
      >
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
            breedList.map(breed => (
              <option value={breed} key={breed}>
                {breed}
              </option>
            ))
          }
          </select>
        </label>

        <button>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  )
}

export default SearchParams;

// the word class is a reserved word hence we use className
// For is reserved for for loops in JS hence we use htmlFor
