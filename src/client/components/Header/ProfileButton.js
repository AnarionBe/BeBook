import React, {useState, useEffect} from "react";
import axios from "axios";

export default function profileButton(props) {
    const [profile, setProfile] = useState({profile: null});

    const headers = {
        headers: {
            authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjNjNkNGRiNmFkMjI4MDA0YTYwMzAwNCIsInJvbGUiOiJqdW5pb3IiLCJmaXJzdE5hbWUiOiJKdW5pb3IiLCJsYXN0TmFtZSI6IkJhcnQiLCJhdmF0YXIiOiIvL3d3dy5ncmF2YXRhci5jb20vYXZhdGFyL2ViNjY3YTY4NGVjMGVkYWNlYThjZTVjZGU3ODA5YjQzP3M9MjAwJnI9cGcmZD1tbSIsImlhdCI6MTU1MDQ5Mjc1NCwiZXhwIjoxNTUxMDk3NTU0fQ.JFnzcg6sFVlGy_hykC7uK27RK79-GNJARFaJzavOyi0",
        },
    };

    useEffect(() => {
        // axios
        //     .get("/api/coaches/profile", headers)
        //     .then(result => setProfile(result.data));
        axios
            .get("/api/juniors/profile", headers)
            .then(result => setProfile(result.data));
    }, []);

    return (
        <img onClick={props.onClick} className="avatar" src={profile.avatar} />
    );
}
