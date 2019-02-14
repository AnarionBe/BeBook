import * as React from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import axios from "axios";

export default function CoachContainer() {
    // Axios.get("http://localhost:80/api/coaches/users", {
    //     headers: {
    //         authorization:
    //             "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjNjNkNDgxZTAwYjZhMDAzYzY2N2JjMSIsImVtYWlsIjoiY29hY2guaG9tZXJAZ21haWwuY29tIiwiYXZhdGFyIjoiLy93d3cuZ3JhdmF0YXIuY29tL2F2YXRhci9mNzBiMWQxNWQ1ODU1OTQ4YmQ3NGQ5M2RkNGQ0ZWRlNz9zPTIwMCZyPXBnJmQ9bW0iLCJpYXQiOjE1NTAwNjMyMDIsImV4cCI6MTU1MDA2NjgwMn0.jVuB4cUFB2wgHSirhEHjKFjeqQJsozFY7dOmndOwzGw",
    //     },
    // })
    // .then(data => {
    //     console.log(data);
    // });

    const data = [
        {
            Firstname: "Raphaël",
            Lastname: "Colson",
            Avatar: "src/client/assets/img/avatar.jpg",
        },
        {
            Firstname: "John",
            Lastname: "Doe",
            Avatar:
                "src/client/assets/img/51YHItqxXYL._SX413_BO1,204,203,200_.jpg",
        },
        {
            Firstname: "Ada",
            Lastname: "Lovelace",
            Avatar:
                "src/client/assets/img/318HYr+2eDL._SX352_BO1,204,203,200_.jpg",
        },
        {
            Firstname: "Louis",
            Lastname: "Labrocante",
            Avatar:
                "src/client/assets/img/51aIySRlwFL._SX402_BO1,204,203,200_.jpg",
        },
    ];

    const columns = [
        {
            Header: "Avatar",
            Cell: row => {
                return (
                    <div>
                        <img height={35} src={row.original.Avatar} />
                    </div>
                );
            },
            accessor: "Avatar",
        },
        {
            Header: "Firstname",
            accessor: "Firstname",
        },
        {
            Header: "Lastname",
            accessor: "Lastname",
        },
    ];

    return (
        <div className="table">
            <ReactTable
                data={data}
                columns={columns}
                defaultPageSize={10}
                pageSizeOptions={[10, 30]}
            />
            ;
        </div>
    );
}
