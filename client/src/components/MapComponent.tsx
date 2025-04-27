import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import brazilRegions from "@/assets/brazil_regions_merged.json";

export default function MapChart({
  onRegionClick,
}: {
  onRegionClick: (regionName: string) => void;
}) {
  return (
    <ComposableMap
      projection="geoMercator"
      width={800}
      height={600}
      projectionConfig={{
        scale: 800,
        center: [-45, -15],
      }}
    >
      <Geographies geography={brazilRegions}>
        {({ geographies }) =>
          geographies.map((geo) => {
            const regionName = geo.properties?.region;
            return (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                onClick={() => onRegionClick(regionName)}
                stroke="#FFF"
                strokeWidth={0.5}
                style={{
                  default: { fill: "#D6D6DA", outline: "none" },
                  hover: {
                    fill: "#4a8500",
                    outline: "none",
                  },
                  pressed: { fill: "#4a8500", outline: "none" },
                }}
              />
            );
          })
        }
      </Geographies>
    </ComposableMap>
  );
}
