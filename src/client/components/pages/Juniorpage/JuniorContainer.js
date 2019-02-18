import * as React from "react";
import Bookpane from "./Bookpane";

export default function JuniorContainer(props) {
    const bookpanes = props.books.map(item => (
        <Bookpane
            key={item.id}
            title={item.title}
            className="bookpane"
            isAvailable={item.state}
            img={item.cover}
            tags={item.tags}
        />
    ));

    return <div className="container">{bookpanes}</div>;
}
