import React from 'react';
import Button from './Button';
import Form from './Form';
import ChildrenConfirmation from './ChildrenConfirmation';

export default class ApplicantStepConfirmation extends React.Component {
  static propTypes = {
    kids: React.PropTypes.array,
  }

  render() {
    return (
      <div className="page-content">
        <Form>
          <h1>First part done! Now, a quick review... </h1>
          <p>Accuracy matters, and we want to make sure your application is processed as quickly as possible.</p>
          <ChildrenConfirmation kids={this.props.kids} />
          <Button className="u-pull-left" linkTo="/household/step-1" text="Confirm" />
          <Button className="u-pull-left" linkTo="/applicant/step-1" text="Go back and edit" type="secondary" />
        </Form>
      </div>
    );
  }
}
