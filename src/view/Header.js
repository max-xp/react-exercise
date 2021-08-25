import React, { Component } from "react";
import search from '../class/classification_icon_search@2x.png'
import '../Practoce.scss';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="headerbag" >
                <div className="search_box" >
                    <div className="img" >
                        <img src={search} className="search" alt="search" />
                    </div>
                    <div className="text">
                        <input type="text" placeholder="国家级铜雕"/>
                    </div>
                </div>
            </div>
        )
    }
}
export default Header;