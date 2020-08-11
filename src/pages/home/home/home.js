import React, { Fragment } from 'react';
import DisplayCard from '../../layouts/display/display';
import SummaryPage from '../../layouts/summary/summary-page';

import './home.scss';

export default () => (
  <Fragment>
    <h2 className={'content-block'}>Home</h2>
    <div className={'content-block'}>
      <SummaryPage />
    </div>
    <div id="page" className="flex-block">
      <DisplayCard />
    </div>
  </Fragment>
);
