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

const MeetingRoom = ({ meeting }) => {
    return (
        <>
            <Grid item xs={12} md={2} sm={4}>
                <Card sx={{ maxWidth: 239 }} style={{ margin: "10px" }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={meeting.image}
                        alt={meeting.name}
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
                                {meeting.name}
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
                            <Typography>{meeting.place}</Typography>
                        </div>
                        <div>
                            <Typography
                                style={{ color: "red" }}
                            >{`Rs ${meeting.price}/Sqr.ft`}</Typography>
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

export default MeetingRoom;
