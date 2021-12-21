import { Component } from 'react';

class Carousel extends Component {
  state = {
    active: 0
  };

  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"]
    // defaultProps = basically saying if there is no props for images, we're gonna fall back on the default image
    // static means its callable on the abstract class
  }

  render () {
    const { active } = this.state;
    const { images } = this.props;
    // the difference between state and props:
    // state is mutable
    // props is coming from the parent and its read-only

    return (
      <div className="carousel">
        <img src={images[active]} alt="animal" />
        <div className="carousel-smaller">
          {images.map((photo, index) => (
            <img
              key={photo}
              src={photo}
              className={index === active ? "active": ""}
              alt="animal thumbnail"/>
          ))}
        </div>
      </div>
    )
  }
}

export default Carousel
