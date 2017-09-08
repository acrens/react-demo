import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      title: '这是标题',
      plan: '这是一个漂亮的计划'
    };
  }

  changeTitle(e) {
    const { currentTarget: { innerHTML } } = e;
    this.setState({
      title: innerHTML
    });
  }

  changePlan(e) {
    const { currentTarget: { value } } = e;
    this.setState({
      plan: value
    });
  }

  render() {
    const { name } = this.props;

    return (
      <div>
        <p>{ this.state.title }</p>
        <p onClick={ this.changeTitle.bind(this) }>{ name }</p>
        <p>{ this.state.plan }</p>
        <input type="text" onInput={ this.changePlan.bind(this) } value={this.state.plan} />
      </div>
      );
  }
}

export default Header;
