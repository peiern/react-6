import { useState, useEffect } from 'react';

const localCache = {};

export default function useBreedList(animal) {
  const [breedList, setBreedList] = useState([]);
  const [status, setStatus] = useState('unloaded'); // a string representing the state of the hook. if no one has called it before, it will be in the 'unloaded' state

  useEffect(() => {
    if(!animal){
      setBreedList([]);
    } else if(localCache[animal]){
      setBreedList(localCache[animal])
    } else {
      requestBreedList();
    }
    // 👆 no animal return empty list,
    // if i have something locally, i've already requested this previously then display that list
    // otherwise go out to the API and get it

    async function requestBreedList() {
      setBreedList([]);
      setStatus('loading');
      const res = await fetch(
          `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
      );
      const json = await res.json();
      localCache[animal] = json.breeds || []; // || [] here is in case the API is not working
      setBreedList(localCache[animal]);
      setStatus('loaded');
    }
  }, [animal])

  return [breedList, status]
}
