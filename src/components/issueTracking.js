import React, { Component, Fragment, createRef } from 'react';
import styled, { ThemeProvider } from 'styled-components'
import './trackingForm.scss';

const defaultTheme = {
    backgroundColor: "#f7f7f7",
    color: '#000'
}
  
const darkTheme = {
    backgroundColor: "#222",
    color: '#fff'
}

const Uzrz = styled.div`
   background-color:${props => props.theme.backgroundColor};
   color:${props => props.theme.color};
   button{
     background-color:${props => props.theme.backgroundColor};
     color: ${ props => props.theme.color};
   }
  `
  class TrackingFrom extends Component {
    constructor(props) {
        super(props);
        this.state = {
          selectTheme: defaultTheme //给组件一个默认的初始主题
        }
        this.changeTheme = this.changeTheme.bind(this)
      }

      changeTheme() {
        // 点击切换主题按钮，把没有选中的主题赋值给selectTheme
        this.state.selectTheme === defaultTheme ? this.setState({
          selectTheme: darkTheme
        }) : this.setState({
          selectTheme: defaultTheme
        })
      }

      issueTilte = createRef();

      componentDidMount() {
          this.issueTilte.current.focus();
      }

      render() {
          return (
              <Fragment>
                  <ThemeProvider theme={this.state.selectTheme}>
                  <Uzrz>
                      <form className={'issue-form'}>
                        <h3>Issue Tracking</h3>
                        <input type="text" ref={this.issueTilte} />
                        </form>
                    </Uzrz>
                <button onClick={this.changeTheme}>切换主题</button>
                </ThemeProvider>
              </Fragment>
          )
      }
  }

  export default TrackingFrom;