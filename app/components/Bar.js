import React from 'react';
import { Link } from 'react-router';

export default class Bar extends React.Component {
  render() {
    return (
      <div>
        <div>Bar</div>
        <Link to="/">go Home</Link>
        <br />
        <Link to="/foo">go to Foo</Link>
      </div>
    );
  }
}
