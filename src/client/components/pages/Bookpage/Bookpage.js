import * as React from "react";
import BookpageInfo from "./BookpageInfo";
import BookpageRef from "./BookpageRef";
import BookpageReviews from "./BookpageReviews";
import AddReview from "./AddReview";
import Header from "../../Header/Header";
import ReviewForm from "./ReviewForm";
import axios from "axios";
import {useState, useEffect} from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

export default function Bookpage(props) {

  useEffect(() => {
    const id = props.match.params.id;
    console.log("test : " + id);
  },[]);

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
console.log(books)

    const reviewModaleOn = () => {
        document.getElementsByClassName("reviewModale")[0].style.display =
            "block";
        document.getElementsByTagName("body")[0].style.overflow = "hidden";
    };

    const reviewModaleOff = () => {
        document.getElementsByClassName("reviewModale")[0].style.display =
            "none";
        document.getElementsByTagName("body")[0].style.overflow = "auto";
    };

    return (
        <div>
            <Header />

            <div className="bookpage-container">
                {books && <BookpageInfo books={books} />}

                {books && <BookpageRef books={books} />}

                {books && <BookpageReviews books={books} />}

                {books && <AddReview reviewModaleOn={reviewModaleOn} books={books} />}

                {books && <ReviewForm reviewModaleOff={reviewModaleOff} books={books} />}
            </div>
        </div>
    );
}
