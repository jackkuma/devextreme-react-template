import React, { Component, Fragment } from 'react';

export default class ChartDiv extends Component {
    render() {
        const { pageName, divName, divType, divHeight } = this.props;
    return <Fragment>
        <div id={divName} className={[divType, divHeight].join(' ')}>{pageName}</div>
        </Fragment>;
    }
}