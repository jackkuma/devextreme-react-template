import React, { useRef, useCallback, useState, useEffect } from 'react';
import DateTime from '../form/date-time';
import SelectItem from '../form/select';
import { Button } from 'devextreme-react/button';
import notify from 'devextreme/ui/notify';

import { faCogs } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './side-navigation-menu.scss';

import * as events from 'devextreme/events';

export default function (props) {
  const [dateTime, setDateTime] = useState([]);
  const [spotfireData, setSpotfireData] = useState([]);

  useEffect(() => {
    fetchDateTime()
    fetchData()
  },[])

  const fetchDateTime = () => {
    const dateApi = "./static/json/dateTime.json";
    fetch(dateApi, {
      method: 'GET',
    }).then((response) => response.json())
    .then((filterDateTime) => {
      console.log(filterDateTime);
      setDateTime(filterDateTime);
    })
    .catch((err) => {
      console.log('Error', err)
    })
  }

  const fetchData = () => {
    const apiUrl = "./static/json/filter.json";

    fetch(apiUrl, {
        method: 'GET',
      }).then((response) => response.json())
      .then((filterData) => {
        setSpotfireData(filterData)
        console.log(filterData)
      })
      .catch((err) => {
        console.log('Error', err)
      })
  }

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

  const onClick = (e) => {
    const buttonText = e.component.option('text');
    notify(`The ${capitalize(buttonText)} button was clicked`);
  }

  return (
    <div
      className={'dx-swatch-additional side-navigation-menu'}
      ref={getWrapperRef}
    >
      {children}
      <div id="showFilter" />
      <div className={'menu-container'}>
          <div className={'date-time-container'}>
            <div className={'start-date'}>
              <i><FontAwesomeIcon icon={faCogs} /></i>
              <span>
                <h6>Start:</h6>
                <DateTime />
              </span>
            </div>
            <div className={'end-date'}>
              <h6>End:</h6>
              <DateTime />
            </div>
          </div>
          <div className={'select-container'}>
            <div className={'select'}>
              <h6>Cycle:</h6>
              <SelectItem />
            </div>
            <div className={'select'}>
              <h6>Type:</h6>
              <SelectItem />
            </div>
            <div className={'select'}>
            <h6>SITE:</h6>
              <SelectItem />
            </div>
            <div className={'select'}>
              <h6>Model:</h6>
              <SelectItem />
            </div>
            <div className={'select'}>
              <h6>ID:</h6>
              <SelectItem />
            </div>
            <div className={'select'}>
              <h6>GAS:</h6>
              <SelectItem />
            </div>
            <div className={'select'}>
              <h6>ENERGY:</h6>
              <SelectItem />
            </div>
          </div>
          <div className={'button-container'}>
            <Button
            text="Engineer" 
            type="normal" 
            onClick={onClick}
            />
            <Button
            text="Manager" 
            type="normal" 
            onClick={onClick}
            />
          </div>
      </div>
    </div>
  );
}

const capitalize = (text) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

