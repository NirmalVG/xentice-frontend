import React from "react";
import { Image } from "react-bootstrap";
import {
    Card,
    CardContent,
    Typography,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Button,
} from "@mui/material";

const Banner = () => {
    const [service, setService] = React.useState("");
    const [place, setPlace] = React.useState("");

    const handleServiceChange = (event) => {
        setService(event.target.value);
    };

    const handlePlaceChange = (event) => {
        setPlace(event.target.value);
    };
    return (
        <>
            <div className="ad-main">
                <Image
                    className="img-main"
                    src="images/banner-image.png"
                    fluid
                />
                <Card className="banner-card" sx={{ maxWidth: 345 }}>
                    <CardContent>
                        <Typography gutterBottom variant="h4" component="div">
                            Choose from 25,00+ Spaces for your Business
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Get inspired and find your perfect place
                        </Typography>
                        <div className="form-sec">
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">
                                    Looking For
                                </InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={service}
                                    label="Looking For"
                                    onChange={handleServiceChange}
                                >
                                    <MenuItem value={10}>
                                        Commercial Shop
                                    </MenuItem>
                                    <MenuItem value={20}>
                                        Commercial Office
                                    </MenuItem>
                                    <MenuItem value={30}>
                                        Commercial Land
                                    </MenuItem>
                                    <MenuItem value={40}>
                                        Commercial Building
                                    </MenuItem>
                                    <MenuItem value={50}>
                                        Industrial Building
                                    </MenuItem>
                                    <MenuItem value={60}>
                                        Industrial Land
                                    </MenuItem>
                                    <MenuItem value={70}>
                                        Co-working Space
                                    </MenuItem>
                                    <MenuItem value={80}>
                                        Private Office
                                    </MenuItem>
                                    <MenuItem value={90}>Meeting Room</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div className="form-sec">
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">
                                    Select City
                                </InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={place}
                                    label="Select City"
                                    onChange={handlePlaceChange}
                                >
                                    <MenuItem value={10}>Delhi</MenuItem>
                                    <MenuItem value={20}>Noida</MenuItem>
                                    <MenuItem value={30}>Hyderabad</MenuItem>
                                    <MenuItem value={40}>Mumbai</MenuItem>
                                    <MenuItem value={50}>Bangalore</MenuItem>
                                    <MenuItem value={60}>Cochin</MenuItem>
                                    <MenuItem value={70}>Chennai</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div>
                            <Button
                                variant="contained"
                                style={{ width: "100%" }}
                            >
                                Search
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </>
    );
};

export default Banner;
