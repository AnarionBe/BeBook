import * as React from "react";

export default class HeaderMenu extends React.Component {
    render() {
        return (
            <ul className="headerMenu">
                <li className="submenu">
                    {"TAGS"} <p className="fa fa-angle-right" />
                    <ul className="tagsMenu">
                        <div className="bloc">
                            <li>{"Python"}</li>
                            <li>{"Programming"}</li>
                            <li>{"Javascript"}</li>
                            <li>{"Front-end"}</li>
                            <li>{"Back-end"}</li>
                            <li>{"Design"}</li>
                        </div>
                        <div className="bloc">
                            <li>{"Python"}</li>
                            <li>{"Programming"}</li>
                            <li>{"Javascript"}</li>
                            <li>{"Front-end"}</li>
                            <li>{"Back-end"}</li>
                            <li>{"Design"}</li>
                        </div>
                    </ul>
                </li>
                <li>{"BEST NOTED"}</li>
                <li>{"MOST BORROWED"}</li>
                <li>{"HISTORY"}</li>
            </ul>
        );
    }
}
