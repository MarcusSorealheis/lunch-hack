import React from 'react';
import Button from './Button';
import './_Intro.scss';

export default class Intro extends React.Component {
  render() {
    return (
      <div className="intro-page">
        <div className="row row--centered">
          <div className="col col--2-3">
            <span className="mega u-strong u-uppercase">
              Apply for <br />
              free and reduced price meals <br />
              <br />
            </span>
            <Button className="u-center" linkTo="/applicant/step-1" text="APPLY (5-10 MINS)" />
          </div>
        </div>
      </div>
    );
  }
}
