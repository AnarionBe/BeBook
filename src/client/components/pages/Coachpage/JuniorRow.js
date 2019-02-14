import * as React from "react";

export default function JuniorRow(props) {
    return (
        <tr className="junior-row">
            <td className="junior-cell-img">
                <img
                    className="avatar"
                    src={props.data.Avatar}
                    alt={props.data.Lastname}
                />
            </td>
            <td className="junior-cell-firstname" id="cell-firstname">
                {props.data.Firstname}
            </td>
            <td className="junior-cell-lastname">{props.data.Lastname}</td>
            <td>
                <button>{"edit"}</button>
            </td>
            <td>
                <button>{"delete"}</button>
            </td>
        </tr>
    );
}
