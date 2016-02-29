import React from 'react';
import { connect } from 'react-redux';
import {} from '../actions';

import Button from '../components/Button';
import Form from '../components/Form';
import SideBar from '../components/SideBar';

import TextInput from '../components/TextInput';
import Toggle from '../components/Toggle';
import CheckBox from '../components/CheckBox';
import DropDown from '../components/DropDown';

class Contact extends React.Component {
  static propTypes = {
    children: React.PropTypes.element.isRequired,
    location: React.PropTypes.object.isRequired,
  }

  render() {
    return (
      <div className="page-content">
      <Form>
          <h1>
            Please enter your contact information
          </h1>
          <p>Give us as much contact information as you can - this will help us notify you on our decision as soon as possible.</p>
          <div className="form__body [ col col--1-1 ]">
            <div className="form__group">
              <p>Address</p>
              <TextInput label="Address line 1" />
              <TextInput label="Address line 2 (Optional)" />
              <TextInput label="City" type="short" />
              <DropDown label="State" />
              <TextInput label="Zip code" type="short" />
            </div>
            <CheckBox label="No address available" />

            <div className="form__group">
              <p>Phone Number</p>
              <TextInput label="Phone Number" />
            </div>
            <CheckBox label="No phone number available" />

            <div className="form__group">
              <p>Email Address</p>
              <TextInput label="Email Address" />
            </div>
            <CheckBox label="No email available" />
          </div>
          <Button linkTo="/review" text="Next" />
        </Form>

        <SideBar>
          SideBar
        </SideBar>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    location: ownProps.location,
  };
}

export default connect(mapStateToProps, {})(Contact);
