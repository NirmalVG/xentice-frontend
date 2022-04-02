import React from "react";
import { ListGroup } from "react-bootstrap";

const OffcanvasList = (props) => {
    return (
        <>
            <ListGroup.Item className="modal-list" action variant="light">
                {props.title}
            </ListGroup.Item>
        </>
    );
};

export default OffcanvasList;
