import React from 'react';

import Button from './Button';
import Form from './Form';
import SideBar from './SideBar';

import TextInput from './TextInput';
import Toggle from './Toggle';
import CheckBox from './CheckBox';
import DropDown from './DropDown';

export default class ApplicantStep1 extends React.Component {
  render() {
    return (
      <div>
        <Form>
          <h1>
            List <span className="u-strong">all</span> child household members
          </h1>
          <p>This includes infants, children, and students (up to and including grade 12)</p>
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
              <Toggle label="Is this child a student?" />
            </div>
            <div className="form__group">
              <p>Is this child any of the following? Select all that apply.</p>
              <Button
                className="u-pull-left"
                type="info"
                text="More information on these programs"
              />
              <div className="col--1-1">
                <div className="col col--1-2">
                  <CheckBox label="Foster" />
                  <CheckBox label="Migrant" />
                  <CheckBox label="Homeless" />
                </div>
                <div className="col col--1-2">
                  <CheckBox label="Head start" />
                  <CheckBox label="Runaway" />
                </div>
              </div>
            </div>
            <div className="form__group">
              <h2>Children’s Racial & Ethnic Identities Question</h2>
              <p>
                We are required to ask for information about your children’s race and ethnicity.
                This information is important and helps to make sure we are fully serving our
                community. Responding to this section is optional and does not affect your
                children’s eligibility for free or reduced price meals.
              </p>
              <Button type="info" text="USDA Non-Discrimination Agreement" />
            </div>
            <div className="form__group">
              <Toggle label="Is this child a Hispanic or Latino? (Optional)" />
            </div>
            <div className="form__group">
              <p>Race: Select all that apply:</p>
              <div className="col--1-1">
                <div className="col col--1-2">
                  <CheckBox label="American Indian or Alaskan Native" />
                  <CheckBox label="Black or African American" />
                  <CheckBox label="White" />
                </div>
                <div className="col col--1-2">
                  <CheckBox label="Asian" />
                  <CheckBox label="Native Hawaiin or Other Pacific Islander" />
                </div>
              </div>
            </div>
          </div>
          <Button type="secondary" text="Add additional child" />
          <Button linkTo="/applicant/step-2" text="Next" />
        </Form>

        <SideBar>
          SideBar
        </SideBar>
      </div>
    );
  }
}