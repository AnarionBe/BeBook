import * as React from "react";
import Header from "../components/Header";
import Bookpage from "./Bookpage";
import ReviewForm from "./ReviewForm";
import Login from "./Login";
import JuniorDashboard from "./JuniorDashboard";
import Container from "./Container";
import "@fortawesome/fontawesome-free";
import {Switch, BrowserRouter, Route} from "react-router-dom";

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
            <BrowserRouter>
                <Switch>
                    <Route
                        exact
                        path="/"
                        render={() => (
                            <div>
                                <Header />
                                <Login />
                            </div>
                        )}
                    />

                    <Route
                        exact
                        path="/bookpage"
                        render={() => (
                            <div>
                                <Header />
                                <Bookpage
                                    reviewModaleOn={this.reviewModaleOn}
                                />
                                <ReviewForm
                                    reviewModaleOff={this.reviewModaleOff}
                                />
                            </div>
                        )}
                    />

                    <Route
                        exact
                        path="/mainpage"
                        render={() => (
                            <div>
                                <Header />
                                <Container />
                            </div>
                        )}
                    />

                    <Route
                        exact
                        path="/profile"
                        render={() => (
                            <div>
                                <Header />
                                <JuniorDashboard
                                    modifyProfile={this.modifyProfile}
                                    ProfileToggleBack={this.ProfileToggleBack}
                                />
                            </div>
                        )}
                    />
                </Switch>
            </BrowserRouter>
        );
    }
}
