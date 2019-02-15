import * as React from "react";
import {Switch, BrowserRouter, Route} from "react-router-dom";
import Bookpage from "./pages/Bookpage/Bookpage";
import JuniorDashboard from "./pages/Profile/JuniorDashboard";
import JuniorPage from "./pages/Juniorpage/JuniorPage";
import Login from "./pages/Login/Login";
import CoachPage from "./pages/Coachpage/CoachPage";
import "@fortawesome/fontawesome-free";
import JuniorsTable from "./pages/Coachpage/JuniorsTable";

export default function Routes() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/coachpage" component={CoachPage} />
                <Route exact path="/bookpage" component={Bookpage} />
                <Route exact path="/juniorpage" component={JuniorPage} />
                <Route exact path="/profile" component={JuniorDashboard} />
                <Route path="/coachpage/juniors" component={JuniorsTable} />
            </Switch>
        </div>
    );
}
