import React from 'react';
import { connect } from 'react-redux';
import { addChild, updateChild } from '../actions';

class Applicant extends React.Component {
  static propTypes = {
    children: React.PropTypes.element.isRequired,
    kids: React.PropTypes.array.isRequired,
    location: React.PropTypes.object.isRequired,
    addChild: React.PropTypes.func.isRequired,
    updateChild: React.PropTypes.func.isRequired,
  }

  render() {
    const childWithProps = React.cloneElement(this.props.children, {
      key: this.props.location.pathname,
      kids: this.props.kids,
      addChild: this.props.addChild,
      updateChild: this.props.updateChild,
    });

    return childWithProps;
  }
}

function mapStateToProps(state) {
  return {
    kids: state.children,
  };
}

export default connect(mapStateToProps, { addChild, updateChild })(Applicant);
