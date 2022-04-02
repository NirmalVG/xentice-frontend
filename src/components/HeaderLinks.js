import React from "react";
import ImageLink from "../components/ImageLink";
import { Grid } from "@mui/material";

const HeaderLinks = () => {
    return (
        <Grid container fluid spacing={2} columns={18}>
            <Grid item xs={2}>
                <ImageLink icon="commercial-shop" name="Commercial Shop" />
            </Grid>
            <Grid item xs={2}>
                <ImageLink icon="commercial-office" name="Commercial Office" />
            </Grid>
            <Grid item xs={2}>
                <ImageLink icon="commercial-land" name="Commercial Land" />
            </Grid>
            <Grid item xs={2}>
                <ImageLink
                    icon="commercial-building"
                    name="Commercial Building"
                />
            </Grid>
            <Grid item xs={2}>
                <ImageLink
                    icon="industrial-building"
                    name="Industrial Building"
                />
            </Grid>
            <Grid item xs={2}>
                <ImageLink icon="industrial-land" name="Industrial Land" />
            </Grid>
            <Grid item xs={2}>
                <ImageLink icon="co-working-space" name="Co-working Space" />
            </Grid>
            <Grid item xs={2}>
                <ImageLink icon="private-office" name="Private Office" />
            </Grid>
            <Grid item xs={2}>
                <ImageLink icon="meeting-room" name="Meeting Room" />
            </Grid>
        </Grid>
    );
};

export default HeaderLinks;
