import * as React from "react";
import LateralBookpane from "./LateralBookpane";
import axios from "axios";
import {Link, Redirect} from "react-router-dom";
import {access, logout, getToken} from "../auth";

export default function LateralMenu(props) {
    const [books, setBooks] = React.useState(undefined);
    const [redirect, SetRedirect] = React.useState(false);

    if (books === undefined) {
        const url =
            access() === "coach"
                ? "/api/coaches/borrowings"
                : "/api/juniors/borrowings";

        axios
            .get(url, {
                headers: {
                    authorization: getToken(),
                },
            })
            .then(res => {
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
