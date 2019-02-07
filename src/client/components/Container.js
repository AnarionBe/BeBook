import * as React from "react";
import Bookpane from "../components/Bookpane";
import LateralMenu from "../components/LateralMenu";
import img1 from "../assets/img/images.jpg";
import img2 from "../assets/img/41PZk3+t3GL.jpg";
import img3 from "../assets/img/51aIySRlwFL._SX402_BO1,204,203,200_.jpg";
import img4 from "../assets/img/51cTWGKKlyL._SX260_.jpg";
import img5 from "../assets/img/51FHuacxYjL._SX379_BO1,204,203,200_.jpg";
import img6 from "../assets/img/51YHItqxXYL._SX413_BO1,204,203,200_.jpg";
import img7 from "../assets/img/418+D1M5XTL._SX411_BO1,204,203,200_.jpg";

export default class Container extends React.Component {
    render() {
        return (
            <div className="container">
                <Bookpane
                    title={
                        "Design Patterns - Apprendre la conception de logiciels en réalisant un jeu vidéo (avec exercices et corrigés)"
                    }
                    className="bookpane"
                    isAvailable={true}
                    img={img1}
                />
                <Bookpane
                    title={"Apprendre à programmer avec Python 3"}
                    className="bookpane"
                    isAvailable={true}
                    img={img2}
                />
                <Bookpane
                    title={"Beginning HTML5 and CSS3 For Dummies"}
                    className="bookpane"
                    isAvailable={true}
                    img={img3}
                />
                <Bookpane
                    title={"Réalisez votre site web avec HTML 5 et CSS 3"}
                    className="bookpane"
                    isAvailable={true}
                    img={img4}
                />
                <Bookpane
                    title={"CSS 3 Flexbox: Plongez dans les CSS modernes."}
                    className="bookpane"
                    isAvailable={true}
                    img={img5}
                />
                <Bookpane
                    title={
                        "Des applications modernes avec React: Maîtrisez un framework JavaScript parmi les plus utilisés dans l’industrie"
                    }
                    className="bookpane disabled"
                    isAvailable={false}
                    img={img6}
                />
                <Bookpane
                    title={
                        "Concevez des applications mobiles avec React Native: Développement, publication sur les stones et stratégie marketing"
                    }
                    className="bookpane disabled"
                    isAvailable={false}
                    img={img7}
                />
                <Bookpane
                    title={
                        "React: QuickStart manuel d'apprentissage de la bibliothèque REACT JavaScript"
                    }
                    className="bookpane"
                    isAvailable={true}
                    img={img7}
                />
                <LateralMenu />
            </div>
        );
    }
}
