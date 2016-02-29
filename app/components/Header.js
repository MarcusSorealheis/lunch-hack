import React from 'react';
import classNames from 'classnames';
import './_Header.scss';

const pages = {
  '/': {
    class: 'header--intro',
    name: '',
  },
  '/applicant': {
    step: 1,
    class: 'header--applicant',
    name: 'Applicant',
  },
  '/household': {
    step: 2,
    class: 'header--household',
    name: 'Household',
  },
  '/contact': {
    step: 3,
    class: 'header--contact',
    name: 'Contact Information',
  },
  '/review': {
    step: 4,
    class: 'header--review',
    name: 'Sign and submit!',
  },
};

export default class IndexPage extends React.Component {
  static propTypes = {
    location: React.PropTypes.object.isRequired,
  };

  render() {
    const currentPage = pages[this.props.location.pathname];
    const headerClasses = classNames(
      'header',
      currentPage.class,
    );
    let currentStep;
    if (currentPage.step) {
      currentStep = (
        <span>
          Step {currentPage.step} of 4: <span className="u-strong">{currentPage.name}</span>
        </span>
      );
    }

    return (
      <div className={headerClasses}>
        <div className="u-pull-left">{currentStep}</div>
        <div className="u-pull-right">
          <span className="u-strong">English</span> |  Español  |  中文
        </div>
      </div>
    );
  }
}
