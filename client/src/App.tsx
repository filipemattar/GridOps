import { useEffect, useState } from "react";
import "./App.css";
import EnergyPieChart from "./components/EnergyGraph";
import GenerationByType from "./components/GenerationByType";

interface EnergyPoint {
  instante: string;
  geracao: number;
}

function App() {
  const [hydroData, setHydroData] = useState<EnergyPoint[]>([]);
  const [nuclearData, setNuclearData] = useState<EnergyPoint[]>([]);
  const [solarData, setSolarData] = useState<EnergyPoint[]>([]);
  const [thermalData, setThermalData] = useState<EnergyPoint[]>([]);
  const [windData, setWindData] = useState<EnergyPoint[]>([]);

  async function fetchHydro() {
    const response = await fetch("http://localhost:3000/energy/hydro");
    const data = await response.json();
    setHydroData(data);
  }

  async function fetchNuclear() {
    const response = await fetch("http://localhost:3000/energy/nuclear");
    const data = await response.json();
    setNuclearData(data);
  }

  async function fetchSolar() {
    const response = await fetch("http://localhost:3000/energy/solar");
    const data = await response.json();
    setSolarData(data);
  }

  async function fetchThermal() {
    const response = await fetch("http://localhost:3000/energy/thermal");
    const data = await response.json();
    setThermalData(data);
  }

  async function fetchWind() {
    const response = await fetch("http://localhost:3000/energy/wind");
    const data = await response.json();
    setWindData(data);
  }

  useEffect(() => {
    fetchHydro();
    fetchNuclear();
    fetchSolar();
    fetchThermal();
    fetchWind();
  }, []);

  return (
    <>
      <h1>Brazil Energy Watch</h1>
      <EnergyPieChart
        hydroData={hydroData}
        nuclearData={nuclearData}
        solarData={solarData}
        thermalData={thermalData}
        windData={windData}
        width={400}
        height={400}
      />
      <GenerationByType
        hydroData={hydroData}
        nuclearData={nuclearData}
        solarData={solarData}
        thermalData={thermalData}
        windData={windData}
      />
    </>
  );
}

export default App;
