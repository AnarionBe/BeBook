import * as React from "react";

export default props => {
    let isBorrowed = !!props.isBorrowed,
        isLate = !!props.isLate;

    return (
        <button
            className={
                isLate
                    ? "bookpane-btn scale warning-border"
                    : "bookpane-btn scale"
            }>
            <div className={props.className}>
                <figure>
                    <img
                        className="bookcover"
                        src={props.img}
                        alt={props.title}
                    />
                </figure>
                <div className="booktext">
                    <h4 className="block-ellipsis">{props.title}</h4>
                </div>
            </div>
            {isBorrowed ? (
                <div
                    className={
                        isLate ? "status warning return" : "status okay return"
                    }>
                    <p>{"Due date : 02/21/19"}</p>
                </div>
            ) : (
                <p className="status">{"previously borrowed"}</p>
            )}
        </button>
    );
};
