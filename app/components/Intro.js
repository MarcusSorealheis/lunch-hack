import React from 'react';
import Button from './Button';

export default class Intro extends React.Component {
  render() {
    return (
      <div>
        <div>Apply for free and reduced price meals</div>
        <Button linkTo="/applicant" text="Apply" />
      </div>
    );
  }
}
