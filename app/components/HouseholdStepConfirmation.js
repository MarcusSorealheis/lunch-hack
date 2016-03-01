import React from 'react';

import HouseholdConfirmation from './HouseholdConfirmation';
import Button from './Button';
import Form from './Form';

export default class HouseholdStepConfirmation extends React.Component {
  static propTypes = {
    kids: React.PropTypes.array,
    household: React.PropTypes.object,
  }

  render() {
    return (
      <div className="page-content">
        <Form>
          <h1>Almost there! Please review the information below:</h1>
          <p>Accuracy matters, and we want to make sure your application is processed as quickly as possible.</p>
          <HouseholdConfirmation kids={this.props.kids} household={this.props.household} />
          <Button className="u-pull-left" linkTo="/contact" text="Confirm" />
          <Button className="u-pull-left" linkTo="/household/step-1" text="Go back and edit" type="secondary" />
        </Form>
      </div>
    );
  }
}
