import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import $ from 'jquery';

class App extends React.Component {
//   contructor(props) {
//     super(props);
//   }
// }
//
// componentDidMount() {
//   $.ajax({
//     url: 'https://api.parse.com/1/classes/bands'
//
//   });
// }

render() {
  return (
      <div className="wrapper">
        <header>
          <h1> bands!</h1>
          <nav>
            <Link to="Profile">Profile</Link>
            <Link to="/">Search</Link>
            <Link to="login">Login</Link>
          </nav>
        </header>
        {childrenWithProps}
      </div>
    )
  }
};

export default App;
