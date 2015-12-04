import React from 'react';

class Bands extends React.Component {
  render () {
    let bands = this.props.bands.map( band => {
      return(
        <Band key = {band.objectId}
              name = {band.name} />
      )
    });
    return (
      <ul>
        {bands}
      </ul>
    )
  }
}

export default Bands;
