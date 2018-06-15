import React, { Component } from 'react';

class ListItem extends Component {
  
  render() {
    const metaData = this.props.flight;
    const {Alt, Spd, Mdl} = metaData;
    return (
        <tr>
            <td>{metaData.Type}</td>
            <td>{Alt} ft</td>
            <td>{Spd} kts</td>
            <td>{Mdl} </td>
        </tr>    
    );
  }

}

export default ListItem;