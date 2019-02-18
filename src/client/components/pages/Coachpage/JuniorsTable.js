import * as React from "react";
import {useState} from "react";
import ReactTable from "react-table";
import axios from "axios";
import "react-table/react-table.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserEdit, faTrash} from "@fortawesome/free-solid-svg-icons";

export default function JuniorsTable() {
    const [users, setUsers] = useState(undefined);

    const headers = {
        headers: {
            authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjNjNkNDgxZTAwYjZhMDAzYzY2N2JjMSIsImVtYWlsIjoiY29hY2guaG9tZXJAZ21haWwuY29tIiwiYXZhdGFyIjoiLy93d3cuZ3JhdmF0YXIuY29tL2F2YXRhci9mNzBiMWQxNWQ1ODU1OTQ4YmQ3NGQ5M2RkNGQ0ZWRlNz9zPTIwMCZyPXBnJmQ9bW0iLCJpYXQiOjE1NTAxNTgxMzAsImV4cCI6MTU1MDc2MjkzMH0.RCtUgJKNNZKktEHhSSp3eYF2eE3tQkcybf4jJKCd76E",
        },
    };

    if (users === undefined) {
        axios.get(`/api/coaches/users`, headers).then(res => {
            setUsers(res.data);
        });
    }

    const usersColumns = [
        {
            Header: "Avatar",
            Cell: row => (
                <div>
                    <img height={35} src={row.original.avatar} />
                </div>
            ),
            accessor: "avatar",
        },
        {
            Header: "Firstname",
            accessor: "firstName",
        },
        {
            Header: "Lastname",
            accessor: "lastName",
        },
        {
            Header: "Role",
            accessor: "role",
        },
        {
            Header: "Edit",
            Cell: () => <FontAwesomeIcon icon={faUserEdit} />,
        },
        {
            Header: "Delete",
            Cell: () => <FontAwesomeIcon icon={faTrash} />,
        },
    ];

    return (
        <div className="table">
            {users && (
                <ReactTable
                    data={users}
                    columns={usersColumns}
                    defaultPageSize={10}
                    pageSizeOptions={[10, 30]}
                />
            )}
        </div>
    );
}
