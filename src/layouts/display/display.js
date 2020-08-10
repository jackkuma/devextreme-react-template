import React, { Component, Fragment } from 'react';
import './display.scss';

export default class DisplayDiv extends Component {
    render() {
        const { pageName, divName, divType, divHeight } = this.props.data;
        return (
            <Fragment>
                <div id={divName} className={divType}>
                    <p>{pageName}</p>
                </div>
            </Fragment>
        )
    }
}