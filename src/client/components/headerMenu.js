import * as React from "react";
import avatar from "../assets/avatar.jpg";

export default class HeaderMenu extends React.Component {
    render() {
        return (
            <nav className="headerMenu">
                <ul className="headerList">
                    <li>{"TAGS"}</li>
                    <li>{"BEST NOTED"}</li>
                    <li>{"MOST BORROWED"}</li>
                    <li>{"HISTORY"}</li>
                    <div className="searchBar">
                        <input type="text" className="input" placeholder="" />
                        <i className="fas fa-search" />
                        <div className="avatar">
                            <img src={avatar} />
                        </div>
                    </div>
                </ul>
            </nav>
        );
    }
}
