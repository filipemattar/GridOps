import { useEffect, useState } from "react";
import "./App.css";
// import EnergyPieChart from "./components/EnergyGraph";
import GenerationByType from "./components/GenerationByType";
import { LineChart } from "./components/LineChart";
import BrazilMap from "./components/MapComponent";

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
    <div className="@container/main flex flex-col gap-10">
      <h1 className="flex p-10 text-5xl font-semibold tabular-nums">
        Brazil Energy Watch
      </h1>
      <BrazilMap />
      <GenerationByType
        hydroData={hydroData}
        nuclearData={nuclearData}
        solarData={solarData}
        thermalData={thermalData}
        windData={windData}
      />
      <LineChart
        hydroData={hydroData}
        nuclearData={nuclearData}
        solarData={solarData}
        thermalData={thermalData}
        windData={windData}
      />
    </div>
  );
}

export default App;
