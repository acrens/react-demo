import React, { Component } from 'react';

class Footer extends Component {
  render() {
    const { name } = this.props;

    return (
      <div>{ name }</div>
      );
  }
}

export default Footer;
