import * as React from "react";
import {login, access, loggedIn} from "../../auth";
import {Redirect} from "react-router-dom";

export default function Login() {
    const [, setUpdate] = React.useState();
    const connection = e => {
        e.preventDefault();

        login(
            {
                email: e.target.email.value,
                password: e.target.password.value,
            },
            () => {
                setUpdate(true);
            },
        );
    };

    console.log("caca");
    if (window.state !== "/login") {
        window.history.pushState(null, "", "/login");
    }

    return (
        <div className="loginPage">
            {loggedIn() && (
                <Redirect
                    to={access() === "junior" ? "/juniorpage" : "/coachpage"}
                />
            )}
            <div className="login">
                <h2>{" LOGIN "}</h2>
                <form onSubmit={connection}>
                    <div className="input">
                        <h3>{"e-mail"}</h3>
                        <input
                            type="text"
                            className="email"
                            placeholder="email"
                            name="email"
                        />
                        <h3>{"password"}</h3>
                        <input
                            type="password"
                            className="password"
                            placeholder="password"
                            name="password"
                        />
                    </div>
                    <input className="submit" type="submit" value="submit" />
                </form>
            </div>
        </div>
    );
}
