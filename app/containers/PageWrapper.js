import React from 'react';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
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
          <ReactCSSTransitionGroup
            transitionName="pagechange"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}
          >
            {React.cloneElement(this.props.children, {
              key: this.props.location.pathname,
            })}
          </ReactCSSTransitionGroup>
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
