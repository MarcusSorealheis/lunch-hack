import React from 'react';

import Button from './Button';
import Form from './Form';
import SideBar from './SideBar';

import TextInput from './TextInput';
import Toggle from './Toggle';
import CheckBox from './CheckBox';
import DropDown from './DropDown';

export default class HouseholdStep1 extends React.Component {
  render() {
    return (
      <div>
        <Form>
          <h1>
            Does your household currently participate in SNAP, TANF, or FDPIR?
          </h1>
          <Button
            className="u-align-left"
            type="info"
            text="Who qualifies as a household member?"
          />

          <div className="form__body [ col col--1-1 ]">
            <div className="form__group">
              <Toggle/>
            </div>
            <div className="form__group">
              <TextInput label="Case Number" type="short" width="100px" />
            </div>
          </div>
          <Button linkTo="/household/step-2" text="Next" />
        </Form>

        <SideBar>

        </SideBar>
      </div>
    );
  }
}
