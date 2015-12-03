import React from 'react';
import $ from 'jquery';
import {Link} from 'react-router';


class Search extends React.Component {
handleSearchData = function()
handleSubmit(e) {
  e.preventDefault();

  $.ajax({
    url: 'https://api.spotify.com/v1/search?q=tina&type=artist',
    type: 'GET'
    success: this.handleSearchData
  });
}

  render () {
    return (
      <div className="searchbar">
        <input type="text" className="search" placeholder="Search" />
        <input type="button" value="go lookin' for" />
      </div>
    )
  }
}

export default Search;
