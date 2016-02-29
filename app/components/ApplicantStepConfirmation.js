import React from 'react';
import Button from './Button';

export default class ApplicantStepConfirmation extends React.Component {
  render() {
    return (
      <div>
        confirmation
        <Button linkTo="/household" text="Confirm" />
      </div>
    );
  }
}
