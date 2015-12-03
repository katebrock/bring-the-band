import React from 'react';
import {Link} from 'react-router';

class Login extends React.Component {
  render() {
    return (
      <form className="login">
        <input type="text" placeholder="username"/>
        <input type="password" placeholder="password"/>
        <input type="submit" value="login"/>
        <Link to="signup">Can&#39;t sign up? become a member</Link>
      </form>
    )
  }
}

export default Login;
