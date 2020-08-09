import React, { Component, Fragment } from 'react';
import DateBox from 'devextreme-react/date-box';

import './date-time.scss';

class DateTime extends Component {
  constructor(props) {
    super(props);
    // this.now = new Date();
    this.value = this.props.value;
    this.onValueChanged = this.onValueChanged.bind(this);
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
            </div>
      </Fragment>
    );
  }
}

export default DateTime;