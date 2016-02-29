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
            List and report earnings for all adults (age 18+) in household, including those who do not have income.
          </h1>
          <div>
            <Button
              className="u-align-left"
              type="info"
              text="Who qualifies as a household member?"
            />
          </div>

          <div className="form__body [ col col--1-1 ]">
            <div className="form__group">
              <TextInput label="First Name" />
              <TextInput label="MI" type="short" width="50px" />
              <TextInput label="Last Name" />
            </div>
            <div className="form__group">
              <p>Earnings from work</p>
              <CheckBox label="No earnings from work to report" />
              <TextInput label="Total Earnings ($)" type="short"/>
              <DropDown label="Monthly" />
            </div>
            <div className="form__group">
              <p>Public assistance</p>
              <CheckBox label="No public assistance recieved" />
              <TextInput label="Total Earnings ($)" type="short"/>
              <DropDown label="Monthly" />
            </div>
            <div className="form__group">
              <p>All other income</p>
              <CheckBox label="No other income to report" />
              <TextInput label="Total Earnings ($)" type="short"/>
              <DropDown label="Monthly" />
            </div>
          </div>          
          <div>
            <Button type="secondary" text="Add additional adult" />
          </div>
          <div>
            <Button linkTo="/household/step-3" text="Next" />
          </div>
        </Form>

        <SideBar>
          <div className="side-textblock">
            <h2>
              Did you know...
            </h2>
            <small>
              Children and families tend to consume more of the foods that they have easy access to. Keep fruits and vegetables within reach and you’re more likely to make healthy choices.
              <br />
              Easy tips:
              <ul>
                <li><small>
                  Replace a candy dish with a fruit bowl
                </small></li>
                <li><small>
                  Store tempting foods like cookies, chips,or ice crea out of immediate eyesight 
                </small></li>
              </ul>
            </small>
            <div>
              <Button
                className="u-align-left"
                type="info"
                text="Get more healthy tips"
              />
            </div>
          </div>

          {/* FUN FACT ENDS RAWR CATTT :D MEOW MEOW MEOW */}

 
          <div className="side-textblock">
            <h2>
              Who qulifies as a household member?
            </h2>
            <small>
              Anyone who is living with you and shares income and expenses, even if not related, and even if they do not have income of their own. This does not include people who live in the household, but are not supported by the household’s income and do not contribute income to your household.
            </small>
          </div>
          
          <div className="side-textblock">
            <h2>
              Other assistance programs
            </h2>
            <small>
              Receipt of benefits by or participation of any household member from certain Assistance Programs conveys eligibility for free school meals to all children in the household. 
              <br />
              When certifying eligibility based on participation in these programs, determinations must be made with appropriate case numbers submitted on the application.
              <br />
              (Click to expand definitions)
            </small>
          </div>
          <div className="accordian-textblock">
            <h2>Earnings from work</h2>
            <small>
              This includes earnings from work such as:
            </small>
            <ul>
              <li><small>
                Salary, wages, cash bonuses
              </small></li>
              <li><small>
                Net income from self-employment (ex: farm income, partnership income, professional practice income, or other)
              </small></li>
              <li><small>
                Strike benefits
              </small></li>
              <li><small>
                Unemployment insurance
              </small></li>
              <li><small>
                Military income including basic pay, cash bonuses, and allowances for off-base housing, food, and clothing
              </small></li>
              <li><small>
                Any other earned income.
              </small></li>
            </ul>
          </div>
          <div className="accordian-textblock">
            <h2>Public assistance & alimony</h2>
            <small>
              This includes any public assistance, alimony, or child support.
            </small>
          </div>
          <div className="accordian-textblock">
            <h2>All other income</h2>
            <small>
              This includes:
            </small>
            <ul>
              <li><small>
                Retirement or disability income: (ex: Social Security, railroad retirement, pensions, annuities, survivor’s benefits, disability benefits from Supplemental Security Income (SSI), private disability benefits, black lung benefits, worker’s compensation, veteran’s benefits, or related sources)
              </small></li>
              <li><small>
                Investments or any other income: (ex: interest, dividends, income from trusts or estates, rental income, royalties, prize winnings, money withdrawn from savings, regular contributions such as cash gifts from friends or family outside the household)
              </small></li>
            </ul>
          </div>
        </SideBar>
      </div>
    );
  }
}
