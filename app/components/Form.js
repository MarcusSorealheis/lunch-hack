import React from 'react';
import './_Form.scss';

export default class Form extends React.Component {
  static propTypes = {
    children: React.PropTypes.oneOfType([
      React.PropTypes.element,
      React.PropTypes.arrayOf(React.PropTypes.element),
    ]).isRequired,
  }

  render() {
    return (
      <div className="form [ col col--1-1 col--2-3@large ]">
        {this.props.children}
      </div>
    );
  }
}
