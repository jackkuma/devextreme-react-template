import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let app;
let doc;
let webPlayerServerRootUrl = "https://spotfire-next.cloud.tibco.com/spotfire/wp/";
let analysisPath = "/Samples/Expense Analyzer Dashboard";
let parameters = '';
let reloadInstances = false;
let apiVersion = "7.14";
let customizationInfo = {
    showAbout : false,
    showAnalysisInformationTool : false,
    showAuthor : false,
    showCustomizableHeader : false,
    showDodPanel : false,
    showExportFile : false,
    showExportVisualization : false,
    showFilterPanel : false,
    showHelp : false,
    showLogout : false,
    showPageNavigation : false,
    showReloadAnalysis : false,
    showStatusBar : false,
    showToolBar : false,
}

class SpotFireChart extends Component {
   constructor(props) {
        super(props);

        this.onReadyCallback = this.onReadyCallback.bind(this);
        this.onCreateLoginElement = this.onCreateLoginElement.bind(this);
    }

    componentDidMount() {
        // spotfire.webPlayer.createApplication(
        //     webPlayerServerRootUrl,
        //     customizationInfo,
        //     analysisPath,
        //     parameters,
        //     reloadInstances,
        //     apiVersion,
        //     onReadyCallback
        // )
        var app = new spotfire.webPlayer.createApplication(webPlayerServerRootUrl, customizationInfo, analysisPath);
        var doc = app.openDocument("container", 0, customizationInfo);
    }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <div id="container" />
          <div id="spotFireWidgetPlaceholder">
              {this.state.errorState == true ? <div style={{color:"red",fontWeight:800}}>Error - {this.state.errorDesc}</div> : ""}
          </div>
        </div>
      </div>
    );
  }
}

export default SpotFireChart;