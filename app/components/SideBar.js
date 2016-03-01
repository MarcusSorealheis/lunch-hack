import React from 'react';
import './_Sidebar.scss';

export default class SideBar extends React.Component {
  static propTypes = {
    children: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.element,
      React.PropTypes.arrayOf(React.PropTypes.element),
    ]),
  }

  render() {
    return (
      <div className="sidebar [ col col--1-3 ] u-hide@lt-large">
        {this.props.children}
      </div>
    );
  }
}
