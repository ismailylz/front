import React from "react";
import axios from "axios";

class UserSignupPage extends React.Component {
  state = {
    username: null,
    displayName: null,
    password: null,
    passwordRepeat: null,
    agree: false,
  };

  onChange = (event) => {
    const {name, value} = event.target;
    this.setState({
      [name]: value,
    });
  };

  onChangeAgree = (event) => {
    const {name, checked} = event.target;
    this.setState({
      [name]: checked,
    });
  };

  onClickSignup = (event) => {
    event.preventDefault();

    const {username, displayName, password} = this.state;

    const body = {
      username,
      displayName,
      password,
    };

    axios
      .post("http://localhost:3000/api/signup", body)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.onClickSignup}>
          <h1 className="text-center">Sign Up</h1>
          <div className="mb-3">
            <label>Username</label>
            <input
              name="username"
              onChange={this.onChange}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label>Display Name</label>
            <input
              name="displayName"
              onChange={this.onChange}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input
              name="password"
              type="password"
              onChange={this.onChange}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label>Password Repeat</label>
            <input
              name="passwordRepeat"
              type="password"
              onChange={this.onChange}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label>Email address</label>
            <input
              name="email"
              type="email"
              onChange={this.onChange}
              className="form-control"
            />
            <div className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              name="agree"
              onChange={this.onChangeAgree}
              className="form-check-input"
            />
            <label className="form-check-label">Check me out</label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default UserSignupPage;
