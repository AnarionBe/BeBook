import * as React from "react";

export default class LateralBookpane extends React.Component {
    render() {
        let isBorrowed = !!this.props.isBorrowed,
            isLate = !!this.props.isLate;

        return (
            <button
                className={
                    isLate
                        ? "bookpane-btn scale warning-border"
                        : "bookpane-btn scale"
                }>
                <div className={this.props.className}>
                    <figure>
                        <img
                            className="bookcover"
                            src={this.props.img}
                            alt={this.props.title}
                        />
                    </figure>
                    <div className="booktext">
                        <h4 className="block-ellipsis">{this.props.title}</h4>
                    </div>
                </div>
                {isBorrowed ? (
                    <div
                        className={
                            isLate
                                ? "status warning return"
                                : "status okay return"
                        }>
                        <p>{"return date : 02/21/19"}</p>
                    </div>
                ) : (
                    <p className="status">{"previously borrowed"}</p>
                )}
            </button>
        );
    }
}
