import React from 'react';
import Button from './Button';
import TermsAndConditions from './TermsAndConditions';
import './_Intro.scss';

export default class Intro extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showTandC: false,
    };
  }

  render() {
    return (
      <div>
        <TermsAndConditions show={this.state.showTandC}/>
        <div className="row row--centered intro-page">
          <div className="col col--2-3">
            <span className="mega u-strong u-uppercase">
              Apply for <br />
              free and reduced price meals <br />
              <br />
            </span>
            <Button className="u-center" text="APPLY (5-10 MINS)" onClick={() => this.setState({ showTandC: true })} />
          </div>
        </div>
        <div className="about">
            <div className="col col--2-3 image" />
            <div className="col col---3">
              <h1>Apply in 4 simple steps</h1>
              <p>Applying is easy. We just need information on:
              <ul>
                <li>The applicant(s)</li>
                <li>Your household</li>
                <li>Contact information</li>
                <li>Review & Sign</li>
              </ul>
              </p>
            </div>
        </div>
      </div>
    );
  }
}
