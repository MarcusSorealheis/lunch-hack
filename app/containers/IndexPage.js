import React from 'react';
import { connect } from 'react-redux';
import {} from '../actions';

class IndexPage extends React.Component {
  static propTypes = {
    children: React.PropTypes.element.isRequired,
    location: React.PropTypes.object.isRequired,
  }

  render() {
    return (
      <div className="IndexPage">
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

export default connect(mapStateToProps, {})(IndexPage);
