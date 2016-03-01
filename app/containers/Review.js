import React from 'react';
import { connect } from 'react-redux';
import {} from '../actions';

import Button from '../components/Button';
import Form from '../components/Form';
import ChildrenConfirmation from '../components/ChildrenConfirmation';
import HouseholdConfirmation from '../components/HouseholdConfirmation';

import TextInput from '../components/TextInput';

class Review extends React.Component {
  static propTypes = {
    kids: React.PropTypes.array,
    household: React.PropTypes.object,
  }

  render() {
    return (
      <div className="page-content">
        <Form>
          <h1 style={{ marginTop: '66px' }}>
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
          <div className="form__group" style={{ marginBottom: '99px' }}>
            <Button linkTo="/" text="All done!" />
          </div>
          <div className="form__group">
            <h1>
              Review of your application
            </h1>
            <ChildrenConfirmation kids={this.props.kids} />
            <HouseholdConfirmation kids={this.props.kids} household={this.props.household} />
          </div>
        </Form>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    kids: state.children,
    household: state.household,
  };
}

export default connect(mapStateToProps, {})(Review);
