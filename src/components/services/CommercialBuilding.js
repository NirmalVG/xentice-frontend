import React from "react";
import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
    Grid
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const CommercialBuilding = ({ building }) => {
    return (
        <>
        <Grid item xs={12} md={2} sm={4}>
            <Card
                sx={{ maxWidth: 239 }}
                style={{
                    margin: "10px",
                }}
            >
                <CardMedia
                    component="img"
                    height="140"
                    image={building.image}
                    alt={building.name}
                />
                <CardContent>
                    <div
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            display: "flex",
                        }}
                    >
                        <Typography gutterBottom variant="h6" component="div">
                            {building.name}
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
                        <Typography>{building.place}</Typography>
                    </div>
                    <div>
                        <Typography
                            style={{ color: "red" }}
                        >{`Rs ${building.price}/Sqr.ft`}</Typography>
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

export default CommercialBuilding;
