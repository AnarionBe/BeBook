import * as React from "react";
import Login from "./pages/Login/Login";
import {loggedIn} from "./auth";

import "@fortawesome/fontawesome-free";
import {BrowserRouter} from "react-router-dom";
import Routes from "./Routes";
import Header from "./Header/Header";

export default function Main() {
<<<<<<< HEAD

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
=======
    if (!loggedIn()) {
        return (
            <div>
                <Login />
            </div>
        );
    }
    return (
        <div>
            <Header />
            <BrowserRouter>
                <Routes />
            </BrowserRouter>
        </div>
>>>>>>> master
    );
}
