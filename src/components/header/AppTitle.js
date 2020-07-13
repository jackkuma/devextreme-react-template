import React, { Component, Fragment } from 'react';

import './header.scss';

export default class AppTitle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow: false
        }
    }

    toToggle = () => {
        this.setState({
            isShow: !this.state.isShow
        })
    }

    render() {
        return (
            <Fragment>
                
                <div className={this.state.isShow ? 'show' : 'hide'}>
                    <p>est word show</p>
                <button onClick={this.toToggle}>close</button>
                </div>
            </Fragment>
        )
    }
}