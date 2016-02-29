import React from 'react';
import './_TextInput.scss';
import { TextField } from 'material-ui/lib';
import classNames from 'classnames';

export default class TextInput extends React.Component {
  static propTypes = {
    label: React.PropTypes.string,
    className: React.PropTypes.string,
    width: React.PropTypes.string,
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

    return types.map(type => `text-input--${type}`);
  }

  render() {
    const classes = classNames(
      'text-input',
      ...this._getTypeClasses(),
      this.props.className,
    );

    return (
      <div className={classes} style={{ width: this.props.width }}>
        <TextField
          floatingLabelText={this.props.label}
          style={{ width: '100%', paddingLeft: '8px' }}
          underlineStyle={{ bottom: 0, left: 0 }}
        />
      </div>
    );
  }
}
