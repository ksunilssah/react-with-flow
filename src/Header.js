// @flow
import React, { Component } from 'react';

type Props = {
  title: string,
  num?: number,
  arr: Array<number>
};

class Header extends Component<Props> {
  static defaultProps = {
    num: 10,
    title: 'just an flow test'
  };
  render() {
    return (
      <header>
        <h1>
          {this.props.title} {this.props.num}
        </h1>
        <h2>{this.props.arr.map(item => item)}</h2>
      </header>
    );
  }
}

export default Header;
