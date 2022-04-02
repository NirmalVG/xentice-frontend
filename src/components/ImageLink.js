import React from "react";
import { Image } from "react-bootstrap";

const ImageLink = (props) => {
    return (
        <div className="icon-section zoom">
            <Image
                fluid
                className="img-size"
                src={`images/${props.icon}.png`}
                alt={props.name}
            />
            <p className="text">{props.name}</p>
        </div>
    );
};

export default ImageLink;
