import * as React from "react";
import {login} from "../../auth";
import {Redirect} from "react-router-dom";

export default function Login() {
    const [redirect, setRedirect] = React.useState(false);

    const connection = e => {
        e.preventDefault();

        const data = {
            email: e.target.email.value,
            password: e.target.password.value,
        };

        login(data, () => {
            return setRedirect(true);
        });
    };

    return (
        <div className="loginPage">
            {redirect && <Redirect to="/coachpage" />}
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
