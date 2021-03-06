import * as React from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import axios from "axios";

export default function BooksTable() {
    console.log("prout");
    const [books, setBooks] = React.useState(undefined);

    const headers = {
        headers: {
            authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjNjNkNDgxZTAwYjZhMDAzYzY2N2JjMSIsInJvbGUiOiJjb2FjaCIsImZpcnN0TmFtZSI6IkNvYWNoU3VwcmVtZSIsImxhc3ROYW1lIjoiSG9tZXIiLCJhdmF0YXIiOiIvL3d3dy5ncmF2YXRhci5jb20vYXZhdGFyL2Y3MGIxZDE1ZDU4NTU5NDhiZDc0ZDkzZGQ0ZDRlZGU3P3M9MjAwJnI9cGcmZD1tbSIsImlhdCI6MTU1MDIzNjgyMCwiZXhwIjoxNTUwODQxNjIwfQ.M3SA6pftnL4gIUcEckv9RSwQxOpXBRdcICHfyUO6b8c",
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
