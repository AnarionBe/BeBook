import * as React from "react";
import {Link} from "react-router-dom";
import {access} from "../auth";

export default function HeaderMenu(props) {
    const isCoach = true;

    const tags = [
        "Python",
        "Programming",
        "Javascript",
        "Frontend",
        "Backend",
        "Design",
    ];

    return access() === "junior" ? (
        <ul className="headerMenu">
            <li className="submenu">
                {"TAGS"} <p className="fa fa-angle-right" />
                <ul className="tagsMenu">
                    <div className="bloc">
                        {tags.map((item, index) => {
                            // eslint-disable-next-line react/no-array-index-key
                            return <li key={index}>{item}</li>;
                        })}
                    </div>
                </ul>
            </li>
            <li>{"BEST NOTED"}</li>
            <li>{"MOST BORROWED"}</li>
            <li>{"HISTORY"}</li>
        </ul>
    ) : (
        <ul className="headerMenu">
            <li>
                <Link to="/coachpage">{"JUNIORS"}</Link>
            </li>
            <li>
                <Link to="/coachpage/books">{"BOOKS"}</Link>
            </li>
            <li>{"BORROWINGS"}</li>
            <li>{"HISTORY"}</li>
        </ul>
    );
}
