import React, { Component, Fragment } from 'react';
import SelectBox from 'devextreme-react/select-box';

import './select.scss';

const api = './select-item.json';

class SelectItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
        getItems: [],
        value: 'Select'
    };
    this.onValueChanged = this.onValueChanged.bind(this);
  }
  
  async componentDidMount() {
    const getItems = await fetch(api).then(res => res.json()).then(data => {
        this.setState({
            getItems: data.selectItem,
          });
      }).catch(function(error) {
          console.log('There has been a problem with fetch: ', error.message);
      })

    // if(getItems) {
    //     this.setState({ getItems });
    // }
}

  onValueChanged(e) {
    this.setState({
      value: e.target.value
    });
  }
  render() {
    const { getItems } = this.state;
    console.log(getItems);
    return (
      <Fragment>
        <div className="dx-field-select">
              {/* <SelectBox items={this.getItems}
                value={this.state.value}
                onValueChanged={this.onValueChanged} /> */}
                <SelectBox
                 value={this.state.value}
                 onValueChanged={this.onValueChanged}>
                     {getItems.map((Options) => <option>{Options}</option>)}
                 </SelectBox>
        </div>
        <div className="current-value">
            Selected is <span>{this.state.value}</span>
        </div>
      </Fragment>
    );
  }
}

export default SelectItem;