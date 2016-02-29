import React from 'react';
import { connect } from 'react-redux';
import {} from '../actions';

import Button from '../components/Button';
import Form from '../components/Form';
import SideBar from '../components/SideBar';

class Review extends React.Component {
  static propTypes = {
    children: React.PropTypes.element.isRequired,
    location: React.PropTypes.object.isRequired,
  }

  render() {
    return (
      <div className="page-content">
        <Form>
          <Button linkTo="/" text="All done!" />
        </Form>
        <SideBar>
          SideBar
        </SideBar>
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
