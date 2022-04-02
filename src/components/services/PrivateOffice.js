import React from "react";
import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
    Grid,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const PrivateOffice = ({ privateOffice }) => {
    return (
        <>
            <Grid item xs={12} md={2} sm={4}>
                <Card sx={{ maxWidth: 239 }} style={{ margin: "10px" }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={privateOffice.image}
                        alt={privateOffice.name}
                    />
                    <CardContent>
                        <div
                            style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                display: "flex",
                            }}
                        >
                            <Typography
                                gutterBottom
                                variant="h6"
                                component="div"
                            >
                                {privateOffice.name}
                            </Typography>
                            <FavoriteBorderIcon style={{ float: "right" }} />
                        </div>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                margin: "10px 0px 10px 0px",
                            }}
                        >
                            <LocationOnIcon />
                            <Typography>{privateOffice.place}</Typography>
                        </div>
                        <div>
                            <Typography
                                style={{ color: "red" }}
                            >{`Rs ${privateOffice.price}/Sqr.ft`}</Typography>
                        </div>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Explore Now</Button>
                    </CardActions>
                </Card>
            </Grid>
        </>
    );
};

export default PrivateOffice;
