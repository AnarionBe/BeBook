import React, {useState, useEffect} from "react";
import JuniorContainer from "./JuniorContainer";
import Header from "../../Header/Header";
import LateralMenu from "../../LateralMenu/LateralMenu";
import axios from "axios";

export default function JuniorPage(props) {
    const [books, setBooks] = useState(undefined);

    if (books === undefined) {
        axios
            .get(`/api/juniors/books`, {
                headers: {
                    authorization:
                        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjNjNkNGRiNmFkMjI4MDA0YTYwMzAwNCIsImVtYWlsIjoianVuaW9yLmJhcnRAZ21haWwuY29tIiwiYXZhdGFyIjoiLy93d3cuZ3JhdmF0YXIuY29tL2F2YXRhci9lYjY2N2E2ODRlYzBlZGFjZWE4Y2U1Y2RlNzgwOWI0Mz9zPTIwMCZyPXBnJmQ9bW0iLCJpYXQiOjE1NTAxNDk0NTQsImV4cCI6MTU1MDc1NDI1NH0.83ovWRoydW4B6q0wFUEVmIq7FLishCXfL5Rtdnt_Chc",
                },
            })
            .then(res => {
                setBooks(res.data);
            });
    }

    return (
        <div className="main">
            <Header
                switchLateralMenu={props.switchLateralMenu}
                isCoach={props.isCoach}
            />
            <div />
            {books && <JuniorContainer books={books} />}
            <LateralMenu slide={props.slide} />
        </div>
    );
}
