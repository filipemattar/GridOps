import RegionCard from "./RegionCard";
import NuclearIcon from "@/assets/energy-icons/radiation.png";
import HydroIcon from "@/assets/energy-icons/hydro-power.png";
import SolarIcon from "@/assets/energy-icons/solar-panel.png";
import ThermalIcon from "@/assets/energy-icons/energy-source.png";
import WindIcon from "@/assets/energy-icons/wind-turbine.png";
import { useEnergyData } from "@/hooks/useEnergyData";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";

interface GenerationByRegionProps {
  region: string;
}

function GenerationByRegion({ region }: GenerationByRegionProps) {
  const { hydroData, nuclearData, solarData, thermalData, windData } =
    useEnergyData(region);

  const hydroNow = hydroData[hydroData.length - 1]?.geracao || 0;
  const nuclearNow = nuclearData[nuclearData.length - 1]?.geracao || 0;
  const solarNow = solarData[solarData.length - 1]?.geracao || 0;
  const thermalNow = thermalData[thermalData.length - 1]?.geracao || 0;
  const windNow = windData[windData.length - 1]?.geracao || 0;
  console.log(solarNow);
  const total = hydroNow + nuclearNow + solarNow + thermalNow + windNow;

  return (
    <Card className="w-full max-w-5xl space-x-1">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          {region}
        </CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-3 gap-4">
        <RegionCard
          bgColor="bg-blue-400"
          title="Hydro"
          icon={HydroIcon}
          value={hydroNow}
          percentage={(hydroNow / total) * 100}
        />
        <RegionCard
          bgColor="bg-green-400"
          title="Nuclear"
          icon={NuclearIcon}
          value={nuclearNow}
          percentage={(nuclearNow / total) * 100}
        />
        <RegionCard
          bgColor="bg-amber-300"
          title="Solar"
          icon={SolarIcon}
          value={solarNow}
          percentage={(solarNow / total) * 100}
        />
        <RegionCard
          bgColor="bg-gray-400"
          title="Thermal"
          icon={ThermalIcon}
          value={thermalNow}
          percentage={(thermalNow / total) * 100}
        />
        <RegionCard
          bgColor="bg-blue-300"
          title="Wind"
          icon={WindIcon}
          value={windNow}
          percentage={(windNow / total) * 100}
        />
      </CardContent>
    </Card>
  );
}

export default GenerationByRegion;
