import React, { useRef, useCallback } from 'react';
import DateTime from '../date-time/date-time';
import SelectItem from '../select/select';
import './side-navigation-menu.scss';

import * as events from 'devextreme/events';

export default function (props) {
  const {
    children,
    openMenu
  } = props;

  const wrapperRef = useRef();
  const getWrapperRef = useCallback((element) => {
    const prevElement = wrapperRef.current;
    if (prevElement) {
      events.off(prevElement, 'dxclick');
    }

    wrapperRef.current = element;
    events.on(element, 'dxclick', e => {
      openMenu(e);
    });
  }, [openMenu]);

  return (
    <div
      className={'dx-swatch-additional side-navigation-menu'}
      ref={getWrapperRef}
    >
      {children}
      <div className={'menu-container'}>
          <div className={'date-time-container'}>
              <div className={'start-date'}>
                  <h6>Start:</h6>
                  <DateTime />
              </div>
              <div className={'end-date'}>
                  <h6>End:</h6>
                  <DateTime />
              </div>
          </div>
          <div className={'select-container'}>
                <h6>Start:</h6>
                <SelectItem />
                <h6>End:</h6>
          </div>
      </div>
    </div>
  );
}
