import * as React from "react";
import BookpageInfo from "./BookpageInfo";
import BookpageRef from "./BookpageRef";
import BookpageReviews from "./BookpageReviews";
import AddReview from "./AddReview";
import Header from "../../Header/Header";
import LateralMenu from "../../LateralMenu/LateralMenu";


export default function Bookpage(props) {
    return (
        <div>
            <Header
                switchLateralMenu={props.switchLateralMenu}
                isCoach={props.isCoach}
            />
            <LateralMenu slide={props.slide} />

            <div className="bookpage-container">
                <BookpageInfo />
                <BookpageRef />
                <BookpageReviews />
                <AddReview reviewModaleOn={props.reviewModaleOn} />
            </div>
        </div>
    );
}
