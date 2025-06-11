import { MetricCard } from "./MetricCard";
import NuclearIcon from "@/assets/energy-icons/radiation.png";
import HydroIcon from "@/assets/energy-icons/hydro-power.png";
import SolarIcon from "@/assets/energy-icons/solar-panel.png";
import ThermalIcon from "@/assets/energy-icons/energy-source.png";
import WindIcon from "@/assets/energy-icons/wind-turbine.png";
import { useEnergyData } from "@/hooks/useEnergyData";
import { useMemo } from "react";

interface GenerationByRegionProps {
  region: string;
}

function GenerationByType({ region }: GenerationByRegionProps) {
  const { hydroData, nuclearData, solarData, thermalData, windData } =
    useEnergyData(region);

  const { hydroNow, nuclearNow, solarNow, thermalNow, windNow } =
    useMemo(() => {
      return {
        hydroNow: hydroData[0]?.geracao,
        nuclearNow: nuclearData[0]?.geracao,
        solarNow: solarData[0]?.geracao,
        thermalNow: thermalData[0]?.geracao,
        windNow: windData[0]?.geracao,
      };
    }, [hydroData, nuclearData, solarData, thermalData, windData]);

  const getTotalEnergyGeneration = useMemo(() => {
    const hydro = hydroData.reduce((total, point) => total + point.geracao, 0);

    const nuclear = nuclearData.reduce(
      (total, point) => total + point.geracao,
      0
    );
    const solar = solarData.reduce((total, point) => total + point.geracao, 0);
    const thermal = thermalData.reduce(
      (total, point) => total + point.geracao,
      0
    );
    const wind = windData.reduce((total, point) => total + point.geracao, 0);

    return hydro + nuclear + solar + thermal + wind;
  }, [hydroData, nuclearData, solarData, thermalData, windData]);

  const getTotalinThisMinute = useMemo(() => {
    const currentHydro = hydroNow || 0;
    const currentNuclear = nuclearNow || 0;
    const currentSolar = solarNow || 0;
    const currentThermal = thermalNow || 0;
    const currentWind = windNow || 0;
    return (
      currentHydro +
      currentNuclear +
      currentSolar +
      currentThermal +
      currentWind
    );
  }, [hydroNow, nuclearNow, solarNow, thermalNow, windNow]);

  return (
    <div className="w-full *:data-[slot=card]:shadow-xs @xl/main:grid-cols-2 @5xl/main:grid-cols-5 grid grid-cols-1 gap-1 px-4 data-[slot=card]:bg-gradient-to-t data-[slot=card]:from-primary/5 data-[slot=card]:to-card dark:data-[slot=card]:bg-card lg:px-6">
      <MetricCard
        className="col-span-5 text-center text-1xl"
        title="Current Total Generation"
        metric="GW"
        subtitle="Daily"
        subvalue={getTotalEnergyGeneration}
        value={getTotalinThisMinute}
      />
      <MetricCard
        className="bg-mongoblue transition-all duration-300 ease-in-out hover:scale-112"
        icon={HydroIcon}
        title="Hydropower"
        metric="GW"
        value={hydroNow}
        percentage={(hydroNow / getTotalinThisMinute) * 100}
      />
      <MetricCard
        className="bg-monogogreen transition-all duration-300 ease-in-out hover:scale-112"
        title="Nuclear Power"
        icon={NuclearIcon}
        metric="GW"
        value={nuclearNow}
        percentage={(nuclearNow / getTotalinThisMinute) * 100}
      />
      <MetricCard
        className="bg-mongoorange transition-all duration-300 ease-in-out hover:scale-112"
        title="Solar Power"
        icon={SolarIcon}
        metric="GW"
        value={solarNow}
        percentage={(solarNow / getTotalinThisMinute) * 100}
      />
      <MetricCard
        className="bg-stone-400 transition-all duration-300 ease-in-out hover:scale-112"
        title="Thermal Power"
        icon={ThermalIcon}
        metric="GW"
        value={thermalNow}
        percentage={(thermalNow / getTotalinThisMinute) * 100}
      />
      <MetricCard
        className="bg-teal-400 transition-all duration-300 ease-in-out hover:scale-112"
        title=" Wind Power"
        icon={WindIcon}
        metric="GW"
        value={windNow}
        percentage={(windNow / getTotalinThisMinute) * 100}
      />
    </div>
  );
}

export default GenerationByType;
