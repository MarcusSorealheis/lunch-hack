import React from 'react';
import { Redirect, Route, IndexRoute } from 'react-router';

import PageWrapper from './containers/PageWrapper';
import Intro from './components/Intro';

import Applicant from './containers/Applicant';
import ApplicantStep1 from './components/ApplicantStep1';
import ApplicantStepConfirmation from './components/ApplicantStepConfirmation';

import Household from './containers/Household';
import HouseholdStep1 from './components/HouseholdStep1';
import HouseholdStep2 from './components/HouseholdStep2';
import HouseholdStep3 from './components/HouseholdStep3';
import HouseholdStep4 from './components/HouseholdStep4';
import HouseholdStepConfirmation from './components/HouseholdStepConfirmation';

import Contact from './containers/Contact';
import Review from './containers/Review';

export default () => (
  <Route path="/" component={PageWrapper}>
    <IndexRoute name="intro" component={Intro} />

    <Redirect from="applicant" to="applicant/step-1" />
    <Route name="applicant" path="applicant" component={Applicant}>
      <Route name="applicant-1" path="step-1" component={ApplicantStep1} />
      <Route name="applicant-2" path="step-2" component={ApplicantStepConfirmation} />
    </Route>

    <Redirect from="household" to="household/step-1" />
    <Route name="household" path="household" component={Household}>
      <Route name="household-1" path="step-1" component={HouseholdStep1} />
      <Route name="household-2" path="step-2" component={HouseholdStep2} />
      <Route name="household-3" path="step-3" component={HouseholdStep3} />
      <Route name="household-4" path="step-4" component={HouseholdStep4} />
      <Route name="household-5" path="step-5" component={HouseholdStepConfirmation} />
    </Route>

    <Route name="contact" path="contact" component={Contact} />
    <Route name="review" path="review" component={Review} />
  </Route>
);
