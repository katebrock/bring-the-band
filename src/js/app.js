import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bands: []
    };
    this.handleBandData = this.handleBandData.bind(this);
    this.saveUser = this.saveUser.bind(this);
  }
  handleBandData(data) {
    this.setState({bands: data.results})
  }
  saveUser(data) {
    this.setState ({
      user:data
    })
  }
  componentDidMount() {
    $.ajax({
      url: 'https://api.parse.com/1/classes/bands',
      success: this.handleBandData,
      headers: {
        "X-Parse-Application-Id": "Oy3wHIstsvP4eGWSrWPo7jutnRIig0Nrpsb13BYg",
        "X-Parse-REST-API-Key": "OnT784MyBhB1tdVNXzupyyLoTWkEkiEwwPQOiMnE"
      }
    });
  }

render() {
  let childrenWithProps = React.Children.map(this.props.children, child => {
    return React.cloneElement(child, {bands: this.state.bands, handleSaveUser: this.saveUser})
  });
  return (
      <div className="wrapper">
        <header>
          <h1> bands!</h1>
          <nav>
            <Link to="/profile">Profile</Link>
            <Link to="/search">Search</Link>
            <Link to="/login">Login</Link>
          </nav>
        </header>
        {childrenWithProps}
      </div>
    )
  }
};

export default App;
