import { MetricCard } from "./MetricCard";
import NuclearIcon from "@/assets/energy-icons/radiation.png";
import HydroIcon from "@/assets/energy-icons/hydro-power.png";
import SolarIcon from "@/assets/energy-icons/solar-panel.png";
import ThermalIcon from "@/assets/energy-icons/energy-source.png";
import WindIcon from "@/assets/energy-icons/wind-turbine.png";

interface EnergyPoint {
  instante: string;
  geracao: number;
}

interface EnergyCardProps {
  hydroData: EnergyPoint[];
  nuclearData: EnergyPoint[];
  solarData: EnergyPoint[];
  thermalData: EnergyPoint[];
  windData: EnergyPoint[];
}

function GenerationByType({
  hydroData,
  nuclearData,
  solarData,
  thermalData,
  windData,
}: EnergyCardProps) {
  const hydroNow = hydroData[hydroData.length - 1]?.geracao;
  const nuclearNow = nuclearData[nuclearData.length - 1]?.geracao;
  const solarNow = solarData[solarData.length - 1]?.geracao;
  const thermalNow = thermalData[thermalData.length - 1]?.geracao;
  const windNow = windData[windData.length - 1]?.geracao;

  function getTotalEnergyGeneration() {
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
  }

  function getTotalinThisMinute(): number {
    return hydroNow + nuclearNow + solarNow + thermalNow + windNow;
  }

  return (
    <div className="w-full *:data-[slot=card]:shadow-xs @xl/main:grid-cols-2 @5xl/main:grid-cols-5 grid grid-cols-1 gap-4 px-4 data-[slot=card]:bg-gradient-to-t data-[slot=card]:from-primary/5 data-[slot=card]:to-card dark:data-[slot=card]:bg-card lg:px-6">
      <MetricCard
        className="col-span-5 text-center"
        title="Daily Total Generation"
        metric="GW"
        subtitle="Daily"
        subvalue={getTotalEnergyGeneration()}
        value={getTotalinThisMinute()}
      />
      <MetricCard
        className="bg-blue-400"
        icon={HydroIcon}
        title="Hydropower"
        metric="GW"
        value={hydroNow}
        percentage={(hydroNow / getTotalinThisMinute()) * 100}
      />
      <MetricCard
        className="bg-green-400"
        title="Nuclear Power"
        icon={NuclearIcon}
        metric="GW"
        value={nuclearNow}
        percentage={(nuclearNow / getTotalinThisMinute()) * 100}
      />
      <MetricCard
        className="bg-amber-300"
        title="Solar Power"
        icon={SolarIcon}
        metric="GW"
        value={solarNow}
        percentage={(solarNow / getTotalinThisMinute()) * 100}
      />
      <MetricCard
        className="bg-gray-400"
        title="Thermal Power"
        icon={ThermalIcon}
        metric="GW"
        value={thermalNow}
        percentage={(thermalNow / getTotalinThisMinute()) * 100}
      />
      <MetricCard
        className="bg-blue-300"
        title=" Wind Power"
        icon={WindIcon}
        metric="GW"
        value={windNow}
        percentage={(windNow / getTotalinThisMinute()) * 100}
      />
    </div>
  );
}

export default GenerationByType;
