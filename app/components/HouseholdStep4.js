import React from 'react';

import Button from './Button';
import Form from './Form';
import SideBar from './SideBar';

import TextInput from './TextInput';
import Toggle from './Toggle';
import CheckBox from './CheckBox';
import DropDown from './DropDown';

export default class HouseholdStep4 extends React.Component {
  render() {
    return (
      <div>
        <Form>
          <h1>
            Enter the last 4 digits of  the social security number (SSN) of any adult in the household
          </h1>

          <div className="form__group">
            <p>XXX-XX-</p><TextInput label="XXXX" type="short" width="70px" />
            <CheckBox label="No social security number" />
            <p>
              Please note: United States citizenship or immigration status is not a condition of eligibility for free and reduced price benefits.
            </p>
          </div>
          <Button
            className="u-align-left"
            type="info"
            text="More about Social Security Numbers and eligibility"
          />
          <Button linkTo="/household/step-5" text="Next" />
        </Form>

        <SideBar>

        </SideBar>
      </div>
    );
  }
}
