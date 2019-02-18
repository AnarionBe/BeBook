import * as React from "react";
import {Switch, Route} from "react-router-dom";
import Bookpage from "./pages/Bookpage/Bookpage";
import JuniorDashboard from "./pages/Profile/JuniorDashboard";
import JuniorPage from "./pages/Juniorpage/JuniorPage";
import "@fortawesome/fontawesome-free";
import JuniorsTable from "./pages/Coachpage/JuniorsTable";
import BooksTable from "./pages/Coachpage/BooksTable";
import NotFound from "./NotFound";
import {access} from "./auth";

export default function Routes() {
    return (
        <div>
            <Switch>
                <Route
                    exact
                    path="/"
                    component={
                        access() === "junior" ? JuniorPage : JuniorsTable
                    }
                />
                <Route exact path="/coachpage" component={JuniorsTable} />
                <Route exact path="/books" component={BooksTable} />
                <Route exact path="/bookpage" component={Bookpage} />
                <Route exact path="/juniorpage" component={JuniorPage} />
                <Route exact path="/profile" component={JuniorDashboard} />
                <Route component={NotFound} />
            </Switch>
        </div>
    );
}
