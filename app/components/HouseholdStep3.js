import React from 'react';

import Button from './Button';
import Form from './Form';
import SideBar from './SideBar';

import TextInput from './TextInput';
import Toggle from './Toggle';
import CheckBox from './CheckBox';
import DropDown from './DropDown';

export default class HouseholdStep3 extends React.Component {
  render() {
    return (
      <div>
        <Form>
          <h1>
            Do any of the children in the household have income to report?
          </h1>
          <Button
            className="u-align-left"
            type="info"
            text="Who qualifies as child income?"
          />
          <div className="form__group">
            <Toggle/>
          </div>
          <p>Total child income (combined for all children in household):</p>
          <div className="form__group">
            <TextInput label="Total Earnings ($)"/>
            <DropDown lbael="Monthly"/>
          </div>
          <Button linkTo="/household/step-4" text="Next" />
        </Form>

        <SideBar>

        </SideBar>
      </div>
    );
  }
}
