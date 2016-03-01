import React from 'react';
import classNames from 'classnames';
import { browserHistory } from 'react-router';
import DropDown from './DropDown';
import './_Header.scss';

const pages = {
  'page-': {
    step: 0,
    class: 'header--intro',
    name: '',
    route: '/',
  },
  'page-applicant': {
    step: 1,
    class: 'header--applicant',
    name: 'Applicant',
    route: '/applicant',
  },
  'page-household': {
    step: 2,
    class: 'header--household',
    name: 'Household',
    route: '/household',
  },
  'page-contact': {
    step: 3,
    class: 'header--contact',
    name: 'Contact Information',
    route: '/contact',
  },
  'page-review': {
    step: 4,
    class: 'header--review',
    name: 'Sign and submit!',
    route: '/review',
  },
};

export default class IndexPage extends React.Component {
  static propTypes = {
    path: React.PropTypes.string.isRequired,
  };

  _getSteps = () => {
    return Object.keys(pages).map(pageKey => {
      const page = pages[pageKey];
      return page.step > 0
        ? `Step ${page.step} of 4: ${page.name}`
        : 'Welcome Screen';
    });
  };

  _goToPage = pageIndex => {
    return Object.keys(pages).forEach(pageKey => {
      const page = pages[pageKey];
      if (page.step === pageIndex) {
        return browserHistory.push(page.route);
      }
    });
  }

  render() {
    const currentPage = pages['page-' + this.props.path.split('/')[1]];
    const headerClasses = classNames(
      'header',
      currentPage.class,
    );
    let currentStep;
    if (currentPage.step > 0) {
      currentStep = (
        <span>
          Step {currentPage.step} of 4: <span className="u-strong">{currentPage.name}</span>
        </span>
      );
    }

    return (
      <div className={headerClasses}>
        <div className="u-pull-left">{currentStep}</div>
        <DropDown
          className="text-input--override"
          value={currentPage.step}
          optionValues={this._getSteps()}
          onChange={val => this._goToPage(val)}
        />
        <div className="u-pull-right">
          <span className="u-strong">English</span> |  Español  |  中文
        </div>
      </div>
    );
  }
}
