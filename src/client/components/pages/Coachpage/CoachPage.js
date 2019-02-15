import * as React from "react";
import Header from "../../Header/Header";
import CoachContainer from "./CoachContainer";
import JuniorsTable from "./JuniorsTable";
import BooksTable from "./BooksTable";
import {Router, Route} from "react-router-dom";

export default function CoachPage() {
    return (
        <div>
            <Header />
            <JuniorsTable />
        </div>
    );
};
