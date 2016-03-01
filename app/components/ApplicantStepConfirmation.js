import React from 'react';
import Button from './Button';
import Form from './Form';

export default class ApplicantStepConfirmation extends React.Component {
  static propTypes = {
    kids: React.PropTypes.array,
  }

  _makeList = (obj) => Object.keys(obj).filter(key => obj[key]).join(', ');

  render() {
    return (
      <div className="page-content">
        <Form>
          <h1>First part done! Now, a quick review... </h1>
          <p>Accuracy matters, and we want to make sure your application is processed as quickly as possible.</p>
          <div className="form__body [ col col--1-1 ]">
            <p>
              You reported <span className="u-strong">{this.props.kids.length}</span> children in your household:
            </p>
            {
              this.props.kids.map((kid, index) => (
                <div className="form__group">
                  <div className="col col--1-12">
                    <h2 className="u-strong">{index + 1}.</h2>
                  </div>
                  <div className="col col--11-12">
                    <h2 className="u-strong u-uppercase">{kid.name.first} {kid.name.last}</h2>
                    <p className="u-titlecase">{kid.student ? 'Student' : 'Non-Student'}</p>
                    <p className="u-titlecase">{this._makeList(kid.status)}</p>
                    <p className="u-titlecase">{this._makeList(kid.ethnicity)}</p>
                  </div>
                </div>
              ))
            }
          </div>
          <Button className="u-pull-left" linkTo="/household/step-1" text="Confirm" />
          <Button className="u-pull-left" linkTo="/applicant/step-1" text="Go back and edit" type="secondary" />
        </Form>
      </div>
    );
  }
}
