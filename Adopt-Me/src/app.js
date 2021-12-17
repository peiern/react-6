import ReactDOM from 'react-dom';
import Pet from './Pet';
// data flows downwards in React (one way data flow)
// goes from parent to child. child has no way of messing with the parent component

// App is a function that returns the result of React.createElement
// App is a React component -> kinda like a class of components and we can create instances of it
// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Adopt Me!"),
//     React.createElement(Pet, {
//       name: "Luna",
//       animal: "Dog",
//       breed: "Havanese",
//     }),
//     React.createElement(Pet, {
//       name: "Pepper",
//       animal: "Bird",
//       breed: "Cockatiel",
//     }),
//     React.createElement(Pet, {
//       name: "Sudo",
//       animal: "Dog",
//       breed: "Wheaten Terrier",
//     }),
//   ]);
// };

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Luna" animal="Dog" breed="Havanese" />
      <Pet name="Pepper" animal="Bird" breed="Cockatiel" />
      <Pet name="Sudo" animal="Dog" breed="Wheaten Terrier" />
    </div>
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root")); // the createElement here is to create the instance of App
