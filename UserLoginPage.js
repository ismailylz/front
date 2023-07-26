import React from "react";
import axios from "axios";

class UserLoginPage extends React.Component {
  state = {
    username: null,
    password: null,
  };

  onChange = (event) => {
    const {name, value} = event.target;
    this.setState({
      [name]: value,
    });
  };

  onClickLogin = (event) => {
    event.preventDefault();

    const {username, password} = this.state;

    const body = {
      username,
      password,
    };

    axios
      .post("http://localhost:3000/api/login", body)
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
        <form onSubmit={this.onClickLogin}>
          <h1 className="text-center">Log In</h1>
          <div className="mb-3">
            <label>Username</label>
            <input
              name="username"
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
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default UserLoginPage;