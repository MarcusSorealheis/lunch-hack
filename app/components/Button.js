import React from 'react';
import './_Button.scss';
import { browserHistory } from 'react-router';
import classNames from 'classnames';

export default class Home extends React.Component {
  static propTypes = {
    text: React.PropTypes.string.isRequired,
    linkTo: React.PropTypes.string,
    handleClick: React.PropTypes.func,
    type: React.PropTypes.string,
  };

  static defaultProps = {
    type: 'primary',
  };

  _handleClick = () => {
    if (this.props.linkTo) browserHistory.push(this.props.linkTo);
    if (this.props.handleClick) this.props.handleClick();
  }

  render() {
    const buttonClasses = classNames(
      'button',
      {
        'button--primary': this.props.type === 'primary',
        'button--secondary': this.props.type === 'secondary',
      },
    );

    return (
      <button className={buttonClasses} onClick={this._handleClick}>
        { this.props.text }
      </button>
    );
  }
}
