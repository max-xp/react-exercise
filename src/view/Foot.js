import React, { Component } from "react";
import '../Practoce.scss';
import car from '../class/tabbar_icon_cart_nor@2x.png'
import classification from '../class/tabbar_icon_classification_pre@2x.png'
import find from '../class/tabbar_icon_find_nor@2x.png'
import home from '../class/tabbar_icon_home_nor@2x.png'
import personal from '../class/tabbar_icon_personal center_nor@2x.png'
class Foot extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nav: [
                {
                    text: "首页",
                    img: home,
                },
                {
                    text: "分类",
                    img: classification,
                },
                {
                    text: "发现",
                    img: find 
                },
                {
                    text: "购物车",
                    img: car
                },
                {
                    text: "我的",
                    img:  personal
                }
            ]
        }
    }
    render() {
        return (
            <div className="foot">
                {/* <img src={car} alt=""/> */}
                <ul>
                    {
                        this.state.nav.map((item, idx) => {
                            return (
                                <li key={idx}>
                                    
                                    <img src={item.img}  alt="" />
                                    
                                    <span>{item.text}</span>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default Foot;