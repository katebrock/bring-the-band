import React from 'react';
import $ from 'jquery';
import {Link} from 'react-router';


class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      artists: []
    }
  }

  handleSearchData(response) {
    this.setState({
      artists: response.artists.items
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    let q = this.refs.search.value;

    $.ajax({
      url: `https://api.spotify.com/v1/search?q=${q}&type=artist`,
      type: 'GET',
      success: this.handleSearchData.bind(this)
    });
  }

  render () {
    let items = this.state.artists.map( artist => {
      let img;
      if (artist.images.length) {
          img = (<img src={artist.images[2].url} />)
      }
      return (
        <div key={artist.id}>
          <h2>{artist.name}</h2>
          {img}
        </div>
      )
    });
    return (
      <div>
      <div className="searchbar">
        <input type="text" className="search" placeholder="Search" ref="search"/>
        <input type="button" value="go lookin' for" onClick={this.handleSubmit.bind(this)}/>
      </div>

      {items}
      </div>
    )
  }
}

export default Search;
