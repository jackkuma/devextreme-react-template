import React, { Component, Fragment } from 'react';
import DateBox from 'devextreme-react/date-box';

import './date-time.scss';

class DateTime extends Component {
  constructor(props) {
    super(props);
    // this.now = new Date();
    this.value = this.props.value;
    //add check url
    this.state = {
      fromURL: ''
    };

    this.onValueChanged = this.onValueChanged.bind(this);
  }

  componentDidMount() {
    let prvUrl = document.referrer;
    //console.log(prvUrl);
    let paraString = prvUrl.substring(prvUrl.indexOf("/")+1).split("/");
    console.log(paraString);
    let nowEnv = paraString[2];
    console.log(nowEnv);
    this.setState({fromURL: nowEnv});
  }

  onValueChanged(e) {
    this.setState({
      value: e.value
    });
  }

  render() {
    return (
      <Fragment>
            <div className="dx-field-datetime">
              <DateBox 
              //  defaultValue={this.value} 
               type="datetime" 
              />
              <p>{this.state.fromURL}</p>
            </div>
      </Fragment>
    );
  }
}

export default DateTime;