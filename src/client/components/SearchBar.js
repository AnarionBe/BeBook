import * as React from "react";

export default class SearchBar extends React.Component {
    render() {
        return (
            <div className="searchBar">
                <input type="text" className="input" placeholder="" />
                <i className="fas fa-search" />
            </div>
        );
    }
}
