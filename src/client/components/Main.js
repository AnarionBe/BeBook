import * as React from "react";
import Header from "../components/Header";
import JuniorDashboard from "./JuniorDashboard";

import "@fortawesome/fontawesome-free";

export default class Main extends React.Component {
    constructor(props) {
        super(props);

        this.reviewModaleOn = this.reviewModaleOn.bind(this);
        this.reviewModaleOff = this.reviewModaleOff.bind(this);
        this.modifyProfile = this.modifyProfile.bind(this);
        this.ProfileToggleBack = this.ProfileToggleBack.bind(this);
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

    modifyProfile() {
        document.getElementsByClassName("modifyProfile")[0].style.display =
            "block";
        document.getElementsByClassName("profileToggleBack")[0].style.display =
            "block";
        document.getElementsByClassName("email")[0].style.display = "none";
        document.getElementsByClassName("modifyButton")[0].style.display =
            "none";
    }

    ProfileToggleBack() {
        document.getElementsByClassName("modifyProfile")[0].style.display =
            "none";
        document.getElementsByClassName("email")[0].style.display = "block";
        document.getElementsByClassName("modifyButton")[0].style.display =
            "block";
        document.getElementsByClassName("profileToggleBack")[0].style.display =
            "none";
    }

    render() {
        return (
            <div className="main">
                <Header />
                <JuniorDashboard />
            </div>
        );
    }
}
