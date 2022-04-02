import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import Footer from "./components/Footer";

const App = () => {
    return (
        <Router>
            <Header />
            <main>
                <Switch>
                    <Route exact path="/">
                        <HomeScreen />
                    </Route>
                </Switch>
            </main>
            <Footer />
        </Router>
    );
};

export default App;
