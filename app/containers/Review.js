import React from 'react';
import { connect } from 'react-redux';
import {} from '../actions';

import Button from '../components/Button';
import Form from '../components/Form';
import SideBar from '../components/SideBar';

import TextInput from '../components/TextInput';

class Review extends React.Component {
  static propTypes = {
    children: React.PropTypes.element.isRequired,
    location: React.PropTypes.object.isRequired,
  }

  render() {
    return (
      <div className="page-content">
        <Form>
          <h1>
            Sign and complete (must be adult in household)
          </h1>
          <small>
            The person signing is furnishing true information and to advise that person that the application is being made in connection with the receipt of Federal funds;
            <ul>
              <li>
                School officials may verify the information on the application; and
              </li>
              <li>
                Deliberate misrepresentation of the information may subject the applicant to prosecution under State and Federal statutes
              </li>
            </ul>
          </small>
          <div className="form__group">
            <TextInput
              label="First Name"
            />
            <TextInput
              label="MI" type="short"
              width="50px"
            />
            <TextInput
              label="Last Name"
            />
          </div>
          <Button linkTo="/" text="All done!" />
        </Form>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    location: ownProps.location,
  };
}

export default connect(mapStateToProps, {})(Review);
