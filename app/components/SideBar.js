import React from 'react';
import './_Sidebar.scss';

export default class SideBar extends React.Component {
  static propTypes = {
    children: React.PropTypes.element.isRequired,
  }

  render() {
    return (
      <div className="sidebar [ col col--1-3 ]">
        {this.props.children}
      </div>
    );
  }
}
