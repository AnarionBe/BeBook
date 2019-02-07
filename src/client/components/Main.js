import * as React from "react";
import Container from "../components/Container";
import Header from "../components/Header";
import Login from "./login";

import "@fortawesome/fontawesome-free";

export default class Main extends React.Component {
    render() {
        return (
            <div className="main">
                <Header />
                <Container />
                <Login />
            </div>
        );
    }
}
