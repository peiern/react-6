// App is a function that returns the result of React.createElement
// App is a React component -> kinda like a class of components and we can create instances of it
const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Adopt Me!")
  );
};

ReactDOM.render(React.createElement(App), document.getElementById('root')) // the createElement here is to create the instance of App
