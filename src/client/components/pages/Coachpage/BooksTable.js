import * as React from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import axios from "axios";
import {getToken} from "../../auth";

export default function BooksTable() {
    const [books, setBooks] = React.useState(undefined);

    if (books === undefined) {
        axios
            .get("/api/coaches/books", {
                headers: {
                    authorization: getToken(),
                },
            })
            .then(res => {
                setBooks(res.data);
            });
    }

    const booksColumns = [
        {
            Header: "Cover",
            Cell: row => {
                return (
                    <div>
                        <img height={35} src={row.original.cover} />
                    </div>
                );
            },
            width: 50,
        },
        {Header: "Title", accessor: "title", width: 280},
        {Header: "Author", accessor: "author"},
        {Header: "Borrowed by", accessor: "borrowedBy"},
        {Header: "Rating", accessor: "averageRating", width: 50},
        {Header: "Language", accessor: "language", width: 50},
        {
            Header: "Available",
            Cell: row => {
                if (row.original.state === "available") {
                    return "ok";
                } else {
                    return "X";
                }
            },
            width: 60,
        },
        {
            Header: "Tags",
            Cell: row => {
                return <div>{row.original.tags.map(item => item + " ")}</div>;
            },
        },
        {Header: "ISBN", accessor: "isbnNumber", width: 130},
    ];

    console.log(books);

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
