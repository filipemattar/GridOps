import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import brazilRegions from "@/assets/brazil_regions_merged.json";

// Cores para cada região
const regionColors: Record<string, string> = {
  Norte: "#4caf50",
  Nordeste: "#ff9800",
  "Centro-Oeste e Sudeste": "#2196f3",
  Sul: "#9c27b0",
};

export default function MapChart() {
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
            const fillColor = regionColors[regionName] || "#ccc";

            return (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill={fillColor}
                stroke="#FFF"
                strokeWidth={0.5}
                style={{
                  default: { outline: "none" },
                  hover: { fill: "#ff5722", outline: "none" },
                  pressed: { fill: "#e65100", outline: "none" },
                }}
              />
            );
          })
        }
      </Geographies>
    </ComposableMap>
  );
}
