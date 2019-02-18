import * as React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-regular-svg-icons";
import {faStar as faStarS} from "@fortawesome/free-solid-svg-icons";

export default class Bookpane extends React.Component {
    render() {
        let isAvailable = this.props.isAvailable === "available";

        return (
            <button className="bookpane-btn">
                <div className={this.props.className}>
                    <div className="stars-wrap">
                        <FontAwesomeIcon icon={faStarS} className="stars" />
                        <FontAwesomeIcon icon={faStarS} className="stars" />
                        <FontAwesomeIcon icon={faStarS} className="stars" />
                        <FontAwesomeIcon icon={faStar} className="stars" />
                        <FontAwesomeIcon icon={faStar} className="stars" />
                    </div>
                    <figure>
                        <img
                            className="bookcover"
                            src={this.props.img}
                            alt={this.props.title}
                        />
                    </figure>
                    <div className="booktext">
                        <h3 className="block-ellipsis">{this.props.title}</h3>
                        <div className={isAvailable ? "okay" : "warning"}>
                            <p>
                                {isAvailable
                                    ? "Available"
                                    : "Borrowed by John Doe"}
                            </p>
                            {isAvailable ? (
                                ""
                            ) : (
                                <p className="warning until">
                                    {"until 02/21/19"}
                                </p>
                            )}
                        </div>

                        <div>
                            <p>{this.props.tags.map(item => item + " ")}</p>
                        </div>
                    </div>
                </div>
            </button>
        );
    }
}
