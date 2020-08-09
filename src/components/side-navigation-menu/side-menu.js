import React, { useRef, useCallback } from 'react';
import FormItem from '../form/form-item';

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
      <FormItem />
    </div>
  );
}