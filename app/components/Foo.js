import React from 'react';
import { Link } from 'react-router';

export default class Foo extends React.Component {
  render() {
    return (
      <div>
        <div> Foo </div>
        <Link to="/">go Home!</Link>
        <br />
        <Link to="/bar">go to Bar</Link>
      </div>
    );
  }
}
