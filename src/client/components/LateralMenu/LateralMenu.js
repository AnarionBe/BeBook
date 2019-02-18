import * as React from "react";
import LateralBookpane from "./LateralBookpane";
import img7 from "../../assets/img/418+D1M5XTL._SX411_BO1,204,203,200_.jpg";
import img3 from "../../assets/img/51aIySRlwFL._SX402_BO1,204,203,200_.jpg";
import img4 from "../../assets/img/51cTWGKKlyL._SX260_.jpg";
import img5 from "../../assets/img/51FHuacxYjL._SX379_BO1,204,203,200_.jpg";
import axios from "axios";
import {Link} from "react-router-dom";

export default function LateralMenu(props) {
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

    console.log(books);
    let lateralBookpanes = undefined;
    try {
        if (books) {
            lateralBookpanes = books.map(item => (
                <LateralBookpane
                    title={item.title}
                    className="lateral-bookpane"
                    img={item.cover}
                />
            ));
        }
    } catch (error) {
        console.log(error);
    }
    
    return (
        <div className={props.slide ? "lateral-menu" : "lateral-menu out"}>
            <Link to="/profile">
                <p className="my-profile">{"My Profile"}</p>
            </Link>

            {books && lateralBookpanes}
        </div>
    );
}
