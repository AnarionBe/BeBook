import * as React from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import {useState} from "react";
import axios from "axios";

export default function BooksTable() {
    const [books, setBooks] = useState(undefined);

    const headers = {
        headers: {
            authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjNjNkNDgxZTAwYjZhMDAzYzY2N2JjMSIsImVtYWlsIjoiY29hY2guaG9tZXJAZ21haWwuY29tIiwiYXZhdGFyIjoiLy93d3cuZ3JhdmF0YXIuY29tL2F2YXRhci9mNzBiMWQxNWQ1ODU1OTQ4YmQ3NGQ5M2RkNGQ0ZWRlNz9zPTIwMCZyPXBnJmQ9bW0iLCJpYXQiOjE1NTAxNTgxMzAsImV4cCI6MTU1MDc2MjkzMH0.RCtUgJKNNZKktEHhSSp3eYF2eE3tQkcybf4jJKCd76E",
        },
    };

    if (books === undefined) {
        axios.get(`/api/coaches/books`, headers).then(res => {
            setBooks(res.data);
        });
    }

    const booksColumns = [
        {Header: "Title", accessor: "title"},
        {
            Header: "Available",
            accessor: "state",
        },
    ];

    return (
        <div className="table">
            {books && (
                <ReactTable
                    data={books}
                    columns={booksColumns}
                    defaultPageSize={10}
                    pageSizeOptions={[10, 30]}
                />
            )}
        </div>
    );
}
