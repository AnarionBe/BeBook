import * as React from "react";

export default function HeaderMenu(props) {
    const tags = [
        "Python",
        "Programming",
        "Javascript",
        "Frontend",
        "Backend",
        "Design",
    ];

    return !props.isCoach ? (
        <ul className="headerMenu">
            <li className="submenu">
                {"TAGS"} <p className="fa fa-angle-right" />
                <ul className="tagsMenu">
                    <div className="bloc">
                        {tags.map((item, index) => {
                            return <li>{item}</li>;
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
            <li className="submenu">{"STUDENTS"}</li>
            <li>{"BOOKS"}</li>
            <li>{"BORROWINGS"}</li>
            <li>{"HISTORY"}</li>
        </ul>
    );
}
