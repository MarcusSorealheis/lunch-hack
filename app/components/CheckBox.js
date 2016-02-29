import React from 'react';
import './_CheckBox.scss';
import { Checkbox } from 'material-ui/lib';
import classNames from 'classnames';

export default class CheckBox extends React.Component {
  static propTypes = {
    label: React.PropTypes.string,
    className: React.PropTypes.string,
    width: React.PropTypes.string,
  };

  render() {
    const classes = classNames(
      'checkbox',
      this.props.className,
    );

    return (
      <div className={classes} style={{ width: this.props.width }}>
        <Checkbox label={this.props.label} />
      </div>
    );
  }
}
