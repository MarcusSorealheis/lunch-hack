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
    kids: React.PropTypes.object,
  }

  render() {
    const childWithProps = React.cloneElement(this.props.children, {
      key: this.props.location.pathname,
      addAdult: this.props.addAdult,
      updateHousehold: this.props.updateHousehold,
      updateHouseholdAdult: this.props.updateHouseholdAdult,
      household: this.props.household,
      kids: this.props.kids,
    });

    return childWithProps;
  }
}

function mapStateToProps(state) {
  return {
    household: state.household,
    kids: state.children,
  };
}

export default connect(mapStateToProps, {
  addAdult,
  updateHousehold,
  updateHouseholdAdult,
})(Household);
