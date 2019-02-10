import * as React from "react";

export default class addReview extends React.Component {
    render() {
        return (
            <button className="addReview" onClick={this.props.reviewModaleOn}>
                {"+ Add a Review"}
            </button>
        );
    }
}
