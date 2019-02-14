import * as React from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";

import JuniorRow from "./JuniorRow";

export default function CoachContainer() {
    const data = [
        {
            Firstname: "Raphaël",
            Lastname: "Colson",
            Avatar: "../assets/avatar.jpg",
        },
        {
            Firstname: "John",
            Lastname: "Doe",
            Avatar: "../assets/avatar.jpg",
        },
        {
            Firstname: "Ada",
            Lastname: "Lovelace",
            Avatar: "../assets/avatar.jpg",
        },
        {
            Firstname: "Louis",
            Lastname: "Labrocante",
            Avatar: "../assets/avatar.jpg",
        },
    ];
    const columns = [
        {
            Header: "Firstname",
            accessor: "firstname",
        },
        {
            Header: "Lastname",
            accessor: "lastname",
        },
        {
            Header: "Avatar",
            accessor: "avatar",
        },
    ];

    return (
        <div className="table">
            <ReactTable
                data={data}
                columns={columns}
                defaultPageSize={3}
                pageSizeOptions={[3, 6]}
            />
        </div>
    );
}
