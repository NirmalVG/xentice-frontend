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

const CommercialOffice = ({ office }) => {
    return (
        <>
            <Grid item xs={12} md={2} sm={4}>
                <Card sx={{ maxWidth: 239 }} style={{ margin: "10px" }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={office.image}
                        alt={office.name}
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
                                {office.name}
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
                            <Typography>{office.place}</Typography>
                        </div>
                        <div>
                            <Typography
                                style={{ color: "red" }}
                            >{`Rs ${office.price}/Sqr.ft`}</Typography>
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

export default CommercialOffice;
