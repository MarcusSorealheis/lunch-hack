import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import './_PageWrapper.scss';
import {} from '../actions';

class PageWrapper extends React.Component {
  static propTypes = {
    children: React.PropTypes.element.isRequired,
    location: React.PropTypes.object.isRequired,
  }

  render() {
    return (
      <div className="page-wrapper">
        <Header path={this.props.location.pathname} />
        <div className="page-body">
          {this.props.children}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    location: ownProps.location,
  };
}

export default connect(mapStateToProps, {})(PageWrapper);
