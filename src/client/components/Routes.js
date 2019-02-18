import * as React from "react";
import {Switch, Route} from "react-router-dom";
import Bookpage from "./pages/Bookpage/Bookpage";
import JuniorDashboard from "./pages/Profile/JuniorDashboard";
import JuniorPage from "./pages/Juniorpage/JuniorPage";
import "@fortawesome/fontawesome-free";
import JuniorsTable from "./pages/Coachpage/JuniorsTable";
import BooksTable from "./pages/Coachpage/BooksTable";

export default function Routes() {
    return (
        <div>
            <Switch>
                <Route path="/coachpage" component={JuniorsTable} />
                <Route path="/coachpage/books" component={BooksTable} />
                <Route path="/bookpage" component={Bookpage} />
                <Route path="/juniorpage" component={JuniorPage} />
                <Route path="/profile" component={JuniorDashboard} />
            </Switch>
        </div>
    );
}
