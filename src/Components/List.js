import React, { Component } from 'react';
import ListItem from './ListItem';

class List extends Component {
    state = {
        data: [],
        sort: {
            column: null,
            direction: 'desc',
        }
    };

//function tu sort data in the table for column Altitude
onSort = (column) => (e) => {
    const direction = this.state.sort.column ? (this.state.sort.direction === 'asc' ? 'desc' : 'asc') : 'desc';
    const sortedData = this.state.data.sort((a, b) => {
        if (column === 'accountName') {
            const nameA = a.accountName.toUpperCase(); // ignore upper and lowercase
            const nameB = b.accountName.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        } else {
            return a.contractValue - b.contractValue;
        }
    });

    if (direction === 'desc') {
        sortedData.reverse();
    }

    this.setState({
        data: sortedData,
        sort: {
            column,
            direction,
        }
    });
};

//function to show up or down arrow on the table
setArrow = (column) => {
    let className = 'sort-direction';

    if (this.state.sort.column === column) {
        className += this.state.sort.direction === 'asc' ? ' asc' : ' desc';
    }
    return className;
};
    

  render() {
    return (
        <div className="plains">
            <table className="table table-hover" id="example">
              <thead>
                <tr>
                  <th scope="col">Type</th>
                  <th onClick={this.onSort('Alt')} scope="col">Altitude
                      <span className={this.setArrow('Alt')}></span>
                  </th>
                  <th scope="col">Speed</th>
                  <th scope="col">Model</th>
                </tr>
              </thead>
              <tbody>
                  {this.props.result.map((flight,index) => <ListItem flight={flight} key={index} onSelect={this.props.onSelect} />)}
              </tbody>
            </table>
        </div>
    );
  }

}

export default List;