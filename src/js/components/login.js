import React from 'react';
import {Link} from 'react-router';
import $ from 'jquery';

class Login extends React.Component {
  constructor(props) {
    super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  handleSubmit(e) {
    e.preventDefault();

    let username = this.refs.username.value
    let password = this.refs.password.value
    let data = {username,
                password};
    let self = this;
    $.ajax({
      headers: {
        "X-Parse-Application-Id" : "Oy3wHIstsvP4eGWSrWPo7jutnRIig0Nrpsb13BYg",
        "X-Parse-REST-API-Key"   : "OnT784MyBhB1tdVNXzupyyLoTWkEkiEwwPQOiMnE"
      },
      url  : `https://api.parse.com/1/login?username=${username}&password=${password}`,
      type : 'GET',
      success : function(data) {
        console.log(data)
        self.props.handleSaveUser(data),
        self.props.history.pushState(null, 'profile')
      }
    })
  }

  render() {
    return (
      <form onSubmit = {this.handleSubmit}>
        <input type="text" ref='username' placeholder="username"/>
        <input type="password" ref='password' placeholder="password"/>
        <input type="submit" ref='submit' value="login"/>
        <Link to="register">Can&#39;t sign up? become a member</Link>
      </form>
    )
  }
}

export default Login;
