import React, {Component} from "react";
import "./random-planet.css";
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";


export default class RandomPlanet extends Component {

    swapiService = new SwapiService();

    state = {
        planet: {},
        loading: true
    };

    constructor() {
        super();
        this.updatePlanet();
    }

    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loading: false
        });
    };

    updatePlanet() {
        const id = Math.floor(Math.random()*25) + 2;
        this.swapiService
            .getPlanet(id)
            .then(this.onPlanetLoaded);
    }

    render() {

        const { planet, loading } = this.state;

        const spinner = loading ? <Spinner /> : null;
        const content = !loading ? <PlanetView planet={planet} /> : null;

        return (
            <div className="random-planet jumbotron">
                {spinner}
                {content}
            </div>
        );
    };
};

const PlanetView = ({planet}) => {

    const {  id, name, population, rotationPeriod, diameter} = planet;

    return (
        <React.Fragment>
            <img className="" src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
            <div className="info">
                <h2>{name}</h2>
                <p>Population {population}</p>
                <p>Rotation Period {rotationPeriod}</p>
                <p>Diameter {diameter}</p>
            </div>
        </React.Fragment>
    );
};
