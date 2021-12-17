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
const Pet = (props) => {
  return(
    <div>
      <h2>{props.name}</h2>
      <h3>{props.animal}</h3>
      <h3>{props.breed}</h3>
    </div>
  )
}

export default Pet;
