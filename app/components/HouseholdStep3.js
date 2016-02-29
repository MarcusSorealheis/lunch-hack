import React from 'react';

import Button from './Button';
import Form from './Form';
import SideBar from './SideBar';

import TextInput from './TextInput';
import Toggle from './Toggle';
import CheckBox from './CheckBox';
import DropDown from './DropDown';

export default class HouseholdStep3 extends React.Component {
  render() {
    return (
      <div>
        <Form>
          <h1>
            Do any of the children in the household have income to report?
          </h1>
          <Button
            className="u-align-left"
            type="info"
            text="Who qualifies as child income?"
          />
          <div className="form__group">
            <Toggle/>
          </div>
          <p>Total child income (combined for all children in household):</p>
          <div className="form__group">
            <TextInput label="Total Earnings ($)"/>
            <DropDown lbael="Monthly"/>
          </div>
          <Button linkTo="/household/step-4" text="Next" />
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
          <div className="accordian-textblock">
            <h2>What qualifies as child income?</h2>
            <small>
              Money received from outside the household that is paid directly to children. This includes:
            </small>
            <ul>
              <li><small>
                A job where they earn a salary, wages, or cash bonuses.
              </small></li>
              <li><small>
                Social Security benefits (Ex: a child is blind or disabled, or a parent is disabled, retired, or deceased.)
              </small></li>
              <li><small>
                Regular gifts (ex: spending money) from extended family members outside of household
              </small></li>
              <li><small>
                Income from a private pension fund, annuity, or trust.
              </small></li>
            </ul>
          </div>

        </SideBar>
      </div>
    );
  }
}
