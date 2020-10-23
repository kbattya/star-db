import React from 'react';
import "./app.css";
import Header from "../header";
import RandomPlanet from "../random-planet/random-planet";
import StarshipDetails from "../starship-details";
import PersonDetails from "../person-details";
import PlanetDetails from "../planet-details";
import ItemList from "../item-list";

const App = () => {
  return (
    <div className="app">
        <Header />
        <RandomPlanet />
        <div className="row mb2">
            <div className="col-md-6"><ItemList /></div>
            <div className="col-md-6"><PersonDetails /></div>
        </div>
        <StarshipDetails />
        <PlanetDetails />
    </div>
  );
};

export default App;

