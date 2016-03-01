import React from 'react';
import './_CheckBox.scss';
import classNames from 'classnames';

export default class CheckBox extends React.Component {
  static propTypes = {
    label: React.PropTypes.string,
    className: React.PropTypes.string,
    width: React.PropTypes.string,
    value: React.PropTypes.bool,
    onChange: React.PropTypes.func,
  };

  render() {
    const containerClasses = classNames(
      'checkbox-container',
      this.props.className,
    );

    const checkboxClasses = classNames(
      'checkbox',
      { 'checkbox--is-checked': this.props.value },
    );

    return (
      <div
        className={containerClasses}
        style={{ width: this.props.width }}
        onClick={() => this.props.onChange(!this.props.value)}
      >
        <p>
          <span className={checkboxClasses}></span>
          {this.props.label}
        </p>
      </div>
    );
  }
}
