import * as React from "react";
import Bookpage from "./pages/Bookpage/Bookpage";
import ReviewForm from "./pages/Bookpage/ReviewForm";
import JuniorDashboard from "./pages/Profile/JuniorDashboard";
import JuniorPage from "./pages/Juniorpage/JuniorPage";
import Login from "./pages/Login/Login";
import CoachPage from "./pages/Coachpage/CoachPage";

import "@fortawesome/fontawesome-free";
import {Switch, BrowserRouter, Route} from "react-router-dom";

export default function Main() {

    const isAvailable = true;
    const isBorrowedByMe = false;

    const alreadyReviewed = false;

    const isLogged = true;
    const isCoach = true;

    const [active, setActive] = React.useState(false);

    const switchLateralMenu = () => {
        setActive(!active);
    };

    const reviewModaleOn = () => {
        document.getElementsByClassName("reviewModale")[0].style.display =
            "block";
        document.getElementsByTagName("body")[0].style.overflow = "hidden";
    };

    const reviewModaleOff = () => {
        document.getElementsByClassName("reviewModale")[0].style.display =
            "none";
        document.getElementsByTagName("body")[0].style.overflow = "auto";
    };

    const modifyProfile = () => {
        document.getElementsByClassName("modifyProfile")[0].style.display =
            "block";
        document.getElementsByClassName("profileToggleBack")[0].style.display =
            "block";
        document.getElementsByClassName("email")[0].style.display = "none";
        document.getElementsByClassName("modifyButton")[0].style.display =
            "none";
    };

    const profileToggleBack = () => {
        document.getElementsByClassName("modifyProfile")[0].style.display =
            "none";
        document.getElementsByClassName("email")[0].style.display = "block";
        document.getElementsByClassName("modifyButton")[0].style.display =
            "block";
        document.getElementsByClassName("profileToggleBack")[0].style.display =
            "none";
    };

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
                        path="/bookpage"
                        render={() => (
                            <div>
                                <Header />
                                <Bookpage
                                    reviewModaleOn={reviewModaleOn}
                                    isAvailable={isAvailable}
                                    isBorrowedByMe={isBorrowedByMe}
                                    alreadyReviewed={alreadyReviewed}
                                />
                                <ReviewForm
                                    reviewModaleOff={reviewModaleOff}
                                />
                            </div>
                        )}
                    />

                <Route
                    exact
                    path="/bookpage"
                    render={() => (
                        <div>
                            <Bookpage
                                reviewModaleOn={reviewModaleOn}
                                switchLateralMenu={switchLateralMenu}
                                slide={active}
                                isCoach={isCoach}
                            />
                            <ReviewForm reviewModaleOff={reviewModaleOff} />
                        </div>
                    )}
                />

                <Route
                    exact
                    path="/juniorpage"
                    render={() => (
                        <div>
                            <JuniorPage
                                switchLateralMenu={switchLateralMenu}
                                slide={active}
                                isCoach={isCoach}
                            />
                        </div>
                    )}
                />

                <Route
                    exact
                    path="/profile"
                    render={() => (
                        <div>
                            <JuniorDashboard
                                modifyProfile={modifyProfile}
                                ProfileToggleBack={profileToggleBack}
                                switchLateralMenu={switchLateralMenu}
                                slide={active}
                                isCoach={isCoach}
                            />
                        </div>
                    )}
                />
            </Switch>
        </BrowserRouter>
    );
}
