import React from 'react';
import Button from './Button';
import './_Intro.scss';
import classNames from 'classnames';

export default class TermsAndConditions extends React.Component {
  static propTypes = {
    show: React.PropTypes.bool,
  };

  render() {
    const classes = classNames(
      'terms-and-conditions',
      'u-anim--very-fast',
      { 'terms-and-conditions--hide': !this.props.show }
    );

    return (
      <div className={classes}>
        <div className="row row--centered">
          <Button className="u-center" linkTo="/applicant/step-1" text="START" />
        </div>
      </div>
    );
  }
}
