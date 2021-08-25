import React, { Fragment, Component } from "react";
import shopImg from './class/classification_image@2x.png'
//头部
import Header from './view/Header'
//导航栏
import Content from './view/Content'
//尾部
import Foot from './view/Foot'
class classify extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navid:1,
      navName: [{ text: '文玩', id:1 }, { text: '首饰', id:2 }, { text: '服饰', id: 3 }, { text: '家居', id: 4 }, { text: '玩具', id: 5 }, { text: '艺术品', id: 6 },],
      shop:[
        {
          id:1,
          shopClass:[
            {
              name:'文玩1',
              shops:[
                {text:'耳坠',img:shopImg},{text:'耳坠',img:shopImg},{text:'耳坠',img:shopImg},{text:'耳坠',img:shopImg},{text:'耳坠',img:shopImg},{text:'耳坠',img:shopImg},
              ]
            },
            {
              name:'文玩2',
              shops:[
                {text:'耳坠',img:shopImg},{text:'耳坠',img:shopImg},{text:'耳坠',img:shopImg},{text:'耳坠',img:shopImg},{text:'耳坠',img:shopImg},{text:'耳坠',img:shopImg},
              ]
            },
            {
              name:'文玩1',
              shops:[
                {text:'耳坠',img:shopImg},{text:'耳坠',img:shopImg},{text:'耳坠',img:shopImg},{text:'耳坠',img:shopImg},{text:'耳坠',img:shopImg},{text:'耳坠',img:shopImg},
              ]
            },
            {
              name:'文玩2',
              shops:[
                {text:'耳坠',img:shopImg},{text:'耳坠',img:shopImg},{text:'耳坠',img:shopImg},{text:'耳坠',img:shopImg},{text:'耳坠',img:shopImg},{text:'耳坠',img:shopImg},
              ]
            },
          ]
        },
        {
          id:2,
          shopClass:[
            {
              name:'首饰1',
              shops:[
                {text:'耳坠',img:shopImg},{text:'耳坠',img:shopImg},{text:'耳坠',img:shopImg},{text:'耳坠',img:shopImg},{text:'耳坠',img:shopImg},{text:'耳坠',img:shopImg},
              ]
            },
            {
              name:'首饰2',
              shops:[
                {text:'耳坠',img:shopImg},{text:'耳坠',img:shopImg},{text:'耳坠',img:shopImg},{text:'耳坠',img:shopImg},{text:'耳坠',img:shopImg},{text:'耳坠',img:shopImg},
              ]
            },
          ]
        },
        {
          id:3,
          shopClass:[
            {
              name:'服装1',
              shops:[
                {text:'耳坠',img:shopImg},{text:'耳坠',img:shopImg},{text:'耳坠',img:shopImg},{text:'耳坠',img:shopImg},{text:'耳坠',img:shopImg},{text:'耳坠',img:shopImg},
              ]
            },
            {
              name:'服装2',
              shops:[
                {text:'耳坠',img:shopImg},{text:'耳坠',img:shopImg},{text:'耳坠',img:shopImg},{text:'耳坠',img:shopImg},{text:'耳坠',img:shopImg},{text:'耳坠',img:shopImg},
              ]
            },
          ]
        },
        {
          id:4,
          shopClass:[
            {
              name:'服装1',
              shops:[
                {text:'耳坠',img:shopImg},{text:'耳坠',img:shopImg},{text:'耳坠',img:shopImg},{text:'耳坠',img:shopImg},{text:'耳坠',img:shopImg},{text:'耳坠',img:shopImg},
              ]
            },
            {
              name:'服装2',
              shops:[
                {text:'耳坠',img:shopImg},{text:'耳坠',img:shopImg},{text:'耳坠',img:shopImg},{text:'耳坠',img:shopImg},{text:'耳坠',img:shopImg},{text:'耳坠',img:shopImg},
              ]
            },
          ]
        },
        {
          id:5,
          shopClass:[
            {
              name:'玩具1',
              shops:[
                {text:'耳坠',img:shopImg},{text:'耳坠',img:shopImg},{text:'耳坠',img:shopImg},{text:'耳坠',img:shopImg},{text:'耳坠',img:shopImg},{text:'耳坠',img:shopImg},
              ]
            },
            {
              name:'玩具2',
              shops:[
                {text:'耳坠',img:shopImg},{text:'耳坠',img:shopImg},{text:'耳坠',img:shopImg},{text:'耳坠',img:shopImg},{text:'耳坠',img:shopImg},{text:'耳坠',img:shopImg},
              ]
            },
          ]
        },
        {
          id:6,
          shopClass:[
            {
              name:'艺术品1',
              shops:[
                {text:'耳坠',img:shopImg},{text:'耳坠',img:shopImg},{text:'耳坠',img:shopImg},{text:'耳坠',img:shopImg},{text:'耳坠',img:shopImg},{text:'耳坠',img:shopImg},
              ]
            },
            {
              name:'艺术品2',
              shops:[
                {text:'耳坠',img:shopImg},{text:'耳坠',img:shopImg},{text:'耳坠',img:shopImg},{text:'耳坠',img:shopImg},{text:'耳坠',img:shopImg},{text:'耳坠',img:shopImg},
              ]
            },
          ]
        }
      ]
    }
  }
  render() {
    return (
      <Fragment>
        <Header />
        <Content id={this.state.navid} nav={this.state.navName} click={this.navClick.bind(this)} shop={this.state.shop} />
        <Foot />
      </Fragment>
    );
  }
  //点击切换导航
  navClick(idx){
    this.setState((prevState)=>{
      prevState.navid = prevState.navName[idx].id
      return{prevState}
    })
  }
}

export default classify