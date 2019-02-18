import * as React from "react";
import avatar from "../../assets/img/avatar.jpg";

export default function profileButton(props) {
    return <img onClick={props.onClick} className="avatar" src={avatar} />;
}
