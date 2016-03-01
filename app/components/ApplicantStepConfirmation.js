import React from 'react';
import Button from './Button';

export default class ApplicantStepConfirmation extends React.Component {
  render() {
    return (
      <div className="page-content">
        confirmation
        <Button linkTo="/household" text="Confirm" />
      </div>
    );
  }
}
