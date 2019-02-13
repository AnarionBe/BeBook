import * as React from "react";
import BookpageInfo from "./BookpageInfo";
import BookpageRef from "./BookpageRef";
import BookpageReviews from "./BookpageReviews";
import AddReview from "./AddReview";

export default class Bookpage extends React.Component {
    render() {



        return (
            <div className="bookpage-container">
                <BookpageInfo />
                <BookpageRef
                isAvailable = {this.props.isAvailable}
                isBorrowedByMe = {this.props.isBorrowedByMe}/>
                <BookpageReviews/>

                {!this.props.alreadyReviewed ?
                  <AddReview reviewModaleOn = {this.props.reviewModaleOn} /> :
                  null
                }
            </div>
        );
    }
}
