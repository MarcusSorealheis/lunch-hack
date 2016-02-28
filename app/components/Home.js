import React from 'react';
import { Link } from 'react-router';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <div>Home</div>
        <Link to="/foo">go to Foo</Link>
        <br />
        <Link to="/bar">go to Bar</Link>
      </div>
    );
  }
}
