import * as React from "react";
import JuniorRow from "./JuniorRow";

export default function CoachContainer() {
    const data = [
        {
            Avatar: "../assets/avatar.jpg",
            Firstname: "Raphaël",
            Lastname: "Colson",
        },
        {
            Avatar: "../assets/avatar.jpg",
            Firstname: "John",
            Lastname: "Doe",
        },
        {
            Avatar: "../assets/avatar.jpg",
            Firstname: "Ada",
            Lastname: "Lovelace",
        },
        {
            Avatar: "../assets/avatar.jpg",
            Firstname: "Louis",
            Lastname: "Labrocante",
        },
    ];

    

    const juniors = [];

    for (let index = 0; index < data.length; index++) {
        juniors.push(
            <JuniorRow data={data[index]} />,
        );
    }

    return (
        <div className="container">
            <table>
                <tbody>{juniors}</tbody>
            </table>
        </div>
    );
}
