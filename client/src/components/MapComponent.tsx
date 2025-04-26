import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import * as turf from "@turf/turf";
// import { useNavigate } from "react-router-dom"
const regions = {
  Norte: [
    "Acre",
    "Amapá",
    "Amazonas",
    "Pará",
    "Rondônia",
    "Roraima",
    "Tocantins",
  ],
  Nordeste: [
    "Alagoas",
    "Bahia",
    "Ceará",
    "Maranhão",
    "Paraíba",
    "Pernambuco",
    "Piauí",
    "Rio Grande do Norte",
    "Sergipe",
  ],
  "Centro-Oeste e Sudeste": [
    "Distrito Federal",
    "Goiás",
    "Mato Grosso",
    "Mato Grosso do Sul",
    "Espírito Santo",
    "Minas Gerais",
    "Rio de Janeiro",
    "São Paulo",
  ],
  Sul: ["Paraná", "Rio Grande do Sul", "Santa Catarina"],
};

const regionColors: Record<string, string> = {
  Norte: "#4caf50",
  Nordeste: "#ff9800",
  "Centro-Oeste e Sudeste": "#2196f3",
  Sul: "#9c27b0",
};

export default function BrazilMap() {
  //   const navigate = useNavigate();

  //   const handleClick = (geo: any) => {
  //     const region = geo.properties.name; // nome do estado
  //     console.log(region);
  //     navigate(`/region/${region}`); // leva para a página da região
  //   };

  return (
    <ComposableMap
      width={800}
      height={600}
      projection="geoMercator"
      projectionConfig={{
        scale: 800,
        center: [-45, -15],
      }}
    >
      <Geographies geography="/brazil.json">
        {({ geographies }) =>
          geographies.map((geo) => {
            return (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                onClick={() => handleClick(geo)}
                style={{
                  default: { fill: "#D6D6DA", outline: "none" },
                  hover: { fill: "#F53", outline: "none" },
                  pressed: { fill: "#E42", outline: "none" },
                }}
              />
            );
          })
        }
      </Geographies>
    </ComposableMap>
  );
}
