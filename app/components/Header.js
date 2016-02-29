import React from 'react';
import classNames from 'classnames';
import './_Header.scss';

const pages = {
  'page-': {
    class: 'header--intro',
    name: '',
  },
  'page-applicant': {
    step: 1,
    class: 'header--applicant',
    name: 'Applicant',
  },
  'page-household': {
    step: 2,
    class: 'header--household',
    name: 'Household',
  },
  'page-contact': {
    step: 3,
    class: 'header--contact',
    name: 'Contact Information',
  },
  'page-review': {
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
    console.log(this.props.location);
    const currentPage = pages['page-' + this.props.location.pathname.split('/')[0]];
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
