import React from 'react';
import { connect } from 'react-redux';
import {
  addAdult,
  updateHousehold,
  updateHouseholdAdult,
} from '../actions';

class Household extends React.Component {
  static propTypes = {
    children: React.PropTypes.element.isRequired,
    addAdult: React.PropTypes.func,
    updateHousehold: React.PropTypes.func,
    updateHouseholdAdult: React.PropTypes.func,
    location: React.PropTypes.object.isRequired,
    household: React.PropTypes.object,
  }

  //  _updateNestedValue = (kid, fieldName, key, val) => {
  //   const field = this.props.household[kid][fieldName];
  //   field[key] = val;
  //   this.props.updateHousehold(kid, { field });
  // }

  // _updateValue = (kid, key, val) => {
  //   const newVal = {};
  //   newVal[key] = val;
  //   this.props.updateHousehold(kid, newVal);
  // }

  // _updateAdult = (adult, key, val) => {
  //   const newVal = {};
  //   newVal[key] = val;
  //   this.props.updateHouseholdAdult(adult, newVal);
  // }

  render() {
    const childWithProps = React.cloneElement(this.props.children, {
      key: this.props.location.pathname,
      addAdult: this.props.addAdult,
      updateHousehold: this.props.updateHousehold,
      updateHouseholdAdult: this.props.updateHouseholdAdult,
      household: this.props.household,
    });

    return childWithProps;
  }
}

function mapStateToProps(state) {
  return {
    household: state.household,
  };
}

export default connect(mapStateToProps, {
  addAdult,
  updateHousehold,
  updateHouseholdAdult,
})(Household);
