import React, { Component, Fragment } from "react";
import ChartDiv from './chart-div';

import './display.scss';

const divApi = './static/json/divs.json';

export default class DisplayDiv extends Component {
  state = {
    divBlocks: [],
  };

  componentDidMount() {
    fetch(divApi)
    .then(rs => rs.json())
    .then(data => {
      this.setState({
        divBlocks: data.divBlock
      });
    });
  }

  render() {
    const { divBlocks } = this.state;
    return (
        <Fragment>
            {divBlocks.map((divBlock) => (
              <ChartDiv key={divBlock.id} {...divBlock} />
            ))}
        </Fragment>
    );
  }
}