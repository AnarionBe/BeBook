import * as React from "react";
import "react-table/react-table.css";
import JuniorsTable from "./JuniorsTable";

export default function CoachContainer(props) {


    return (
        <div className="table">
           <JuniorsTable/>
        </div>
    );
}
