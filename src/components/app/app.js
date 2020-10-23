import React from 'react';
import "./app.css";
import Header from "../header";
import RandomPlanet from "../random-planet/random-planet";
import StarshipDetails from "../starship-details";
import PersonDetails from "../person-details";
import PlanetDetails from "../planet-details";

const App = () => {
  return (
    <div className="app">
        <Header />
        <RandomPlanet />
        <PersonDetails />
        <StarshipDetails />
        <PlanetDetails />
    </div>
  );
};

export default App;

