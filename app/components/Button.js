import React from 'react';
import './_Button.scss';
import { browserHistory } from 'react-router';
import classNames from 'classnames';

export default class Home extends React.Component {
  static propTypes = {
    text: React.PropTypes.string.isRequired,
    linkTo: React.PropTypes.string,
    handleClick: React.PropTypes.func,
    type: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.array,
    ]),
  };

  static defaultProps = {
    type: 'primary',
  };

  _getTypeClasses = () => {
    const types = typeof this.props.type === 'string'
      ? [this.props.type] : this.props.type;

    return types.map(type => `button--${type}`);
  }

  _handleClick = () => {
    if (this.props.linkTo) browserHistory.push(this.props.linkTo);
    if (this.props.handleClick) this.props.handleClick();
  }

  render() {
    const buttonClasses = classNames(
      'button',
      ...this._getTypeClasses(),
    );

    return (
      <button className={buttonClasses} onClick={this._handleClick}>
        { this.props.text }
      </button>
    );
  }
}
