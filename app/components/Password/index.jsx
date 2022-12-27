import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import Vertical from '../../styling/Vertical';

class Password extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      pwdC: '',
      submit: false,
    };
    this.handleEvent = this.handleEvent.bind(this);
    this.onSubmitPassword = this.onSubmitPassword.bind(this);
  }

  onSubmitPassword(e) {
    const { password, pwdC } = this.state;
    const { user } = this.props.location.state;
    // location prop to access the state from component SignUp (React-Router)
    if (password !== pwdC) {
      this.setState({ error: true });
    } else {
      fetch('/api/signup', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          password,
        }),
      });
      this.setState({ submit: true });
    }
    e.preventDefault();
  }

  handleEvent(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { submit, error } = this.state;
    const { user } = this.props.location.state;

    let result = null;
    if (!submit && error) {
      result = <p className="font-weight-light text-danger">{'Those passwords didn\'t match. Try again.'}</p>;
    }

    return (
      <Vertical>
        <div className="container card w-50 shadow bg-light">
          <div className="d-flex align-items-center" style={{ height: 300 }}>
            <div className="row justify-content-center card-body">
              <form onSubmit={this.onSubmitPassword}>
                <h4>{`${user.firstName}, welcome!`}</h4>
                <div className="form-inline">
                  <input
                    type="text"
                    placeholder="Password"
                    name="password"
                    onChange={this.handleEvent}
                    required
                    className="form-control m-2"
                  />
                  <input
                    type="text"
                    placeholder="Confirm password"
                    name="pwdC"
                    onChange={this.handleEvent}
                    required
                    className="form-control m-2"
                  />
                  <input type="submit" value="Next" className="btn btn-primary m-2 pl-5 pr-5" />
                </div>
                {result}
              </form>
              {!submit ? null : (
                <Redirect
                  to={{
                    pathname: '/success',
                    state: { email: user.email },
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </Vertical>
    );
  }
}

export default Password;
