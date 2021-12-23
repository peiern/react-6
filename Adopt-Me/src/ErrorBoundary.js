import { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

class ErrorBoundary extends Component {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true, redirect: false }
    // getDerivedStateFromError() will render a fallback UI after an error has been thrown
  }
  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught an error", error, info);
    setTimeout(() => {
      this.setState({ redirect: true })
    }, 5000);
  }
  // componentDidCatch() will log the error info

  //  componentDidUpdate() {
  //   if (this.state.hasError) {
  //     setTimeout(() => this.setState({ redirect: true }), 5000);
  //   }
  // }
  // componentDidUpdate() cannot be called on the very first time that it renders
  // as we will assume that we wouldn't hit an error on the first time

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    } else if (this.state.hasError) {
      return (
        <h2>
          There was an error with this listing. <Link to="/">Click here</Link>{" "}
          to back to the home page or wait five seconds.
        </h2>
      );
    }

    return this.props.children; // what that is passed between <ErrorBoundary> is the children
  }
}

// <ErrorBoundary>
//   <h1>Hello World</h1>
// </ErrorBoundary>

export default ErrorBoundary;
