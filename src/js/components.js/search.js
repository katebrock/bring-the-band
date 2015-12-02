import React from 'react';
import $ from 'jquery';
import {Link} from 'react-router';


class Search extends React.Component {
handleSearchData = function()
handleSubmit(e) {
  e.preventDefault();

  $.ajax({
    url: 'https://api.spotify.com/v1/search',
    type: 'GET'
  }).then(this.handleSearchData);
}

  render () {
    return (

    )
  }
}

export default Search;
