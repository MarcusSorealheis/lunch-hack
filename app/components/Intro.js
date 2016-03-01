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
      </div>
    );
  }
}
