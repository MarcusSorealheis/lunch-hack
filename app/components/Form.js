import React from 'react';
import './_Form.scss';

export default class Form extends React.Component {
  static propTypes = {
    children: React.PropTypes.element.isRequired,
  }

  render() {
    return (
      <div className="form [ col col--2-3 ]">
        {this.props.children}
      </div>
    );
  }
}
