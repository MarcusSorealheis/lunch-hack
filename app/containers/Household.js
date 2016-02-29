import React from 'react';
import { connect } from 'react-redux';
import {} from '../actions';

class Household extends React.Component {
  static propTypes = {
    location: React.PropTypes.object.isRequired,
    children: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.element,
      React.PropTypes.arrayOf(React.PropTypes.element),
    ]).isRequired,
  }

  render() {
    return (
      <div className="page-content">
        {this.props.children}
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    location: ownProps.location,
  };
}

export default connect(mapStateToProps, {})(Household);
