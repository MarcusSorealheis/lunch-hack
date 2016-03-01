import React from 'react';

import Button from './Button';
import Form from './Form';
import SideBar from './SideBar';

import TextInput from './TextInput';
import Toggle from './Toggle';
import CheckBox from './CheckBox';
import DropDown from './DropDown';

export default class HouseholdStepConfirmation extends React.Component {
  render() {
    return (
      <div className="page-content">
        <Form>
          HouseholdStepConfirmation
          <Button linkTo="/contact" text="Confirm" />
        </Form>

        <SideBar>

        </SideBar>
      </div>
    );
  }
}
