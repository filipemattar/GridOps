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

  const [hydroNorthData, setNorthHydroData] = useState<EnergyPoint[]>([]);
  const [nuclearNorthData, setNorthNuclearData] = useState<EnergyPoint[]>([]);
  const [solarNorthData, setNorthSolarData] = useState<EnergyPoint[]>([]);
  const [thermalNorthData, setNorthThermalData] = useState<EnergyPoint[]>([]);
  const [windNorthData, setNorthWindData] = useState<EnergyPoint[]>([]);

  const [hydroSouthData, setSouthHydroData] = useState<EnergyPoint[]>([]);
  const [nuclearSouthData, setSouthNuclearData] = useState<EnergyPoint[]>([]);
  const [solarSouthData, setSouthSolarData] = useState<EnergyPoint[]>([]);
  const [thermalSouthData, setSouthThermalData] = useState<EnergyPoint[]>([]);
  const [windSouthData, setSouthWindData] = useState<EnergyPoint[]>([]);

  const [hydroNortheastData, setNortheastHydroData] = useState<EnergyPoint[]>(
    []
  );
  const [nuclearNortheastData, setNortheastNuclearData] = useState<
    EnergyPoint[]
  >([]);
  const [solarNortheastData, setNortheastSolarData] = useState<EnergyPoint[]>(
    []
  );
  const [thermalNortheastData, setNortheastThermalData] = useState<
    EnergyPoint[]
  >([]);
  const [windNortheastData, setNortheastWindData] = useState<EnergyPoint[]>([]);

  const [hydroCosuData, setCosuHydroData] = useState<EnergyPoint[]>([]);
  const [nuclearCosuData, setCosuNuclearData] = useState<EnergyPoint[]>([]);
  const [solarCosuData, setCosuSolarData] = useState<EnergyPoint[]>([]);
  const [thermalCosuData, setCosuThermalData] = useState<EnergyPoint[]>([]);
  const [windCosuData, setCosuWindData] = useState<EnergyPoint[]>([]);

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

  async function fetchNorthHydro() {
    const response = await fetch("http://localhost:3000/energy/north/hydro");
    const data = await response.json();
    setNorthHydroData(data);
  }

  async function fetchNorthNuclear() {
    const response = await fetch("http://localhost:3000/energy/north/nuclear");
    const data = await response.json();
    setNorthNuclearData(data);
  }

  async function fetchNorthSolar() {
    const response = await fetch("http://localhost:3000/energy/north/solar");
    const data = await response.json();
    setNorthSolarData(data);
  }

  async function fetchNorthThermal() {
    const response = await fetch("http://localhost:3000/energy/north/thermal");
    const data = await response.json();
    setNorthThermalData(data);
  }

  async function fetchNorthWind() {
    const response = await fetch("http://localhost:3000/energy/north/wind");
    const data = await response.json();
    setNorthWindData(data);
  }

  async function fetchSouthHydro() {
    const response = await fetch("http://localhost:3000/energy/south/hydro");
    const data = await response.json();
    setSouthHydroData(data);
  }

  async function fetchSouthNuclear() {
    const response = await fetch("http://localhost:3000/energy/south/nuclear");
    const data = await response.json();
    setSouthNuclearData(data);
  }

  async function fetchSouthSolar() {
    const response = await fetch("http://localhost:3000/energy/south/solar");
    const data = await response.json();
    setSouthSolarData(data);
  }

  async function fetchSouthThermal() {
    const response = await fetch("http://localhost:3000/energy/south/thermal");
    const data = await response.json();
    setSouthThermalData(data);
  }

  async function fetchSouthWind() {
    const response = await fetch("http://localhost:3000/energy/south/wind");
    const data = await response.json();
    setSouthWindData(data);
  }

  async function fetchNortheastHydro() {
    const response = await fetch(
      "http://localhost:3000/energy/northeast/hydro"
    );
    const data = await response.json();
    setNortheastHydroData(data);
  }

  async function fetchNortheastNuclear() {
    const response = await fetch(
      "http://localhost:3000/energy/northeast/nuclear"
    );
    const data = await response.json();
    setNortheastNuclearData(data);
  }

  async function fetchNortheastSolar() {
    const response = await fetch(
      "http://localhost:3000/energy/northeast/solar"
    );
    const data = await response.json();
    setNortheastSolarData(data);
  }

  async function fetchNortheastThermal() {
    const response = await fetch(
      "http://localhost:3000/energy/northeast/thermal"
    );
    const data = await response.json();
    setNortheastThermalData(data);
  }

  async function fetchNortheastWind() {
    const response = await fetch("http://localhost:3000/energy/northeast/wind");
    const data = await response.json();
    setNortheastWindData(data);
  }

  async function fetchCosuHydro() {
    const response = await fetch("http://localhost:3000/energy/cosu/hydro");
    const data = await response.json();
    setCosuHydroData(data);
  }

  async function fetchCosuNuclear() {
    const response = await fetch("http://localhost:3000/energy/cosu/nuclear");
    const data = await response.json();
    setCosuNuclearData(data);
  }

  async function fetchCosuSolar() {
    const response = await fetch("http://localhost:3000/energy/cosu/solar");
    const data = await response.json();
    setCosuSolarData(data);
  }

  async function fetchCosuThermal() {
    const response = await fetch("http://localhost:3000/energy/cosu/thermal");
    const data = await response.json();
    setCosuThermalData(data);
  }

  async function fetchCosuWind() {
    const response = await fetch("http://localhost:3000/energy/cosu/wind");
    const data = await response.json();
    setCosuWindData(data);
  }

  useEffect(() => {
    fetchHydro();
    fetchNuclear();
    fetchSolar();
    fetchThermal();
    fetchWind();
    fetchNorthHydro();
    fetchNorthNuclear();
    fetchNorthSolar();
    fetchNorthThermal();
    fetchNorthWind();
    fetchSouthHydro();
    fetchSouthNuclear();
    fetchSouthSolar();
    fetchSouthThermal();
    fetchSouthWind();
    fetchNortheastHydro();
    fetchNortheastNuclear();
    fetchNortheastSolar();
    fetchNortheastThermal();
    fetchNortheastWind();
    fetchCosuHydro();
    fetchCosuNuclear();
    fetchCosuSolar();
    fetchCosuThermal();
    fetchCosuWind();
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
