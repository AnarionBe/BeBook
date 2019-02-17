import * as React from "react";
import BorrowButton from "./BorrowButton";
import ReserveButton from "./ReserveButton";
import ExtendButton from "./ExtendButton";

export default function BookpageRef (props) {

  const item = props.books[1];


      let button;

        if (item.state == "available") {
         button = <BorrowButton/>;
       } else if (item.state == "unavailable" /*&& this.props.isBorrowedByMe == true*/){
         button = <ExtendButton />;
       } else {
         button = <ReserveButton/>;
       }

        return (
            <div className="bookpageRef">
                <h2>{"Author :"}</h2>
                <p>{item.author}</p>
                <p>{"ISBN : " + item.isbnNumber}</p>
                <p className={item.state +"Tag"}>{item.state}</p>
                {button}

            </div>
        );

}
