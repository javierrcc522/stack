import React, { Component } from 'react';
import { connect } from 'react-redux';


class LibraryList extends Component {
  render() {
    return;
  }
}

export default connect()(LibraryList);

//the one and only way in which we reach into our redux state and acess some amount of data
//use a connect helper to access some piece of data
