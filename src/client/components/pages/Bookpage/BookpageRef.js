import * as React from "react";
import BorrowButton from "./BorrowButton";
import ReserveButton from "./ReserveButton";
import ExtendButton from "./ExtendButton";

export default class BookpageRef extends React.Component {

    render() {

      let button;

        if (this.props.isAvailable == true) {
         button = <BorrowButton/>;
       } else if (this.props.isAvailable == false && this.props.isBorrowedByMe == true){
         button = <ExtendButton />;
       } else {
         button = <ReserveButton/>;
       }

        return (
            <div className="bookpageRef">
                <h2>{"Author :"}</h2>
                <p>{"Gérad Swinnen"}</p>
                <p>{"ISBN: 9652 - 51412 - 215"}</p>
                <p className="availableTag">{" Available "}</p>
                {button}

            </div>
        );
    }
}
