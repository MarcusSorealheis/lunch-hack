import React from 'react';
import { connect } from 'react-redux';
import { updateContact } from '../actions';

import Button from '../components/Button';
import Form from '../components/Form';
import SideBar from '../components/SideBar';

import TextInput from '../components/TextInput';
import Toggle from '../components/Toggle';
import CheckBox from '../components/CheckBox';
import DropDown from '../components/DropDown';

class Contact extends React.Component {
  static propTypes = {
    updateContact: React.PropTypes.func,
    contactInfo: React.PropTypes.object,
  }

  _updateContactInfo = (type, prop, val) => {
    const newVal = this.props.contactInfo[type];
    newVal[prop] = val;
    this.props.updateContact({ newVal });
  }

  render() {
    return (
      <div className="page-content">
        <Form>
          <div>
            <h1> Please enter your contact information </h1>
            <p>Give us as much contact information as you can - this will help us notify you on our decision as soon as possible.</p>
            <div className="form__body [ col col--1-1 ]">
              <div className="form__group">
                <p>Address</p>
                <CheckBox
                  label="No address available"
                  value={this.props.contactInfo.address.hasNone}
                  onChange={val => this._updateContactInfo('address', 'hasNone', val)}
                />
                {
                  this.props.contactInfo.address.hasNone 
                    ? null
                    : (<div>
                        <TextInput
                          label="Address line 1"
                          value={this.props.contactInfo.address.line1}
                          onChange={val => this._updateContactInfo('address', 'line1', val)}
                        />
                        <TextInput
                          label="Address line 2 (Optional)"
                          value={this.props.contactInfo.address.line2}
                          onChange={val => this._updateContactInfo('address', 'line2', val)}
                        />
                        <TextInput
                          label="City" type="short"
                          value={this.props.contactInfo.address.city}
                          onChange={val => this._updateContactInfo('address', 'city', val)}
                        />
                        <DropDown label="State"
                          value={this.props.contactInfo.address.state}
                          optionValues={this.props.contactInfo.address.states}
                          onChange={val => this._updateContactInfo('address', 'state', val)}
                        />
                        <TextInput
                          label="Zip code" type="short"
                          value={this.props.contactInfo.address.zipcode}
                          onChange={val => this._updateContactInfo('address', 'zipcode', val)}
                        />
                      </div>)
                  }
              </div>

              <div className="form__group">
                <p>Phone Number</p>
                <CheckBox
                  label="No phone number available"
                  value={this.props.contactInfo.phone.hasNone}
                  onChange={val => this._updateContactInfo('phone', 'hasNone', val)}
                />
                {
                  this.props.contactInfo.phone.hasNone
                    ? null
                    : <TextInput
                        label="Phone Number"
                        value={this.props.contactInfo.phone.number}
                        onChange={val => this._updateContactInfo('phone', 'number', val)}
                      />
                }
              </div>

              <div className="form__group">
                <p>Email Address</p>
                <CheckBox
                  label="No email available"
                  value={this.props.contactInfo.email.hasNone}
                  onChange={val => this._updateContactInfo('email', 'hasNone', val)}
                />
                {
                  this.props.contactInfo.email.hasNone
                    ? null
                    : <TextInput
                        label="Email Address"
                        value={this.props.contactInfo.email.address}
                        onChange={val => this._updateContactInfo('email', 'address', val)}
                      />
                }
              </div>
      


            </div>
            <Button linkTo="/review" text="Next" />
          </div>
        </Form>

        <SideBar>
        </SideBar>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    contactInfo: state.contact,
  };
}

export default connect(mapStateToProps, { updateContact })(Contact);
