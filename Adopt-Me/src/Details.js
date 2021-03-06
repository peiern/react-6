import { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Carousel from './Carousel';
import ErrorBoundary from './ErrorBoundary';
import ThemeContext from './ThemeContext';
import Modal from './Modal';

class Details extends Component {
  // constructor () {
  //   super(); // this is to call the Component constructor

  //   this.state = { loading: true }; // default state. Whenever we create one of this, its gonna be loading
  // }

  state = { loading: true, showModal: false };
  // 👆 this is the same as line 5 - 9
  // we can write it like this because of the babel eslint parser

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

  toggleModal = () => this.setState({ showModal: !this.state.showModal })
  adopt = () => (window.location = "http://bit.ly/pet-adopt");

  render () {
    if (this.state.loading){
      return <h2>loading...</h2>
    }

    const { animal, breed, city, state, description, name, images, showModal } = this.state;

    return (
      <div className="details">
        <Carousel images={images}/>
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${city}, ${state}`}</h2>
          {/* <h2>{animal} - {breed} - {city}, {state}</h2>
          // line 33 and 34 are the same, just different way of writing it */}
          <ThemeContext.Consumer>
            {([theme]) => (
              <button
              onClick={this.toggleModal}
              style={{backgroundColor: theme}}>
                Adopt {name}</button>
            )}
          </ThemeContext.Consumer>
          <p>{description}</p>
          {showModal ? (
            <Modal>
              <div>
                <h1>Would you like to adopt {name}?</h1>
                <div className="buttons">
                  <button onClick={this.adopt}>Yes</button>
                  <button onClick={this.toggleModal}>No</button>
                </div>
              </div>
            </Modal>
            ) : null}
        </div>
      </div>
    )
  }
}

const DetailsWithRouter = withRouter(Details)

// export default withRouter(Details);
// by default React Router doesn't pass in all its information to the component so we have to use
// something called higher order component. it passes all the information into the component
// injects all the router information into the route

export default function DetailsErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <DetailsWithRouter {...props} />
    </ErrorBoundary>
  )
}
