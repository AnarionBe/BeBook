import * as React from "react";
import Bookpane from "./Bookpane";
import img1 from "../../../assets/img/images.jpg";
import img2 from "../../../assets/img/41PZk3+t3GL.jpg";
import img3 from "../../../assets/img/51aIySRlwFL._SX402_BO1,204,203,200_.jpg";
import img4 from "../../../assets/img/51cTWGKKlyL._SX260_.jpg";
import img5 from "../../../assets/img/51FHuacxYjL._SX379_BO1,204,203,200_.jpg";
import img6 from "../../../assets/img/51YHItqxXYL._SX413_BO1,204,203,200_.jpg";
import img7 from "../../../assets/img/418+D1M5XTL._SX411_BO1,204,203,200_.jpg";

export default function JuniorContainer(props) {

    const bookpanes = props.books.map(item => (
        <Bookpane
            title={item.title}
            className="bookpane"
            isAvailable={item.state}
            img={img5}
            tags={item.tags}
            rating={item.averageRating}
        />
    ));

    return <div className="container">{bookpanes}</div>;
}
