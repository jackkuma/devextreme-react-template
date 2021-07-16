import React, { Fragment, useState } from 'react';
import SummaryPage from '../../layouts/summary/summary-page';
import TypeButton from '../../components/model/typeButton';

import { Provider } from '../../contexts/context';

import './home.scss';

const Home = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isShow, setIsShow] = useState(false);
  const [isView, setIsView] = useState(false);
  
  const openToggle = () => {
    setIsOpen(true);
    setIsShow(false);
    setIsView(false);
  }
  const showToggle = () => {
    setIsOpen(false);
    setIsShow(true);
    setIsView(false);
  }
  const viewToggle = () => {
    setIsOpen(false);
    setIsShow(false);
    setIsView(true);
  }

  const contextValue = { isOpen, isShow, isView, openToggle, showToggle, viewToggle };

  return (
    <Provider value={contextValue}>
      <Fragment>
        <div className={'content-block'}>
          <SummaryPage />
        </div>
        <div>
          <TypeButton />
          { isOpen && <div>This is use contextAPI</div>}
          { isShow && <div>This is not-use contextAPI</div>}
          { isView && <div>This is React</div>}
        </div>
  </Fragment>

    </Provider>
  );
};

export default Home;
