import React from 'react';
import './_Button.scss';
import { browserHistory } from 'react-router';

export default class Home extends React.Component {
  static propTypes = {
    text: React.PropTypes.string.isRequired,
    linkTo: React.PropTypes.string,
    handleClick: React.PropTypes.func,
  }

  _handleClick = () => {
    if (this.props.linkTo) browserHistory.push(this.props.linkTo);
    if (this.props.handleClick) this.props.handleClick();
  }

  render() {
    return (
      <button className="button button--primary" onClick={this._handleClick}>
        { this.props.text }
      </button>
    );
  }
}
