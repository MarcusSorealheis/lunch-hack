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
    removeChild: React.PropTypes.func,
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
    <div className="form__body [ col col--1-1 ]" key={kid.id}>
      {
        index > 0
          ? <div className="form__remove-button" onClick={() => this.props.removeChild(index)}></div>
          : null
      }
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
        <h2>Children’s Racial & Ethnic Identities Questions</h2>
        <small>
          We are required to ask for information about your children’s race and ethnicity.
          This information is important and helps to make sure we are fully serving our
          community. Responding to this section is optional and does not affect your
          children’s eligibility for free or reduced price meals.
        </small>
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
          <div className="side-textblock">
            <h2>
              Did you know...
            </h2>
            <small>
              Have you heard of the Presidential Active Lifestyle Award (PALA+) challenge? It lets adopt  simple ways to increase your daily activity and improve your eating habits. You’ll see a healthier you in just six weeks.
              <br />
              <br />
              PALA+ has teamed up with the Biggest Loser.  In a special two-part episode of the series, Mrs. Obama announced that the contestants would travel to the White House and participate in a first-ever White House/Biggest Loser workout.
            </small>
            <div>
              <Button
                className="u-align-left"
                type="info"
                text="Learn More"
                linkTo="https://www.presidentschallenge.org/challenge/active/"
              />
            </div>
            
            <div className="side-textblock">
              <h2>
                Special applicant statuses
              </h2>
              <small>
                Children that are determined to meet these definitions (foster, homeless, migrant, federal head start, runaway) are eligible for free meals. This is referred to as categorical eligibility.
                <br />
                <br />
                (Click below to expand definitions)
              </small>
            </div>

            <div className="accordian-textblock">
              <h2>
                Foster Child
              </h2>
              <small>
                A child who is formally placed by a court or a State child welfare agency. 
              </small>
            </div>
            <div className="accordian-textblock">
              <h2>
                Head Start
              </h2>
              <small>
                A child that is enrolled in a Federal Head Start or State-funded pre-kindergarten program that uses eligibility criteria that is identical or more stringent than Federal Head Start.
              </small>
            </div>
            <div className="accordian-textblock">
              <h2>
                Homeless
              </h2>
              <small>
                A child identified by the Local Education Agency (LEA) homeless liaison or by an official of a homeless shelter as lacking a fixed, regular, and adequate nighttime residence.
              </small>
            </div>
            <div className="accordian-textblock">
              <h2>
                Migrant
              </h2>
              <small>
                A child identified as a migrant by the State or local Migrant Education Program coordinator or the local educational liaison, or other individual identified by FNS.
              </small>
            </div>
          </div>


          <div className="side-textblock">
            <h2>
              USDA Non-Discrimination Statement
            </h2>
            <small>
              In accordance with Federal civil rights law and U.S. Department of Agriculture (USDA) civil rights regulations and policies, the USDA, its Agencies, offices, and employees, and institutions participating in or administering USDA programs are prohibited from discriminating based on race, color, national origin, sex, disability, age, or reprisal or retaliation for prior civil rights activity in any program or activity conducted or funded by USDA. Persons with disabilities who require alternative means of communication for program information (e.g. Braille, large print, audiotape, American Sign Language, etc.), should contact the Agency (State or local) where they applied for benefits. Individuals who are deaf, hard of hearing or have speech disabilities may contact USDA through the Federal Relay Service at (800) 877-8339. Additionally, program information may be made available in languages other than English.
              <br />
              <br />
              To file a program complaint of discrimination, complete the USDA Program Discrimination Complaint Form, (AD-3027) found online at: http://www.ascr.usda.gov/complaint_filing_cust.html, and at any USDA office, or write a letter addressed to USDA and provide in the letter all of the information requested in the form. To request a copy of the complaint form, call (866) 632-9992. Submit your completed form or letter to USDA by:
              <br />
              (1) Mail: U.S. Department of Agriculture
              <br />
              Office of the Assistant Secretary for Civil Rights
              <br />
              1400 Independence Avenue, SW
              <br />
              Washington, D.C. 20250-9410; 
              <br />
              (2) Fax: (202) 690-7442; or
              <br />
              (3) Email: program.intake@usda.gov.
              <br />
              This institution is an equal opportunity provider.
            </small>
          </div>


          <div className="side-textblock">
            <h2>
              Who qulifies as a household member?
            </h2>
            <small>
              Anyone who is living with you and shares income and expenses, even if not related, and even if they do not have income of their own. This does not include people who live in the household, but are not supported by the household’s income and do not contribute income to your household.
            </small>
          </div>

        </SideBar>
      </div>
    );
  }
}
