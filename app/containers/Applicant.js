import React from 'react';
import { connect } from 'react-redux';
import { addChild, updateChild } from '../actions';

class Applicant extends React.Component {
  static propTypes = {
    children: React.PropTypes.element.isRequired,
    kids: React.PropTypes.array.isRequired,
    addChild: React.PropTypes.func.isRequired,
    updateChild: React.PropTypes.func.isRequired,
  }

  render() {
    return (
      <div className="page-content">
        {
          React.Children.map(this.props.children, child => {
            return React.cloneElement(child, {
              kids: this.props.kids,
              addChild: this.props.addChild,
              updateChild: this.props.updateChild,
            });
          })
        }
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    kids: state.children,
  };
}

export default connect(mapStateToProps, { addChild, updateChild })(Applicant);
