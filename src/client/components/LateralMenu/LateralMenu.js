import * as React from "react";
import LateralBookpane from "./LateralBookpane";
import axios from "axios";
import {Link, Redirect} from "react-router-dom";
import {logout} from "../auth";

export default function LateralMenu(props) {
    const [books, setBooks] = React.useState(undefined);
    const [redirect, SetRedirect] = React.useState(false);

    const headers = {
        headers: {
            authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjNjNkNDgxZTAwYjZhMDAzYzY2N2JjMSIsInJvbGUiOiJjb2FjaCIsImZpcnN0TmFtZSI6IkNvYWNoU3VwcmVtZSIsImxhc3ROYW1lIjoiSG9tZXIiLCJhdmF0YXIiOiIvL3d3dy5ncmF2YXRhci5jb20vYXZhdGFyL2Y3MGIxZDE1ZDU4NTU5NDhiZDc0ZDkzZGQ0ZDRlZGU3P3M9MjAwJnI9cGcmZD1tbSIsImlhdCI6MTU1MDIzNjgyMCwiZXhwIjoxNTUwODQxNjIwfQ.M3SA6pftnL4gIUcEckv9RSwQxOpXBRdcICHfyUO6b8c",
        },
    };

    if (books === undefined) {
        axios.get("/api/coaches/borrowings", headers).then(res => {
            setBooks(res.data);
        });
    }

    let lateralBookpanes;

    try {
        if (books) {
            lateralBookpanes = books.map(item => (
                <LateralBookpane
                    key={item.id}
                    title={item.book.title}
                    className="lateral-bookpane"
                    isBorrowed={item.book.state}
                    img={item.book.cover}
                />
            ));
        }
    } catch (error) {
        console.log(error);
    }

    return (
        <div className={props.slide ? "lateral-menu" : "lateral-menu out"}>
            {redirect && <Redirect to="/" />}
            <Link to="/profile">
                <p className="my-profile">{"My Profile"}</p>
            </Link>
            <p>{"Borrowings :"}</p>
            {books && lateralBookpanes}

            <div
                className="logout"
                onClick={() => {
                    logout();
                    SetRedirect(true);
                }}>
                {"Logout"}
            </div>
        </div>
    );
}
