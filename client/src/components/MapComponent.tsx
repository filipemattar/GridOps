import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import brazilRegions from "@/assets/brazil_regions_merged.json";

export default function MapChart({
  selectedRegion,

  onRegionClick,
}: {
  selectedRegion?: string;
  onRegionClick: (regionName: string) => void;
}) {
  return (
    <ComposableMap
      projection="geoMercator"
      width={800}
      height={600}
      projectionConfig={{
        scale: 600,
        center: [-37, -22],
      }}
    >
      <Geographies geography={brazilRegions}>
        {({ geographies }) =>
          geographies.map((geo) => {
            const regionName = geo.properties?.region;
            const isSelected = regionName === selectedRegion;

            return (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                onClick={() => {
                  onRegionClick(regionName);
                }}
                stroke="#FFF"
                strokeWidth={0.5}
                style={{
                  default: {
                    fill: isSelected ? "#1DC75A" : "#A8A29E",
                    outline: "none",
                  },
                  hover: {
                    fill: "#1DC75A",
                    outline: "none",
                    cursor: "pointer",
                  },
                  pressed: { fill: "#1DC75A", outline: "none" },
                }}
              />
            );
          })
        }
      </Geographies>
    </ComposableMap>
  );
}
