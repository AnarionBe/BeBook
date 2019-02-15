import * as React from "react";
import BookpageInfo from "./BookpageInfo";
import BookpageRef from "./BookpageRef";
import BookpageReviews from "./BookpageReviews";
import AddReview from "./AddReview";
import ReviewForm from "./ReviewForm";

export default function Bookpage(props) {
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
        <div className="bookpage-container">
            <BookpageInfo />
            <BookpageRef />
            <BookpageReviews />
            <AddReview reviewModaleOn={reviewModaleOn} />
            <ReviewForm reviewModaleOff={reviewModaleOff} />
        </div>
    );
}
