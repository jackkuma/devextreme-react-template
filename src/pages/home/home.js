import React, { Fragment } from 'react';
// import DisplayCard from '../../layouts/display/display';
import SummaryPage from '../../layouts/summary/summary-page';
import InfoPage from './page';

import './home.scss';

export default () => (
  <Fragment>
    <div className={'content-block'}>
      <SummaryPage />
    </div>
    <div id="chart" />
    <InfoPage />
  </Fragment>
);
