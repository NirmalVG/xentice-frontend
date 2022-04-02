import React from "react";
import commercialShop from "../data/commercialShop";
import CommercialShop from "./services/CommercialShop";
import commercialOffice from "../data/commercialOffice";
import CommercialOffice from "./services/CommercialOffice";
import commercialLand from "../data/commercialLand";
import CommercialLand from "./services/CommercialLand";
import commercialBuilding from "../data/commercialBuilding";
import CommercialBuilding from "./services/CommercialBuilding";
import industrialBuilding from "../data/industrialBuilding";
import IndustrialBuilding from "./services/IndustrialBuilding";
import industrialLand from "../data/industrialLand";
import IndustrialLand from "./services/IndustrialLand";
import coWorkingSpace from "../data/coWorkingSpace";
import CoWorkingSpace from "./services/CoWorkingSpace";
import privateOffice from "../data/privateOffice";
import PrivateOffice from "./services/PrivateOffice";
import meetingRoom from "../data/meetingRoom";
import MeetingRoom from "./services/MeetingRoom";
import { Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";

const ServiceList = () => {
    return (
        <>
            <Container>
                <Image
                    className="img-size"
                    src="images/commercial-shop-black.png"
                    alt="Commercial Shop"
                    fluid
                />
                <span className="service-text">Commercial Shop</span>
                <Link
                    to="/detailed"
                    style={{ textDecoration: "none", float: "right" }}
                    className="zoom explore"
                >
                    Explore More
                </Link>
                <Grid container spacing={2} columns={10}>
                    {commercialShop.map((shop) => (
                        <CommercialShop shop={shop} />
                    ))}
                </Grid>

                <Image
                    className="img-size"
                    src="images/commercial-office-black.png"
                    alt="Commercial Office"
                    fluid
                />
                <span className="service-text">Commercial Office</span>
                <Link
                    to="/detailed"
                    style={{ textDecoration: "none", float: "right" }}
                    className="zoom explore"
                >
                    Explore More
                </Link>

                <Grid container spacing={2} columns={10}>
                    {commercialOffice.map((office) => (
                        <CommercialOffice office={office} />
                    ))}
                </Grid>

                <Image
                    className="img-size"
                    src="images/commercial-office-black.png"
                    alt="Commercial Land"
                    fluid
                />
                <span className="service-text">Commercial Land</span>
                <Link
                    to="/detailed"
                    style={{ textDecoration: "none", float: "right" }}
                    className="zoom explore"
                >
                    Explore More
                </Link>

                <Grid container spacing={2} columns={10}>
                    {commercialLand.map((land) => (
                        <CommercialLand land={land} />
                    ))}
                </Grid>
                <Image
                    className="img-size"
                    src="images/commercial-building-black.png"
                    alt="Commercial Building"
                    fluid
                />
                <span className="service-text">Commercial Building</span>
                <Link
                    to="/detailed"
                    style={{ textDecoration: "none", float: "right" }}
                    className="zoom explore"
                >
                    Explore More
                </Link>
                <Grid container spacing={2} columns={10}>
                    {commercialBuilding.map((building) => (
                        <CommercialBuilding building={building} />
                    ))}
                </Grid>
                <Image
                    className="img-size"
                    src="images/industrial-building-black.png"
                    alt="Industrial Building"
                    fluid
                />
                <span className="service-text">Industrial Building</span>
                <Link
                    to="/detailed"
                    style={{ textDecoration: "none", float: "right" }}
                    className="zoom explore"
                >
                    Explore More
                </Link>
                <Grid container spacing={2} columns={10}>
                    {industrialBuilding.map((industrial) => (
                        <IndustrialBuilding industrial={industrial} />
                    ))}
                </Grid>
                <Image
                    className="img-size"
                    src="images/industrial-land-black.png"
                    alt="Industrial Land"
                    fluid
                />
                <span className="service-text">Industrial Land</span>
                <Link
                    to="/detailed"
                    style={{ textDecoration: "none", float: "right" }}
                    className="zoom explore"
                >
                    Explore More
                </Link>
                <Grid container spacing={2} columns={10}>
                    {industrialLand.map((industry) => (
                        <IndustrialLand industry={industry} />
                    ))}
                </Grid>
                <Image
                    className="img-size"
                    src="images/co-woking-space-black.png"
                    alt="Co-working Space"
                    fluid
                />
                <span className="service-text">Co-working Space</span>
                <Link
                    to="/detailed"
                    style={{ textDecoration: "none", float: "right" }}
                    className="zoom explore"
                >
                    Explore More
                </Link>
                <Grid container spacing={2} columns={10}>
                    {coWorkingSpace.map((working) => (
                        <CoWorkingSpace working={working} />
                    ))}
                </Grid>
                <Image
                    className="img-size"
                    src="images/private-office-black.png"
                    alt="Private Office"
                    fluid
                />
                <span className="service-text">Private Office</span>
                <Link
                    to="/detailed"
                    style={{ textDecoration: "none", float: "right" }}
                    className="zoom explore"
                >
                    Explore More
                </Link>
                <Grid container spacing={2} columns={10}>
                    {privateOffice.map((privateOffice) => (
                        <PrivateOffice privateOffice={privateOffice} />
                    ))}
                </Grid>
                <Image
                    className="img-size"
                    src="images/meeting-room-black.png"
                    alt="Meeting Room"
                    fluid
                />
                <span className="service-text">Meeting Room</span>
                <Link
                    to="/detailed"
                    style={{ textDecoration: "none", float: "right" }}
                    className="zoom explore"
                >
                    Explore More
                </Link>
                <Grid container spacing={2} columns={10}>
                    {meetingRoom.map((meeting) => (
                        <MeetingRoom meeting={meeting} />
                    ))}
                </Grid>
            </Container>
        </>
    );
};

export default ServiceList;
