import * as React from "react";
import Header from "../components/Header";
import ReviewForm from "../components/ReviewForm";
import Bookpage from "../components/Bookpage";
import "@fortawesome/fontawesome-free";

export default class Main extends React.Component {
    constructor(props) {
        super(props);

        this.reviewModaleOn = this.reviewModaleOn.bind(this);
        this.reviewModaleOff = this.reviewModaleOff.bind(this);
    }

    reviewModaleOn() {
        document.getElementsByClassName("reviewModale")[0].style.display =
            "block";
        document.getElementsByTagName("body")[0].style.overflow = "hidden";
    }

    reviewModaleOff() {
        document.getElementsByClassName("reviewModale")[0].style.display =
            "none";
        document.getElementsByTagName("body")[0].style.overflow = "auto";
    }

    render() {
        return (
            <div className="main">
                <Header />
                <Bookpage reviewModaleOn={this.reviewModaleOn} />
                <ReviewForm reviewModaleOff={this.reviewModaleOff} />
            </div>
        );
    }
}
