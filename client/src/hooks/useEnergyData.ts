import { useCallback, useEffect, useState } from "react";

// TODO: centralize this type in the api client where the fetch functions will live
interface EnergyPoint {
  instante: string;
  source: string;
  geracao: number;
}
function removeSpaces(str: string) {
  return str.split(" ").join("");
}

export function useEnergyData(region = "sin") {
  const [hydroData, setHydroData] = useState<EnergyPoint[]>([]);
  const [nuclearData, setNuclearData] = useState<EnergyPoint[]>([]);
  const [solarData, setSolarData] = useState<EnergyPoint[]>([]);
  const [thermalData, setThermalData] = useState<EnergyPoint[]>([]);
  const [windData, setWindData] = useState<EnergyPoint[]>([]);

  const fetchHydro = useCallback(
    async (source: string) => {
      const response = await fetch(
        `http://localhost:3000/energy/${removeSpaces(region)}/${source}`
      );
      const data = await response.json();
      setHydroData(data);
    },
    [region]
  );

  const fetchNuclear = useCallback(
    async (source: string) => {
      const response = await fetch(
        `http://localhost:3000/energy/${removeSpaces(region)}/${source}`
      );
      const data = await response.json();

      setNuclearData(data === null ? [] : data);
    },
    [region]
  );

  const fetchSolar = useCallback(
    async (source: string) => {
      const response = await fetch(
        `http://localhost:3000/energy/${removeSpaces(region)}/${source}`
      );
      const data = await response.json();

      setSolarData(data);
    },
    [region]
  );

  const fetchThermal = useCallback(
    async (source: string) => {
      const response = await fetch(
        `http://localhost:3000/energy/${removeSpaces(region)}/${source}`
      );
      const data = await response.json();
      setThermalData(data);
    },
    [region]
  );

  const fetchWind = useCallback(
    async (source: string) => {
      const response = await fetch(
        `http://localhost:3000/energy/${removeSpaces(region)}/${source}`
      );
      const data = await response.json();
      setWindData(data);
    },
    [region]
  );

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
    }, 320000);

    return () => clearInterval(interval);
  }, [fetchHydro, fetchNuclear, fetchSolar, fetchThermal, fetchWind]);

  return {
    hydroData,
    nuclearData,
    solarData,
    thermalData,
    windData,
  };
}
