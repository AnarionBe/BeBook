import * as React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-regular-svg-icons";
import {faStar as faStarS} from "@fortawesome/free-solid-svg-icons";

export default class BookpageReviews extends React.Component {
    render() {
        return (
            <div className="bookpageReviews">
                <h2>{"Reviews :"}</h2>
                <h6>{"John Doe wrote :"}</h6>
                <div className="stars-wrap">
                    <FontAwesomeIcon icon={faStarS} className="stars" />
                    <FontAwesomeIcon icon={faStarS} className="stars" />
                    <FontAwesomeIcon icon={faStarS} className="stars" />
                    <FontAwesomeIcon icon={faStarS} className="stars" />
                    <FontAwesomeIcon icon={faStar} className="stars" />
                </div>
                <p>
                    {
                        "Les nombreux problèmes algorithmiques de ce livre constituent à la fois une formation à la programmation et une préparation efficace aux compétitions et entretiens d'embauche d'entreprises spécialisées en informatique (telles que Google ou Facebook). La variété des problèmes étudiés convient aux étudiants des écoles d'ingénieurs comme à ceux des parcours universitaires à partir de la L3. On y trouve les algorithmes classiques de géométrie ou de recherche de plus court chemin mais également des sujets plus atypiques tels que les arbres de Fenwick ou les liens dansants de Knuth. La rédaction dégage les idées essentielles pour la compréhension et indique les détails techniques à surmonter pour une implémentation efficace. Les codes complets et succincts en Python 3 présentés dans ce livre sont disponibles sur le site d'accompa¬gnement tryalgo.org."
                    }
                </p>

                <h6> {"Ada Lovelace :"} </h6>
                <div className="stars-wrap">
                    <FontAwesomeIcon icon={faStarS} className="stars" />
                    <FontAwesomeIcon icon={faStarS} className="stars" />
                    <FontAwesomeIcon icon={faStarS} className="stars" />
                    <FontAwesomeIcon icon={faStar} className="stars" />
                    <FontAwesomeIcon icon={faStar} className="stars" />
                </div>
                <p>
                    {
                        "Les nombreux problèmes algorithmiques de ce livre constituent à la fois une formation à la programmation et une préparation efficace aux compétitions et entretiens d'embauche d'entreprises spécialisées en informatique (telles que Google ou Facebook). La variété des problèmes étudiés convient aux étudiants des écoles d'ingénieurs comme à ceux des parcours universitaires à partir de la L3. On y trouve les algorithmes classiques de géométrie ou de recherche de plus court chemin mais également des sujets plus atypiques tels que les arbres de Fenwick ou les liens dansants de Knuth. La rédaction dégage les idées essentielles pour la compréhension et indique les détails techniques à surmonter pour une implémentation efficace. Les codes complets et succincts en Python 3 présentés dans ce livre sont disponibles sur le site d'accompa¬gnement tryalgo.org."
                    }
                </p>
            </div>
        );
    }
}
