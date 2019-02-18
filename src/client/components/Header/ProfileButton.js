import React, {useState, useEffect} from "react";
import axios from "axios";
import {access, getToken} from "../auth";

export default function profileButton(props) {
    const [profile, setProfile] = useState({profile: null});

    useEffect(() => {
        const url =
            access() === "coach"
                ? "/api/coaches/profile"
                : "/api/juniors/profile";

        axios
            .get(url, {
                headers: {
                    authorization: getToken(),
                },
            })
            .then(result => setProfile(result.data));
    }, []);

    return (
        <img onClick={props.onClick} className="avatar" src={profile.avatar} />
    );
}
