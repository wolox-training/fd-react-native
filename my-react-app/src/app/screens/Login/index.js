import React from 'react';

export const minLength = min => value =>
  value && value.length < min ? ` Must be ${min} characters or more` : undefined;

const minLength8 = minLength(8);

const required = value => (value ? undefined : 'Required');

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    alert(`An email was submitted: ${this.state.email}`);

  }

  /*handleSubmit = (user) => {
    API.login(user).then(response => {
      if (response.success) {
        alert(`An email was submitted: ${this.state.email}`);
      } else {
        alert(`Password must have >8 words: ${this.state.password}`);
      }
    })
  }*/

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Email:
          <input
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.handleInputChange}
            validate={required}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleInputChange}
            validate={(required, minLength8)}
          />
        </label>
        <input type="submit" email="Submit" />
      </form>
    );
  }
}

export default Login;
