import React, { Component } from 'react';
import '../Practoce.scss';
import Navimg from '../class/classification_banner@2x.png'

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        const { nav, id, shop } = this.props
        return (
            <div className="content">
                {/* 导航栏 start */}
                <div className="navigation">
                    <ul>
                        {
                            nav.map((item, idx) => {
                                return (
                                    <li key={idx}
                                        className={item.id === id ? "current" : null}
                                        onClick={this.navClick.bind(this, idx)} >
                                        <span>{item.text}</span>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                {/* 导航栏 end */}



                {/* 内容 start */}
                <div className="details">
                    <div className="img">
                        <img src={Navimg} className="img" alt="" />
                    </div>
                    {
                        // eslint-disable-next-line array-callback-return
                        shop.map((item, idx) => {
                            if (item.id === id) {
                                return (
                                    <div className="shop_box" key={idx}>
                                        {
                                            item.shopClass.map((items, index) => {
                                                return (
                                                    <div key={index}>
                                                        <ul>
                                                            {
                                                                items.shops.map((shop, idxs) => {
                                                                    return(
                                                                        <li key={idxs}>
                                                                        <img src={shop.img} className="img" alt="" />
                                                                        <span>{shop.text}</span>
                                                                    </li>
                                                                    )
                                                                }
                                                                    
                                                                )
                                                            }
                                                        </ul>
                                                        <span className="tit">
                                                            {items.name}
                                                        </span>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                )
                            }

                        })
                    }
                </div>
                {/* 内容 end */}
            </div>
        )
    }
    //点击切换导航
    navClick(idx) {
        const { click } = this.props
        click(idx)
    }
    //
    onLoad(feedItem) {
        this.setState(({ loadedItems }) => {
            return { loadedItems: loadedItems.concat(feedItem) }
        })
    }
}

export default Content