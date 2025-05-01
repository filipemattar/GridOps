import { useEffect, useState } from "react";

// TODO: centralize this type in the api client where the fetch functions will live
interface EnergyPoint {
  instante: string;
  geracao: number;
}

export function useEnergyData(region = "sin") {
  const [hydroData, setHydroData] = useState<EnergyPoint[]>([]);
  const [nuclearData, setNuclearData] = useState<EnergyPoint[]>([]);
  const [solarData, setSolarData] = useState<EnergyPoint[]>([]);
  const [thermalData, setThermalData] = useState<EnergyPoint[]>([]);
  const [windData, setWindData] = useState<EnergyPoint[]>([]);

  function removeSpaces(str: string) {
    return str.split(" ").join("");
  }

  async function fetchHydro(source: string) {
    const response = await fetch(
      `http://localhost:3000/energy/${removeSpaces(region)}/${source}`
    );
    const data = await response.json();

    setHydroData(data.data);
  }

  async function fetchNuclear(source: string) {
    const response = await fetch(
      `http://localhost:3000/energy/${removeSpaces(region)}/${source}`
    );
    const data = await response.json();

    setNuclearData(data === null ? [] : data.data);
  }

  async function fetchSolar(source: string) {
    const response = await fetch(
      `http://localhost:3000/energy/${removeSpaces(region)}/${source}`
    );
    const data = await response.json();
    setSolarData(data.data);
  }

  async function fetchThermal(source: string) {
    const response = await fetch(
      `http://localhost:3000/energy/${removeSpaces(region)}/${source}`
    );
    const data = await response.json();
    setThermalData(data.data);
  }

  async function fetchWind(source: string) {
    const response = await fetch(
      `http://localhost:3000/energy/${removeSpaces(region)}/${source}`
    );
    const data = await response.json();
    setWindData(data.data);
  }

  useEffect(() => {
    fetchHydro("hidraulica");
    fetchNuclear("nuclear");
    fetchSolar("solar");
    fetchThermal("termica");
    fetchWind("eolica");

    const interval = setInterval(() => {
      fetchHydro("hidraulica");
      fetchNuclear("nuclear");
      fetchSolar("solar");
      fetchThermal("termica");
      fetchWind("eolica");
    }, 300100);

    return () => clearInterval(interval);
  }, [region]);

  return {
    hydroData,
    nuclearData,
    solarData,
    thermalData,
    windData,
  };
}
