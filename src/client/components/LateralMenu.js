import * as React from "react";
import LateralBookpane from "../components/LateralBookpane";
import img7 from "../assets/img/418+D1M5XTL._SX411_BO1,204,203,200_.jpg";
import img3 from "../assets/img/51aIySRlwFL._SX402_BO1,204,203,200_.jpg";
import img4 from "../assets/img/51cTWGKKlyL._SX260_.jpg";
import img5 from "../assets/img/51FHuacxYjL._SX379_BO1,204,203,200_.jpg";

export default function LateralMenu(props) {
    return (
        <div className={props.slide ? "lateral-menu" : "lateral-menu out"}>
            <a href="/profile">
                <p className="my-profile">{"My Profile"}</p>
            </a>
            <LateralBookpane
                title={
                    "React: QuickStart manuel d'apprentissage de la bibliothèque REACT JavaScript"
                }
                className="lateral-bookpane"
                isBorrowed={true}
                isLate={false}
                img={img7}
            />
            <LateralBookpane
                title={
                    "Design Patterns - Apprendre la conception de logiciels en réalisant un jeu vidéo (avec exercices et corrigés)"
                }
                className="lateral-bookpane"
                isBorrowed={false}
                isLate={false}
                img={img4}
            />
            <LateralBookpane
                title={
                    "Concevez des applications mobiles avec React Native: Développement, publication sur les stones et stratégie marketing"
                }
                className="lateral-bookpane"
                isBorrowed={true}
                isLate={true}
                img={img3}
            />
            <LateralBookpane
                title={
                    "React: QuickStart manuel d'apprentissage de la bibliothèque REACT JavaScript"
                }
                className="lateral-bookpane"
                isBorrowed={false}
                isLate={false}
                img={img5}
            />
        </div>
    );
}
