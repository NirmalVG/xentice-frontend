import React from "react";
import {Grid} from "@mui/material";
import SectorImages from "./SectorImages";

const SectorList = () => {
    return (
            <Grid container fluid spacing={2} columns={22}>
                <Grid item xs={2}>
                    <SectorImages icon="builders" name="Builders" />
                </Grid>
                <Grid item xs={2}>
                    <SectorImages icon="architect" name="Architects" />
                </Grid>
                <Grid item xs={2}>
                    <SectorImages icon="banking" name="Banking" />
                </Grid>
                <Grid item xs={2}>
                    <SectorImages icon="it-support" name="IT Support" />
                </Grid>
                <Grid item xs={2}>
                    <SectorImages icon="labourers" name="Labourers" />
                </Grid>
                <Grid item xs={2}>
                    <SectorImages icon="mentors" name="Mentors" />
                </Grid>
                <Grid item xs={2}>
                    <SectorImages icon="advocates" name="Advocates" />
                </Grid>
                <Grid item xs={2}>
                    <SectorImages icon="insurance" name="Insurance" />
                </Grid>
                <Grid item xs={2}>
                    <SectorImages icon="lifestyle" name="Lifestyle" />
                </Grid>
                <Grid item xs={2}>
                    <SectorImages icon="xentice-mart" name="Xentice Mart" />
                </Grid>
                <Grid item xs={2}>
                    <SectorImages icon="eco" name="Eco Living" />
                </Grid>
            </Grid>
    )
};

export default SectorList;
