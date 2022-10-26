import React, { Component } from 'react';
import Header from './components/Header';
import MissionCard from './components/MissionCard';
import Missions from './components/Missions';
import PlanetCard from './components/PlanetCard';
import SolarSystem from './components/SolarSystem';
import Title from './components/Title';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <SolarSystem />
        <Missions />
        <Title />
        <PlanetCard />
        <MissionCard />
      </div>
    );
  }
}

export default App;
