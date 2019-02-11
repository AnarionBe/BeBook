import * as React from "react";
import BorrowButton from "./BorrowButton";

export default class BookpageRef extends React.Component {
    render() {
        return (
            <div className="bookpageRef">
                <h2>{"Author :"}</h2>
                <p>{"Gérad Swinnen"}</p>
                <p>{"ISBN: 9652 - 51412 - 215"}</p>
                <p className="availableTag">{" Available "}</p>
                <BorrowButton />
            </div>
        );
    }
}
