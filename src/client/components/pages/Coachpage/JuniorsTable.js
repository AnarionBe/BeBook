import * as React from "react";
import {useState} from "react";
import ReactTable from "react-table";
import axios from "axios";
import {getToken} from "../../auth";
import "react-table/react-table.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserEdit, faTrash} from "@fortawesome/free-solid-svg-icons";

export default function JuniorsTable() {
    const [users, setUsers] = useState(undefined);

    if (users === undefined) {
        axios
            .get("/api/coaches/users", {
                headers: {
                    authorization: getToken(),
                },
            })
            .then(res => {
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
            width: 50,
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
            Header: "Email",
            accessor: "email",
        },
        {
            Header: "Created at",
            Cell: row => {
                return row.original.date;
            },
        },
        {
            Header: "Role",
            accessor: "role",
            width: 70,
        },
        {
            Header: "Edit",
            Cell: () => <FontAwesomeIcon icon={faUserEdit} />,
            width: 30,
        },
        {
            Header: "Delete",
            Cell: () => <FontAwesomeIcon icon={faTrash} />,
            width: 30,
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
