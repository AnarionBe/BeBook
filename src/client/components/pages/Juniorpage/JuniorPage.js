import React, {useState, useEffect} from "react";
import JuniorContainer from "./JuniorContainer";
import Header from "../../Header/Header";
import LateralMenu from "../../LateralMenu/LateralMenu";
import axios from "axios";

export default function JuniorPage(props) {
    // const [books, setBooks] = useState({hits: []});

    axios
        .get("http://localhost/api/juniors/books", {
            headers: {
                authorization:
                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjNjNkNGRiNmFkMjI4MDA0YTYwMzAwNCIsImVtYWlsIjoianVuaW9yLmJhcnRAZ21haWwuY29tIiwiYXZhdGFyIjoiLy93d3cuZ3JhdmF0YXIuY29tL2F2YXRhci9lYjY2N2E2ODRlYzBlZGFjZWE4Y2U1Y2RlNzgwOWI0Mz9zPTIwMCZyPXBnJmQ9bW0iLCJpYXQiOjE1NTAxMzU2MjYsImV4cCI6MTU1MDEzOTIyNn0.PfwTi4sDECsVn8_wEwXus0ab0rtj4X00Y3nZw1hx-2k",
            },
        })
        .then(response => {
            setBooks(response.data);
        });

    // useEffect(async () => {
    //     const result = await axios.get("http://localhost/api/juniors/books", {
    //         headers: {
    //             authorization:
    //                 "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjNjNkNGRiNmFkMjI4MDA0YTYwMzAwNCIsImVtYWlsIjoianVuaW9yLmJhcnRAZ21haWwuY29tIiwiYXZhdGFyIjoiLy93d3cuZ3JhdmF0YXIuY29tL2F2YXRhci9lYjY2N2E2ODRlYzBlZGFjZWE4Y2U1Y2RlNzgwOWI0Mz9zPTIwMCZyPXBnJmQ9bW0iLCJpYXQiOjE1NTAxMzU2MjYsImV4cCI6MTU1MDEzOTIyNn0.PfwTi4sDECsVn8_wEwXus0ab0rtj4X00Y3nZw1hx-2k",
    //         },
    //     });

    //     setBooks(result.data);
    // }, []);

    return (
        <div className="main">
            <Header
                switchLateralMenu={props.switchLateralMenu}
                isCoach={props.isCoach}
            />
            <JuniorContainer/>
            <LateralMenu slide={props.slide} />
        </div>
    );
}
