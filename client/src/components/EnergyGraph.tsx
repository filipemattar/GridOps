import React, { useEffect, useState } from "react";
import { Group } from "@visx/group";
import { Bar } from "@visx/shape";
import { scaleBand, scaleLinear } from "@visx/scale";
import { AxisBottom, AxisLeft } from "@visx/axis";
import { format } from "date-fns";

interface EnergyPoint {
  instante: string;
  geracao: number;
}

interface EnergyChartProps {
  type: "hydro" | "nuclear" | "solar" | "thermal" | "wind";
  width: number;
  height: number;
}

function EnergyChart(props: EnergyChartProps) {
  const { type, width, height } = props;
  const [data, setData] = useState<EnergyPoint[]>([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`http://localhost:3000/energy/${type}`);
      const json = await res.json();
      setData(json.slice(0, 30));
    }

    fetchData();
  }, [type]);

  const xMax = width;
  const yMax = height - 40;

  const xScale = scaleBand<string>({
    domain: data.map((d) => format(new Date(d.instante), "HH:mm")),
    padding: 0.4,
    range: [0, xMax],
  });

  const yScale = scaleLinear<number>({
    domain: [0, Math.max(...data.map((d) => d.geracao))],
    nice: true,
    range: [yMax, 0],
  });

  return (
    <svg width={width} height={height}>
      <Group top={20} left={40}>
        {data.map((d, i) => {
          const x = xScale(format(new Date(d.instante), "HH:mm"));
          const y = yScale(d.geracao);
          const barHeight = yMax - (y ?? 0);

          return (
            <Bar
              key={i}
              x={x}
              y={y}
              width={xScale.bandwidth()}
              height={barHeight}
              fill="#4f46e5"
              rx={4}
            />
          );
        })}

        <AxisLeft scale={yScale} />
        <AxisBottom top={yMax} scale={xScale} />
      </Group>
    </svg>
  );
}
export default EnergyChart;
