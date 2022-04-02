import React from "react";
import {
    Navbar,
    Container,
    Offcanvas,
    Image,
    ListGroup,
    Nav,
} from "react-bootstrap";
import OffcanvasList from "./OffcanvasList";
import CampaignIcon from "@mui/icons-material/Campaign";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";

const Header = () => {
    return (
        <header>
            <Navbar bg="light" expand={false}>
                <Container fluid>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Navbar.Brand href="#home" className="brand me-auto">
                        <Image
                            fluid
                            src="images/logo.png"
                            className="logo"
                        ></Image>
                    </Navbar.Brand>
                    <div className="nav-link">
                        <CampaignIcon />
                        <Nav.Link href="#post" style={{ float: "right" }}>
                            Post Ad
                        </Nav.Link>
                    </div>
                    <div className="nav-link">
                        <LocationOnOutlinedIcon />
                        <Nav.Link href="#near" style={{ float: "right" }}>
                            Near Me
                        </Nav.Link>
                    </div>
                    <div className="nav-link">
                        <LoginOutlinedIcon />
                        <Nav.Link href="#signin" style={{ float: "right" }}>
                            Login/Sign Up
                        </Nav.Link>
                    </div>
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="start"
                    >
                        <Offcanvas.Header>
                            <Image fluid src="images/logo.png"></Image>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <OffcanvasList title="Post Requirements" />
                            <OffcanvasList title="Post Ad" />
                            <OffcanvasList title="Post Services" />
                            <OffcanvasList title="Profile" />
                            <OffcanvasList title="Notification" />
                            <OffcanvasList title="Near Me" />
                            <OffcanvasList title="Pricing" />
                            <hr />
                            <OffcanvasList title="Login/Sign Up" />
                            <ListGroup.Item
                                className="top-portion section-width modal-list"
                                action
                                variant="light"
                            >
                                About Us
                            </ListGroup.Item>
                            <ListGroup.Item
                                className="section-width modal-list"
                                action
                                variant="light"
                            >
                                Contact Us
                            </ListGroup.Item>
                            <ListGroup.Item
                                className="section-width modal-list"
                                action
                                variant="light"
                            >
                                Privacy Policy
                            </ListGroup.Item>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
