const Pet = () => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, "Luna"),
    React.createElement("h3", {}, "Dog"),
    React.createElement("h3", {}, "Havanese")
  ])
}


// App is a function that returns the result of React.createElement
// App is a React component -> kinda like a class of components and we can create instances of it
const App = () => {
  return React.createElement(
    "div",
    {},
    [
      React.createElement("h1", {}, "Adopt Me!"),
      React.createElement(Pet),
      React.createElement(Pet),
      React.createElement(Pet)
    ]
  );
};

ReactDOM.render(React.createElement(App), document.getElementById('root')) // the createElement here is to create the instance of App
