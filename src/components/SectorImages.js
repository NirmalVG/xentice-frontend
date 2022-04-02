import React from "react";
import { Image } from "react-bootstrap";

const SectorImages = (props) => {
    return (
        <div className="icon-group zoom">
            <Image
                fluid
                className="icon-size "
                src={`images/${props.icon}.png`}
                alt={props.name}
            />
            <p className="text">{props.name}</p>
        </div>
    );
};

export default SectorImages;
