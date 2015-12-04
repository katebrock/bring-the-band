import React from 'react';
import {Link} from 'react-router';
import $ from 'jquery';

class Register extends React.Component {
  constructor(props) {
    super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

  handleSubmit(e) {
    e.preventDefault();
    let data = {username: this.refs.username.value, password: this.refs.password.value};
    let self = this;
    $.ajax({
      headers: {
        "X-Parse-Application-Id" : "Oy3wHIstsvP4eGWSrWPo7jutnRIig0Nrpsb13BYg",
        "X-Parse-REST-API-Key"   : "OnT784MyBhB1tdVNXzupyyLoTWkEkiEwwPQOiMnE"
      },
      url  : 'https://api.parse.com/1/users',
      type : 'POST',
      data : JSON.stringify(data),
      success : function(data) {
        self.props.handleSaveUser(data),
        self.props.history.pushState(null, 'profile')
      }
    })
  }

  render () {
    return(
      <form onSubmit = {this.handleSubmit}>
        <input type = "text" ref = "username" placeholder="username" />
        <input type = "password" ref = "password" placeholder = "password" />
        <input type = "submit" value = "register" />
      </form>
    )
  }
}

export default Register;
