import React, { Component } from 'react';
import moment from 'moment';
import DateBox from 'devextreme-react/date-box';
import SelectBox from 'devextreme-react/select-box';

import './form-item.scss';

// const dateApi = "./static/json/dateTime.json";
const apiUrl = "./static/json/GetFilterData.json";

class FormItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
        dataValue: [],
        startDateTime: null,
        endDateTime: null,
        cycle: [],
        type: [],
        site: [],
        model: [],
        id: [],
        gas: [],
        energy: []
    };
    
    this.onStartTimeChanged = this.onStartTimeChanged.bind(this);
    this.onEndTimeChanged = this.onEndTimeChanged.bind(this);
    this.onCycleChanged = this.onCycleChanged.bind(this);
    this.onTypeChanged = this.onTypeChanged.bind(this);
    this.onSiteChanged = this.onSiteChanged.bind(this);
    this.onModelChanged = this.onModelChanged.bind(this);
    this.onIdChanged = this.onIdChanged.bind(this);
    this.onGasChanged = this.onGasChanged.bind(this);
    this.onEnergyChanged = this.onEnergyChanged.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}

componentDidMount() {
    // fetch(dateApi, {
    //     method: 'GET',
    //   }).then(response => response.json())
    //   .then(filterDateTime => 
    //     this.setState({ datetimeValue: filterDateTime }))
    //   .catch((err) => {
    //     console.log('Error', err)
    // })

    fetch(apiUrl, {
        method: 'GET'
      }).then(response => response.json())
      .then(filterData => 
        this.setState({ 
            dataValue: filterData
         }))
      .catch((err) => {
        console.log('Error', err)
    })
}

handleSubmit(e) {
    e.preventDefault();
    let showStartTime;
    let showEndTime;
    if(this.state.startDateTime !== null) {
        showStartTime = this.state.startDateTime
    } else {
        showStartTime = moment(this.state.dataValue.startTime).format("YYYY-MM-DD HH:mm")
    };

    if(this.state.endDateTime !== null) {
        showEndTime = this.state.endDateTime
    } else {
        showEndTime = moment(this.state.dataValue.endTime).format("YYYY-MM-DD HH:mm")
    };

    let userSelect = {
        startTime: showStartTime,
        endTime: showEndTime,
        cycle: [this.state.cycle],
        Type: [this.state.type],
        site: [this.state.site],
        Model: [this.state.model],
        Id: [this.state.id],
        gas: [this.state.gas],
        energy: [this.state.energy]
    }

    const bodyData = JSON.stringify(userSelect);
    console.log(bodyData);

    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: bodyData
      }).then(response => console.log(response))
      .catch(error => console.log('error is', error));
}

render() {
    const { 
        dataValue,
        startDateTime,
        endDateTime,
        cycle,
        type,
        site,
        model,
        id,
        gas,
        energy
    } = this.state;
    //console.log(endDateTime)

    return (
        <div className={'menu-container'}>
        <form onSubmit={this.handleSubmit}>
            <div className={'date-time-container'}>
              <div className={'start-date'}>
                <div className="dx-field-datetime">
                    <h6>Start:</h6>
                    <DateBox 
                     defaultValue={startDateTime}
                     placeholder={dataValue.startTime}
                     type="datetime"
                     onValueChanged={this.onStartTimeChanged} 
                    />
                </div>
              </div>
              <div className={'end-date'}>
                <div className="dx-field-datetime">
                    <h6>End:</h6>
                    <DateBox 
                     defaultValue={endDateTime}
                     placeholder={dataValue.endTime}
                     type="datetime"
                     onValueChanged={this.onEndTimeChanged} 
                    />
                </div>
              </div>
            </div>
            <div className={'select-container'}>
                <div className={'select'}>
                    <div className="dx-field-select">
                        <h6>Cycle:</h6>
                        <SelectBox 
                         items={dataValue.cycle} 
                         value={cycle}
                         showClearButton={true} 
                         onValueChanged={this.onCycleChanged} 
                        />
                    </div>
                </div>
                <div className={'select'}>
                    <div className="dx-field-select">
                        <h6>Type:</h6>
                        <SelectBox 
                         items={dataValue.Type} 
                         value={type}
                         showClearButton={true} 
                         onValueChanged={this.onTypeChanged} 
                        />
                    </div>
                </div>
                <div className={'select'}>
                    <div className="dx-field-select">
                        <h6>SITE:</h6>
                        <SelectBox 
                         items={dataValue.site} 
                         value={site}
                         showClearButton={true} 
                         onValueChanged={this.onSiteChanged} 
                        />
                    </div>
                </div>
                <div className={'select'}>
                    <div className="dx-field-select">
                        <h6>Model:</h6>
                        <SelectBox 
                         items={dataValue.Model} 
                         value={model}
                         showClearButton={true} 
                         onValueChanged={this.onModelChanged} 
                        />
                    </div>
                </div>
                <div className={'select'}>
                    <div className="dx-field-select">
                        <h6>ID:</h6>
                        <SelectBox 
                         items={dataValue.Id} 
                         value={id}
                         showClearButton={true} 
                         onValueChanged={this.onIdChanged} 
                        />
                    </div>
                </div>
                <div className={'select'}>
                    <div className="dx-field-select">
                        <h6>GAS:</h6>
                        <SelectBox 
                         items={dataValue.gas} 
                         value={gas}
                         showClearButton={true} 
                         onValueChanged={this.onGasChanged} 
                        />
                    </div>
                </div>
                <div className={'select'}>
                    <div className="dx-field-select">
                        <h6>ENERGY:</h6>
                        <SelectBox 
                         items={dataValue.energy} 
                         value={energy}
                         showClearButton={true} 
                         onValueChanged={this.onEnergyChanged} 
                        />
                    </div>
                </div>
            </div>
            <div className={'button-container'}>
              <button type="submit" value="Engineer" onClick={this.toggleMenu}>Engineer</button>
              <button type="submit" value="Manager" onClick={this.onClick}>Manager</button>
            </div>
            </form>
        </div>
    );
  }

  onStartTimeChanged(e) {
        this.setState({
            startDateTime: moment(e.value).format("YYYY-MM-DD HH:mm")
        });
    }

    onEndTimeChanged(e) {
        this.setState({
            endDateTime: moment(e.value).format("YYYY-MM-DD HH:mm")
        });
    }

    onCycleChanged(e) {
        this.setState({
            cycle: e.value
        });
    }

    onTypeChanged(e) {
        this.setState({
            type: e.value
        });
    }

    onSiteChanged(e) {
        this.setState({
            site: e.value
        });
    }

    onModelChanged(e) {
        this.setState({
            model: e.value
        });
    }

    onIdChanged(e) {
        this.setState({
            id: e.value
        });
    }

    onGasChanged(e) {
        this.setState({
            gas: e.value
        });
    }

    onEnergyChanged(e) {
        this.setState({
            energy: e.value
        });
    }
}

export default FormItem;