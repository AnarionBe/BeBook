import * as React from "react";
import Header from "../components/Header";
import Bookpage from "./Bookpage";
import ReviewForm from "./ReviewForm";
import JuniorDashboard from "./JuniorDashboard";
import Container from "./Container";
import JuniorHomepage from "./JuniorHomepage";
import Login from "./Login";
import CoachPage from "./CoachPage";

import "@fortawesome/fontawesome-free";
import {Switch, BrowserRouter, Route} from "react-router-dom";

export default function Main() {
    // constructor(props) {
    //     super(props);
    //
    //     this.reviewModaleOn = this.reviewModaleOn.bind(this);
    //     this.reviewModaleOff = this.reviewModaleOff.bind(this);
    //     this.modifyProfile = this.modifyProfile.bind(this);
    //     this.ProfileToggleBack = this.ProfileToggleBack.bind(this);
    // }

    const isLogged = true;
    const isCoach = true;

    const [active, setActive] = React.useState(false);

    const switchLateralMenu = () => {
        setActive(!active);
      }

    const reviewModaleOn = () => {
        document.getElementsByClassName("reviewModale")[0].style.display =
            "block";
        document.getElementsByTagName("body")[0].style.overflow = "hidden";
    }

    const reviewModaleOff = () => {
        document.getElementsByClassName("reviewModale")[0].style.display =
            "none";
        document.getElementsByTagName("body")[0].style.overflow = "auto";
    }

    const modifyProfile = () => {
        document.getElementsByClassName("modifyProfile")[0].style.display =
            "block";
        document.getElementsByClassName("profileToggleBack")[0].style.display =
            "block";
        document.getElementsByClassName("email")[0].style.display = "none";
        document.getElementsByClassName("modifyButton")[0].style.display =
            "none";
    }

    const profileToggleBack = () => {
        document.getElementsByClassName("modifyProfile")[0].style.display =
            "none";
        document.getElementsByClassName("email")[0].style.display = "block";
        document.getElementsByClassName("modifyButton")[0].style.display =
            "block";
        document.getElementsByClassName("profileToggleBack")[0].style.display =
            "none";
    }

        return (
            <BrowserRouter>
                <Switch>
                    <Route
                        exact
                        path="/"
                        render={() => (
                            <div>
                                
                                <Login />
                            </div>
                        )}
                    />

                    <Route
                        exact
                        path="/coachpage"
                        render={() => (
                            <div>
                                <CoachPage switchLateralMenu={switchLateralMenu} slide={active} isCoach={isCoach}/>
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
                                    reviewModaleOn={reviewModaleOn}
                                />
                                <ReviewForm
                                    reviewModaleOff={reviewModaleOff}
                                />
                            </div>
                        )}
                    />

                    <Route
                        exact
                        path="/mainpage"
                        render={() => (
                            <div>
                                <JuniorHomepage switchLateralMenu={switchLateralMenu} slide={active}/>
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
                                    modifyProfile={modifyProfile}
                                    ProfileToggleBack={profileToggleBack}
                                />
                            </div>
                        )}
                    />
                </Switch>
            </BrowserRouter>
        );

}
