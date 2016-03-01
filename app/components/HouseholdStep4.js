import React from 'react';

import Button from './Button';
import Form from './Form';
import SideBar from './SideBar';

import TextInput from './TextInput';
import Toggle from './Toggle';
import CheckBox from './CheckBox';
import DropDown from './DropDown';

export default class HouseholdStep4 extends React.Component {
  static propTypes = {
    addAdult: React.PropTypes.func,
    updateHousehold: React.PropTypes.func,
    updateHouseholdAdult: React.PropTypes.func,
    household: React.PropTypes.object,
  }

  constructor(props) {
    super(props);
    this.state = {
      sidebar: this._renderIntro,
    };
  }

  _renderIntro = () => (
    <div className="side-textblock">
      <h2>
        Did you know...
      </h2>
      <small>
        Children and families tend to consume more of the foods that they have easy access to. Keep fruits and vegetables within reach and you’re more likely to make healthy choices.
        <br />
        Easy tips:
        <ul>
          <li><small>
            Replace a candy dish with a fruit bowl
          </small></li>
          <li><small>
            Store tempting foods like cookies, chips,or ice crea out of immediate eyesight 
          </small></li>
        </ul>
      </small>
      <div>
        <Button
          className="u-align-left"
          type="info"
          text="Get more healthy tips"
        />
      </div>
    </div>
  )

  render() {
    return (
      <div className="page-content">
        <Form>
          <h1>
            Enter the last 4 digits of  the social security number (SSN) of an adult in the household
          </h1>

          <div className="form__group">
            <TextInput
              label="XXXX"
              type="short"
              value={this.props.household.SSN.last4}
              onChange={val => {
                const newVal = this.props.household.SSN;
                newVal.last4 = val;
                this.props.updateHousehold({ newVal });
              }}
            />
            <CheckBox
              label="No social security number"
              value={this.props.household.SSN.hasNone}
              onChange={val => {
                const newVal = this.props.household.SSN;
                newVal.hasNone = val;
                this.props.updateHousehold({ newVal });
              }}
            />
            <p>
              Please note: United States citizenship or immigration status is not a condition of eligibility for free and reduced price benefits.
            </p>
          </div>
          <div>
            <Button linkTo="/household/step-5" text="Next" />
          </div>
        </Form>

        <SideBar>
          {this.state.sidebar()}
        </SideBar>
      </div>
    );
  }
}
