import * as React from "react";
import bookcover from "../../../assets/img/images.jpg";

export default function BookpageInfo(props) {

  const item = props.item;

        return (
            <div className="bookpage-info">
                <img src={bookcover} />
                <div className="bookpage-text">
                    <h2> {item.title}</h2>
                    <p>
                        {
                            "Phasellus quis aliquam ligula. Pellentesque tempus in nisi id pharetra. Aliquam congue in diam non viverra. Vestibulum odio diam, aliquet ut velit eget, dapibus condimentum ex. Mauris consectetur, nunc ut ornare iaculis, urna quam aliquet magna, eget blandit tellus lorem tristique orci. Sed semper mi mauris, ut luctus ipsum tincidunt in. Donec ac pulvinar lectus. Nunc viverra ex non sem ultrices, quis venenatis est venenatis. Suspendisse lacinia sit amet massa at commodo. Sed egestas posuere velit, non finibus ligula porta ac. Nulla at condimentum ligula. "
                        }
                    </p>
                </div>
            </div>
        );

}
