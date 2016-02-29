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
          <h1>
            List and report earnings for all adults (age 18+) in household
          </h1>
          <Button
            className="u-align-left"
            type="info"
            text="Who qualifies as a household member?"
          />

          <div className="form__body [ col col--1-1 ]">
            <div className="form__group">
              <TextInput label="First Name" />
              <TextInput label="MI" type="short" width="50px" />
              <TextInput label="Last Name" />
            </div>
            <div className="form__group">
              <p>Earnings from work</p>
              <CheckBox label="No earnings from work to report" />
              <TextInput label="Total Earnings ($)" type="short" width="100px" />
              <DropDown label="Monthly" />
            </div>
            <div className="form__group">
              <p>Public assistance</p>
              <CheckBox label="No public assistance recieved" />
              <TextInput label="Total Earnings ($)" type="short" width="100px" />
              <DropDown label="Monthly" />
            </div>
            <div className="form__group">
              <p>All other income</p>
              <CheckBox label="No other income to report" />
              <TextInput label="Total Earnings ($)" type="short" width="100px" />
              <DropDown label="Monthly" />
            </div>
          </div>          
          <Button type="secondary" text="Add additional adult" />
          <Button linkTo="/household/step-3" text="Next" />
        </Form>

        <SideBar>

        </SideBar>
      </div>
    );
  }
}
