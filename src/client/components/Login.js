import * as React from "react";

export default class Login extends React.Component {
    render() {
        return (
            <div className="loginPage">
                <div className="login">
                    <h2>{" LOGIN "}</h2>
                    <form>
                        <div className="input">
                            <h3>{"e-mail"}</h3>
                            <input
                                type="text"
                                className="email"
                                placeholder="email"
                            />
                            <h3>{"password"}</h3>
                            <input
                                type="password"
                                className="password"
                                placeholder="password"
                            />
                        </div>
                        <input
                            className="submit"
                            type="submit"
                            value="submit"
                        />
                    </form>
                </div>
            </div>
        );
    }
}
