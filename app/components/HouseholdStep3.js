import React from 'react';

import Button from './Button';
import Form from './Form';
import SideBar from './SideBar';

import TextInput from './TextInput';
import Toggle from './Toggle';
import CheckBox from './CheckBox';
import DropDown from './DropDown';

export default class HouseholdStep3 extends React.Component {
  static propTypes = {
    addAdult: React.PropTypes.func,
    updateHousehold: React.PropTypes.func,
    updateHouseholdAdult: React.PropTypes.func,
    household: React.PropTypes.object,
  }

  constructor(props) {
    super(props);
    this.state = {
      sidebar: this._renderIntro,
    };
  }

  _renderIntro = () => (
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
  )

  _renderPrograms = () => (
    <div className="side-textblock">
      <Button
        className="u-align-left"
        type="info"
        text="Back"
        onClick={() => this.setState({ sidebar: this._renderIntro })}
      />
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
    </div>
  )

  render() {
    let childIncomeInput;
    if (!this.props.household.childIncome.hasNone) {
      childIncomeInput = (
        <div>
          <p>Total child income (combined for all children in household):</p>
          <div className="form__group">
            <TextInput
              label="Total Earnings ($)"
              value={this.props.household.childIncome.total}
              onChange={val => {
                const newVal = this.props.household.childIncome;
                newVal.total = val;
                this.props.updateHousehold({ newVal });
              }}
            />
            <DropDown
              label="Pay Period"
              value={this.props.household.childIncome.type}
              optionValues={this.props.household.childIncome.types}
              onChange={val => {
                const newVal = this.props.household.childIncome;
                newVal.type = val;
                this.props.updateHousehold(newVal);
              }}
            />
          </div>
        </div>
      )
    }
    return (
      <div className="page-content">
        <Form>
          <h1>
            Do any of the children in the household have income to report?
          </h1>
          <Button
            className="u-align-left"
            type="info"
            text="Who qualifies as child income?"
            onClick={() => this.setState({ sidebar: this._renderPrograms })}
          />
          <div className="form__group">
            <Toggle
              value={!this.props.household.childIncome.hasNone}
              onChange={val => {
                const newVal = this.props.household.childIncome;
                newVal.hasNone = !val;
                this.props.updateHousehold({ newVal });
              }}
            />
          </div>
          {childIncomeInput}
          <Button linkTo="/household/step-4" text="Next" />
        </Form>

        <SideBar>
          {this.state.sidebar()}
        </SideBar>
      </div>
    );
  }
}
