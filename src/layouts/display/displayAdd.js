import React, { Fragment } from "react";

import './display.scss';

const BlockComponent = () => <div>我是DIV</div>;

export default class DisplayDiv extends Component {
  constructor(props) {
    super(props);
    this.state = {
        comps: []
    };
  }

  render() {
    const { comps } = this.state;
    return (
        <Fragment>
            {comps.map(comp => {
                return <BlockComponent key={comp} />;
            })}
        <button onClick={() => this.setState({ comps: comps.concat([Date.now()]) })}>加组件</button>
        </Fragment>
    );
  }
}