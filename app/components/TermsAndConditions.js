import React from 'react';
import Button from './Button';
import './_Intro.scss';
import classNames from 'classnames';

export default class TermsAndConditions extends React.Component {
  static propTypes = {
    show: React.PropTypes.bool,
  };

  render() {
    const classes = classNames(
      'terms-and-conditions',
      'u-anim--very-fast',
      { 'terms-and-conditions--hide': !this.props.show }
    );

    return (
      <div className={classes}>
        <div className="row row--centered">
          <div className="col col--1-1 terms-text">
            <h1>Some things you should know...</h1>
            <p>Read through the use of information statement and USDA non-discrimination statement:</p>
          </div>

          <div className="col col--3-4 terms-scrollable">
            <b>USDA Non-Discrimination Statement</b>
              <br />
              <br />
            <small>
              In accordance with Federal civil rights law and U.S. Department of Agriculture (USDA) civil rights regulations and policies, the USDA, its Agencies, offices, and employees, and institutions participating in or administering USDA programs are prohibited from discriminating based on race, color, national origin, sex, disability, age, or reprisal or retaliation for prior civil rights activity in any program or activity conducted or funded by USDA.
              <br />
              <br />
              Persons with disabilities who require alternative means of communication for program information (e.g. Braille, large print, audiotape, American Sign Language, etc.), should contact the Agency (State or local) where they applied for benefits. Individuals who are deaf, hard of hearing or have speech disabilities may contact USDA through the Federal Relay Service at (800) 877-8339. Additionally, program information may be made available in languages other than English.
              <br />
              <br />
              To file a program complaint of discrimination, complete the USDA Program Discrimination Complaint Form, (AD-3027) found online at: http://www.ascr.usda.gov/complaint_filing_cust.html, and at any USDA office, or write a letter addressed to USDA and provide in the letter all of the information requested in the form. To request a copy of the complaint form, call (866) 632-9992. Submit your completed form or letter to USDA by:
              <br />(1) Mail: U.S. Department of Agriculture
              <br />Office of the Assistant Secretary for Civil Rights
              <br />1400 Independence Avenue, SW
              <br />Washington, D.C. 20250-9410; 
              <br />
              <br />(2) Fax: (202) 690-7442; or
              <br />(3) Email: program.intake@usda.gov.
              <br />This institution is an equal opportunity provider.
              <br />
              <br />
              <br />
            </small>
            <b>Use of Information Statement</b>
              <br />
              <br />
            <small>
              “The Richard B. Russell National School Lunch Act requires the information on this application. You do not have to give the information, but if you do not submit all needed information, we cannot approve your child for free or reduced price meals. You must include the last four digits of the social security number of the adult household member who signs the application. The social security number is not required when you apply on behalf of a foster child or you list a Supplemental Nutrition Assistance Program (SNAP), Temporary Assistance for Needy Families (TANF) Program or Food Distribution Program on Indian Reservations (FDPIR) case number or other FDPIR identifier for your child or when you indicate that the adult household member signing the application does not have a social security number. We will use your information to determine if your child is eligible for free or reduced price meals, and for administration and enforcement of the lunch and breakfast programs.
              We may share your eligibility information with education, health, and nutrition programs to help them evaluate, fund, or determine benefits for their programs, auditors for program reviews, and law enforcement officials to help them look into violations of program rules.”
            </small>       
          </div>
          <div className="col col--1-1">
            <Button className="u-center" linkTo="/applicant/step-1" text="START" />
          </div>
        </div>
      </div>
    );
  }
}
