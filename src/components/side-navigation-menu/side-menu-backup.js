import React, { useRef, useCallback } from 'react';
import * as events from 'devextreme/events';

import './side-navigation-menu.scss';

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
      setDateTime(filterDateTime);
    })
    .catch((err) => {
      console.log('Error', err)
    })
  }

  const fetchData = () => {
    const apiUrl = "./static/json/GetFilterData.json";

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
  // console.log('getStart:' + spotfireData.startTime)
  // console.log('getEnd:' + spotfireData.endTime)

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
    
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('A name was submitted: ' + this.state.value);
  }

  return (
    <div
      className={'dx-swatch-additional side-navigation-menu'}
      ref={getWrapperRef}
    >
      {children}
      <div id="showFilter" />
    </div>
  );
}