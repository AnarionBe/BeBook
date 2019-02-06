import * as React from "react";
import Bookpane from "../components/Bookpane";

export default class Container extends React.Component {
    render() {
        return (
            <div className="container">
                <h1>{"Welcome in BeBook !"}</h1>
                <Bookpane />
            </div>
        );
    }
}
