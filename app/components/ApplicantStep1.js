import React from 'react';

import Button from './Button';
import Form from './Form';
import SideBar from './SideBar';

import TextInput from './TextInput';
import Toggle from './Toggle';
import CheckBox from './CheckBox';
import DropDown from './DropDown';

export default class ApplicantStep1 extends React.Component {
  static propTypes = {
    kids: React.PropTypes.array,
    addChild: React.PropTypes.func,
    updateChild: React.PropTypes.func,
  }

  _updateNestedValue = (kid, fieldName, key, val) => {
    const field = this.props.kids[kid][fieldName];
    field[key] = val;
    this.props.updateChild(kid, { field });
  }

  _updateValue = (kid, key, val) => {
    const newVal = {};
    newVal[key] = val;
    this.props.updateChild(kid, newVal);
  }

  _renderKid = (kid, index) => (
    <div className="form__body [ col col--1-1 ]" key={index}>
      <div className="form__group">
        <TextInput
          label="First Name"
          onChange={(val) => this._updateNestedValue(index, 'name', 'first', val)}
          value={kid.name.first}
        />
        <TextInput
          label="MI" type="short"
          width="50px"
          onChange={(val) => this._updateNestedValue(index, 'name', 'middle', val)}
          value={kid.name.middle}
        />
        <TextInput
          label="Last Name"
          onChange={(val) => this._updateNestedValue(index, 'name', 'last', val)}
          value={kid.name.last}
        />
      </div>
      <div className="form__group">
        <Toggle
          label="Is this child a student?"
          value={kid.student}
          onChange={val => this._updateValue(index, 'student', val)}
        />
      </div>
      <div className="form__group">
        <p>Is this child any of the following? Select all that apply.</p>
        <Button
          className="u-align-left"
          type="info"
          text="More information on these programs"
        />
        <div className="col--1-1">
          <div className="col col--1-2">
            <CheckBox
              label="Foster"
              value={kid.status['Foster']}
              onChange={val => this._updateNestedValue(index, 'status', 'Foster', val)}
            />
            <CheckBox
              label="Migrant"
              value={kid.status['Migrant']}
              onChange={val => this._updateNestedValue(index, 'status', 'Migrant', val)}
            />
            <CheckBox
              label="Homeless"
              value={kid.status['Homeless']}
              onChange={val => this._updateNestedValue(index, 'status', 'Homeless', val)}
            />
          </div>
          <div className="col col--1-2">
            <CheckBox
              label="Head start"
              value={kid.status['Head start']}
              onChange={val => this._updateNestedValue(index, 'status', 'Head start', val)}
            />
            <CheckBox
              label="Runaway"
              value={kid.status['Runaway']}
              onChange={val => this._updateNestedValue(index, 'status', 'Runaway', val)}
            />
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
        <Toggle
          label="Is this child a Hispanic or Latino? (Optional)"
          value={kid.hispanic}
          onChange={val => this._updateValue(index, 'hispanic', val)}
        />
      </div>
      <div className="form__group">
        <p>Race: Select all that apply:</p>
        <div className="col--1-1">
          <div className="col col--1-2">
            <CheckBox
              label="American Indian or Alaskan Native"
              value={kid.ethnicity['American Indian or Alaskan Native']}
              onChange={val => this._updateNestedValue(index, 'ethnicity', 'American Indian or Alaskan Native', val)}
            />
            <CheckBox
              label="Black or African American"
              value={kid.ethnicity['Black or African American']}
              onChange={val => this._updateNestedValue(index, 'ethnicity', 'Black or African American', val)}
            />
            <CheckBox
              label="White"
              value={kid.ethnicity['White']}
              onChange={val => this._updateNestedValue(index, 'ethnicity', 'White', val)}
            />
          </div>
          <div className="col col--1-2">
            <CheckBox
              label="Asian"
              value={kid.ethnicity['Asian']}
              onChange={val => this._updateNestedValue(index, 'ethnicity', 'Asian', val)}
            />
            <CheckBox
              label="Native Hawaiin or Other Pacific Islander"
              value={kid.ethnicity['Native Hawaiin or Other Pacific Islander']}
              onChange={val => this._updateNestedValue(index, 'ethnicity', 'Native Hawaiin or Other Pacific Islander', val)}
            />
          </div>
        </div>
      </div>
    </div>
  );

  render() {
    return (
      <div className="page-content">
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
          {this.props.kids.map(this._renderKid)}
          <div>
            <Button type="secondary" text="Add additional child" onClick={this.props.addChild} />
          </div>
          <div>
            <Button linkTo="/applicant/step-2" text="Next" />
          </div>
        </Form>

        <SideBar>
          SideBar
        </SideBar>
      </div>
    );
  }
}
