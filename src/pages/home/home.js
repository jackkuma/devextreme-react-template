import React from 'react';
import TrackingForm from '../../components/issueTracking/issueTracking';
import DisplayCard from '../../layouts/display/display';
import './home.scss';
import appInfo from '../../app-info';
import divList from './divs.json';

export default () => (
  <React.Fragment>
    <h2 className={'content-block'}>Home</h2>
    <div className={'content-block'}>
      <div id="chart" />
        <p>Welcome to <b>{appInfo.title}</b>!</p><p>The application is built with:</p>
        <TrackingForm />
        <p>The application layouts are implemented using the <a href={'https://js.devexpress.com/Documentation/ApiReference/UI_Widgets/dxDrawer/'} target={'_blank'} rel={'noopener noreferrer'}>Drawer</a> component. Several component examples are also available in the <b>Examples</b> section. For complete information on DevExtreme, check our <a href={'https://js.devexpress.com/Documentation/'} target={'_blank'} rel={'noopener noreferrer'}>documentation</a> and <a href={'https://js.devexpress.com/Demos/WidgetsGallery/'} target={'_blank'} rel={'noopener noreferrer'}>demos</a>.</p>
        <p>You can do the following to create a custom application using this template as a base point:</p>
        <p>Please, read README in <a href={'https://github.com/DevExpress/devextreme-react-template/blob/master/README.md'} target={'_blank'} rel={'noopener noreferrer'}>devextreme-react-template</a> GitHub repository for more information.</p>
      </div>
      <div id="page2" className="flex-block">
        <DisplayCard data={divList} />
      </div>
  </React.Fragment>
);
