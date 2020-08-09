import React, { Component, Fragment } from 'react';
import SelectBox from 'devextreme-react/select-box';

import './select.scss';

class SelectItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
        value: ''
    };
    this.onValueChanged = this.onValueChanged.bind(this);
  }

  onValueChanged(e) {
    this.setState({
      value: e.target.value
    });
  }
  render() {
    return (
      <Fragment>
        <div className="dx-field-select">
                <SelectBox
                 value={this.state.value}
                 onValueChanged={this.onValueChanged}>
                 </SelectBox>
        </div>
        {/* <div className="current-value">
            Selected is <span>{this.state.value}</span>
        </div> */}
      </Fragment>
    );
  }
}

export default SelectItem;