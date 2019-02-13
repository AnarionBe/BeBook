import * as React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-regular-svg-icons";
import {faStar as faStarS} from "@fortawesome/free-solid-svg-icons";

export default class ReviewForm extends React.Component {
    render() {
        return (
            <div className="reviewModale">
                <div className="reviewForm">
                    <button onClick={this.props.reviewModaleOff}>{"X"}</button>
                    <h2>{"Apprendre à programmer avec Python 3"}</h2>

                    <form>
                        <div className="reviewForm-top">
                            <p className="reviewForm-left">
                                {"Noted : "}
                                <FontAwesomeIcon
                                    icon={faStarS}
                                    className="stars"
                                />
                                <FontAwesomeIcon
                                    icon={faStarS}
                                    className="stars"
                                />
                                <FontAwesomeIcon
                                    icon={faStarS}
                                    className="stars"
                                />
                                <FontAwesomeIcon
                                    icon={faStarS}
                                    className="stars"
                                />
                                <FontAwesomeIcon
                                    icon={faStar}
                                    className="stars"
                                />
                            </p>

                            <p className="reviewForm-right">
                                {"Add your note : "}
                            </p>

                            <label className="selectForm">
                                <select name="note">
                                    <option value="0">{"?/5"}</option>
                                    <option value="1">{"0"}</option>
                                    <option value="2">{"1"}</option>
                                    <option value="3">{"2"}</option>
                                    <option value="4">{"3"}</option>
                                    <option value="5">{"4"}</option>
                                    <option value="6">{"5"}</option>
                                </select>
                            </label>
                        </div>
                        <textarea name="review" />
                        <input
                            className="addReview"
                            type="submit"
                            value="+ add a review"
                        />
                    </form>
                </div>
            </div>
        );
    }
}
