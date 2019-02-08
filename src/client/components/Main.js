import * as React from "react";
import Header from "../components/Header";
import ReviewForm from "../components/ReviewForm";
import "@fortawesome/fontawesome-free";

export default class Main extends React.Component {
    render() {
        return (
            <div className="main">
                <Header />

                <ReviewForm />
            </div>
        );
    }
}
