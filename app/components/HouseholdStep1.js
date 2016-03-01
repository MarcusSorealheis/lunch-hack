import React from 'react';

import Button from './Button';
import Form from './Form';
import SideBar from './SideBar';

import TextInput from './TextInput';
import Toggle from './Toggle';
import CheckBox from './CheckBox';
import DropDown from './DropDown';

export default class HouseholdStep1 extends React.Component {
  static propTypes = {
    addAdult: React.PropTypes.func,
    updateHousehold: React.PropTypes.func,
    updateHouseholdAdult: React.PropTypes.func,
    household: React.PropTypes.object,
  }

  render() {
    return (
      <div className="page-content">
        <Form>
          <h1>
            Does your household currently participate in SNAP, TANF, or FDPIR?
          </h1>
          <Button
            className="u-align-left"
            type="info"
            text="More about these programs"
          />
          <div className="form__group">
            <Toggle
              value={this.props.household.snap}
              onChange={val => this.props.updateHousehold({ snap: val })}
            />
          </div>
          <div className="form__group">
            <TextInput
              label="Case Number"
              type="short"
              value={this.props.household.caseNumber}
              onChange={val => this.props.updateHousehold({ caseNumber: val })}
            />
          </div>
          <div>
            <Button linkTo="/household/step-2" className="u-align-left" text="Next" />
          </div>
        </Form>

        <SideBar>
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

          {/* FUN FACT ENDS RAWR CATTT :D MEOW MEOW MEOW */}

          <div className="side-textblock">
            <h2>
              Other assistance programs
            </h2>
            <small>
              Receipt of benefits by or participation of any household member from certain Assistance Programs conveys eligibility for free school meals to all children in the household. 
              <br />
              When certifying eligibility based on participation in these programs, determinations must be made with appropriate case numbers submitted on the application.
              <br />
              (Click to expand definitions)
            </small>
          </div>
          <div className="accordian-textblock">
            <h2>SNAP</h2>
            <small>
              SNAP is the Supplemental Nutrition Assistance Program (formerly known as food stamps). SNAP is the largest program in the domestic hunger safety net, serving millions of individuals annually. 
            </small>
          </div>
          <div className="accordian-textblock">
            <h2>TANF</h2>
            <small>
              The Temporary Assistance for Needy Families (TANF) program is designed to help needy families achieve self-sufficiency.
            </small>
          </div>
          <div className="accordian-textblock">
            <h2>FDRIR</h2>
            <small>
              The Food Distribution Program on Indian Reservations (FDPIR) is a Federal program that provides USDA foods to low-income households, including the elderly, living on Indian reservations, and to Native American families residing in designated areas near reservations and in the State of Oklahoma.
            </small>
          </div>

        </SideBar>
      </div>
    );
  }
}
