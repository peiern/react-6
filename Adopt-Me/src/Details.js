import { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Details extends Component {
  constructor () {
    super(); // this is to call the Component constructor

    this.state = { loading: true }; // default state. Whenever we create one of this, its gonna be loading
  }
  async componentDidMount () {
    const res = await fetch (
      `http://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`
      // this -> refers to the Details component // props -> what is passed down from the parent
      // match and params -> from the react router. match -> match path. params -> parameters that I'm getting from the user
      // id -> whatever we call the variable in the path
    );
    const json = await res.json();
    this.setState(
      Object.assign(
        {
          loading: false
        },
        json.pets[0]
      )
    );
  }
  render () {
    const { animal, breed, city, state, description, name } = this.state;
    return (
      <div className="details">
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${city}, ${state}`}</h2>
          {/* <h2>{animal} - {breed} - {city}, {state}</h2>
          // line 33 and 34 are the same, just different way of writing it */}
          <button>Adopt {name}</button>
          <p>{description}</p>
        </div>
      </div>
    )
  }
}

export default withRouter(Details);
// by default React Router doesn't pass in all its information to the component so we have to use
// something called higher order component. it passes all the information into the component
// injects all the router information into the route
