import Pie from "@visx/shape/lib/shapes/Pie";
import { Group } from "@visx/group";
// import { LinearGradient } from "@visx/gradient";
// import { animated, useTransition, interpolate } from "@react-spring/web";
// import Pie, { ProvidedProps, PieArcDatum } from "@visx/shape/lib/shapes/Pie";
// import { scaleOrdinal } from "@visx/scale";

interface EnergyPoint {
  instante: string;
  geracao: number;
}

interface EnergyChartProps {
  hydroData: EnergyPoint[];
  nuclearData: EnergyPoint[];
  solarData: EnergyPoint[];
  thermalData: EnergyPoint[];
  windData: EnergyPoint[];
  width: number;
  height: number;
}

function EnergyPieChart({
  hydroData,
  nuclearData,
  solarData,
  thermalData,
  windData,
  width,
  height,
}: EnergyChartProps) {
  const hydroNow = hydroData[hydroData.length - 1]?.geracao;
  const nuclearNow = nuclearData[nuclearData.length - 1]?.geracao;
  const solarNow = solarData[solarData.length - 1]?.geracao;
  const thermalNow = thermalData[thermalData.length - 1]?.geracao;
  const windNow = windData[windData.length - 1]?.geracao;

  //funcao para fazer o pie chart
  function getTotalinThisMinute(): number {
    return hydroNow + nuclearNow + solarNow + thermalNow + windNow;
  }

  const radius = Math.min(width, height) / 2;

  return (
    <svg width={width} height={height}>
      <Group top={height / 2} left={width / 2}>
        <Pie
          data={[
            { label: "Hydro", value: hydroNow },
            { label: "Nuclear", value: nuclearNow },
            { label: "Solar", value: solarNow },
            { label: "Thermo", value: thermalNow },
            { label: "Wind", value: windNow },
          ]}
          pieValue={(d) => d.value}
          outerRadius={radius}
          padAngle={0.01}
        >
          {(pie) =>
            pie.arcs.map((arc, i) => {
              const { label, value } = arc.data;
              const [centroidX, centroidY] = pie.path.centroid(arc);
              const arcPath = pie.path(arc);
              const color = [
                "#4f46e5",
                "#f59e0b",
                "#10b981",
                "#ef4444",
                "#06b6d4",
              ][i];

              return (
                <g key={`arc-${label}`}>
                  <path d={arcPath!} fill={color} />
                  <text
                    x={centroidX}
                    y={centroidY}
                    dy=".33em"
                    fill="white"
                    fontSize={10}
                    textAnchor="middle"
                  >
                    {`${label} (${Math.round(
                      (value / getTotalinThisMinute()) * 100
                    )}%)`}
                  </text>
                </g>
              );
            })
          }
        </Pie>
      </Group>
    </svg>
  );
}

export default EnergyPieChart;
