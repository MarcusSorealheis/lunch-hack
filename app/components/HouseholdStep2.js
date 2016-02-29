import React from 'react';

import Button from './Button';
import Form from './Form';
import SideBar from './SideBar';

import TextInput from './TextInput';
import Toggle from './Toggle';
import CheckBox from './CheckBox';
import DropDown from './DropDown';

export default class HouseholdStep2 extends React.Component {
  render() {
    return (
      <div>
        <Form>
          HouseholdStep2
          <Button linkTo="/household/step-3" text="Next" />
        </Form>

        <SideBar>

        </SideBar>
      </div>
    );
  }
}
