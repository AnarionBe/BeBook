import * as React from "react";
import bookcover from "../assets/img/images.jpg";

export default class Bookpane extends React.Component {
    render() {
        return (
            <div className="bookpane">
                <figure>
                    <img src={bookcover} alt="bookcover" />
                </figure>
                <h3>{"Apprendre à programmer avec Python 3"}</h3>
            </div>
        );
    }
}
