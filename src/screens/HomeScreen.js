import React from "react";
import HeaderLinks from "../components/HeaderLinks";
import SectorList from "../components/SectorList";
import AdsContainer from "../components/AdsContainer";
import Banner from "../components/Banner";
import ServiceList from "../components/ServiceList";

const HomeScreen = () => {
    return (
        <React.Fragment>
            <div className="img-section">
                <HeaderLinks />
            </div>
            <div>
                <Banner />
            </div>
            <SectorList />
            <AdsContainer />
            <ServiceList />
        </React.Fragment>
    );
};

export default HomeScreen;
