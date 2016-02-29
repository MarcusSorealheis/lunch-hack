import React from 'react';

export default class Form extends React.Component {
  static propTypes = {
    children: React.PropTypes.element.isRequired,
  }

  render() {
    return (
      <div className="col col--2-3">
        {this.props.children}
      </div>
    );
  }
}
