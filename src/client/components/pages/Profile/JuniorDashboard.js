import React, {useState, useEffect} from "react";
import axios from "axios";

export default function JuniorDashboard() {
    const modifyProfile = () => {
        document.getElementsByClassName("modifyProfile")[0].style.display =
            "block";
        document.getElementsByClassName("profileToggleBack")[0].style.display =
            "block";
        document.getElementsByClassName("email")[0].style.display = "none";
        document.getElementsByClassName("modifyButton")[0].style.display =
            "none";
    };

    const profileToggleBack = () => {
        document.getElementsByClassName("modifyProfile")[0].style.display =
            "none";
        document.getElementsByClassName("email")[0].style.display = "block";
        document.getElementsByClassName("modifyButton")[0].style.display =
            "block";
        document.getElementsByClassName("profileToggleBack")[0].style.display =
            "none";
    };

    const [profile, setProfile] = useState({profile: null});

    const headers = {
        headers: {
            authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjNjNkNGRiNmFkMjI4MDA0YTYwMzAwNCIsInJvbGUiOiJqdW5pb3IiLCJmaXJzdE5hbWUiOiJKdW5pb3IiLCJsYXN0TmFtZSI6IkJhcnQiLCJhdmF0YXIiOiIvL3d3dy5ncmF2YXRhci5jb20vYXZhdGFyL2ViNjY3YTY4NGVjMGVkYWNlYThjZTVjZGU3ODA5YjQzP3M9MjAwJnI9cGcmZD1tbSIsImlhdCI6MTU1MDQ5Mjc1NCwiZXhwIjoxNTUxMDk3NTU0fQ.JFnzcg6sFVlGy_hykC7uK27RK79-GNJARFaJzavOyi0",
        },
    };

    useEffect(() => {
        axios
            .get("/api/juniors/profile", headers)
            .then(result => setProfile(result.data));
    }, []);

    return (
        <div className="JuniorDashboard-container">
            <img className="profilePic" src={profile.avatar} />

            <div className="profileInfo">
                <p>
                    <b>{"Last Name: "} </b> {profile.lastName}
                </p>
                <p>
                    <b>{"First Name: "} </b> {profile.firstName}
                </p>
                <p className="email">{profile.email}</p>
                <button className="modifyButton" onClick={modifyProfile}>
                    {"modify"}
                </button>

                <form className="modifyProfile">
                    <div className="modifyInput">
                        <input type="text" placeholder="e-mail" />
                        <input type="password" placeholder="New password" />
                    </div>

                    <input
                        className="submitProfile"
                        type="submit"
                        value="submit"
                    />
                </form>
                <button
                    className="profileToggleBack"
                    onClick={profileToggleBack}>
                    {"back"}
                </button>
            </div>
        </div>
    );
}
