import { useEffect, useState } from "react";

// TODO: centralize this type in the api client where the fetch functions will live
interface EnergyPoint {
  instante: string;
  geracao: number;
}

export function useEnergyData(region = "SIN") {
  const [hydroData, setHydroData] = useState<EnergyPoint[]>([]);
  const [nuclearData, setNuclearData] = useState<EnergyPoint[]>([]);
  const [solarData, setSolarData] = useState<EnergyPoint[]>([]);
  const [thermalData, setThermalData] = useState<EnergyPoint[]>([]);
  const [windData, setWindData] = useState<EnergyPoint[]>([]);

  function removeSpaces(str: string) {
    return str.split(" ").join("");
  }

  async function fetchHydro() {
    const response = await fetch(
      `http://localhost:3000/energy/${removeSpaces(region)}/hydro`
    );
    const data = await response.json();
    setHydroData(data);
  }

  async function fetchNuclear() {
    const response = await fetch(
      `http://localhost:3000/energy/${removeSpaces(region)}/nuclear`
    );
    const data = await response.json();
    setNuclearData(data);
  }

  async function fetchSolar() {
    const response = await fetch(
      `http://localhost:3000/energy/${removeSpaces(region)}/solar`
    );
    const data = await response.json();
    setSolarData(data);
  }

  async function fetchThermal() {
    const response = await fetch(
      `http://localhost:3000/energy/${removeSpaces(region)}/thermal`
    );
    const data = await response.json();
    setThermalData(data);
  }

  async function fetchWind() {
    const response = await fetch(
      `http://localhost:3000/energy/${removeSpaces(region)}/wind`
    );
    const data = await response.json();
    setWindData(data);
  }

  useEffect(() => {
    fetchHydro();
    fetchNuclear();
    fetchSolar();
    fetchThermal();
    fetchWind();
  }, [region]);

  return {
    hydroData,
    nuclearData,
    solarData,
    thermalData,
    windData,
  };
}
