import { Link } from 'react-router-dom';

// props = properties. props are what is passed down from one parent component to a child component
// js way of writing
// const Pet = (props) => {
//   return React.createElement("div", {}, [
//     React.createElement("h2", {}, props.name),
//     React.createElement("h3", {}, props.animal),
//     React.createElement("h3", {}, props.breed),
//   ]);
// };

// jsx way of writing.
// 👇 will generate the same result as the above code
const Pet = ({
  name,
  animal,
  breed,
  images,
  location,
  id
}) => {
  let hero = "http://pets-images.dev-apis.com/pets/none.jpg" // this is the image that gets display if nothing comes back from the API
  if (images.length) {
    hero = images[0];
  } // if we get any images back, we want to make that the image

  return(
    <Link to={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed} - ${location}`}</h2>
      </div>
    </Link>
  )
}
// Once we're using React Router we want to switch a tags to Link tags
// Link tags doesn't reload the entire page, React Router captures the navigation event and its doing the navigation without reloading the application
// it becomes a single page application

export default Pet;
