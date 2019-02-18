import React, {useState} from "react";
import JuniorContainer from "./JuniorContainer";
import axios from "axios";
import {getToken} from "../../auth";

export default function JuniorPage() {
    const [books, setBooks] = useState(undefined);

    if (books === undefined) {
        axios
            .get("/api/juniors/books", {
                headers: {
                    authorization: getToken(),
                },
            })
            .then(res => {
                setBooks(res.data);
            });
    }

    return (
        <div className="main">{books && <JuniorContainer books={books} />}</div>
    );
}
