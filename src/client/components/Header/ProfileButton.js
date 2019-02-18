import React, {useState, useEffect} from "react";
import axios from "axios";
import {getToken} from "../auth";

export default function profileButton(props) {
    const [profile, setProfile] = useState({profile: null});

    useEffect(() => {
        // axios
        //     .get("/api/coaches/profile", headers)
        //     .then(result => setProfile(result.data));
        axios
            .get("/api/juniors/profile", {
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
