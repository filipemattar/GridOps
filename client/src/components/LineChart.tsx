import { format, toZonedTime } from "date-fns-tz";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useEnergyData } from "@/hooks/useEnergyData";

interface GenerationByRegionProps {
  region: string;
}

interface EnergyPoint {
  instante: string;
  geracao?: number;
}

interface ChartDataPoint {
  instante: string;
  hydro?: number;
  nuclear?: number;
  solar?: number;
  thermal?: number;
  wind?: number;
}

const chartConfig = {
  Hydropower: {
    label: "Hydropower",
    color: "rgba(59, 130, 246, 1)",
  },
  NuclearPower: {
    label: "Nuclear Power",
    color: "rgba(34, 197, 94, 1)",
  },
  SolarPower: {
    label: "Solar Power",
    color: "rgba(251, 191, 36, 1)",
  },
  ThermalPower: {
    label: "Thermal Power",
    color: "rgba(156, 163, 175, 1)",
  },
  WindPower: {
    label: "Wind Power",
    color: "rgba(100, 149, 255, 1)",
  },
} satisfies ChartConfig;

export function LineChart({ region }: GenerationByRegionProps) {
  const { hydroData, nuclearData, solarData, thermalData, windData } =
    useEnergyData(region);

  function buildChartData() {
    const dataMap = new Map<string, ChartDataPoint>();

    function addData(
      sourceData: EnergyPoint[],
      sourceName: keyof ChartDataPoint
    ) {
      for (const item of sourceData) {
        if (!dataMap.has(item.instante)) {
          dataMap.set(item.instante, { instante: item.instante });
        }
        const dataPoint = dataMap.get(item.instante)!;
        (dataPoint[sourceName] as number) = item.geracao ?? 0;
      }
    }

    addData(hydroData, "hydro");
    addData(nuclearData, "nuclear");
    addData(solarData, "solar");
    addData(thermalData, "thermal");
    addData(windData, "wind");

    const chartData = Array.from(dataMap.values());

    return chartData;
  }

  function formatDateXaxis(instante: string): string {
    const date = toZonedTime(new Date(instante), "America/Sao_Paulo");

    return format(date, "HH:mm", { timeZone: "America/Sao_Paulo" });
  }

  function formatMonth(instante: string): string {
    const timeZone = "America/Sao_Paulo";
    const date = toZonedTime(new Date(instante), timeZone);

    const day = format(date, "d", { timeZone });
    const month = format(date, "MMMM", { timeZone });

    const getDaySuffix = (day: number) => {
      if (day >= 11 && day <= 13) return "th";
      switch (day % 10) {
        case 1:
          return "st";
        case 2:
          return "nd";
        case 3:
          return "rd";
        default:
          return "th";
      }
    };

    const dayNumber = parseInt(day, 10);
    const suffix = getDaySuffix(dayNumber);

    return `${month} ${day}${suffix}`;
  }

  const chartData = buildChartData();
  console.log(chartData.length / 10);

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Energy Output By Minute</CardTitle>
          <CardDescription>
            Energy generation from multiple sources.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig}>
            <AreaChart
              accessibilityLayer
              data={chartData}
              margin={{
                left: -20,
                right: 12,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="instante"
                tickLine={true}
                axisLine={true}
                tickMargin={8}
                tickFormatter={formatDateXaxis}
                interval={60}
              />
              <YAxis
                tickLine={true}
                axisLine={true}
                tickMargin={8}
                tickCount={5}
                tickFormatter={(value) => (value / 1000).toString()}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent />}
                labelFormatter={formatDateXaxis}
                // formatter={(value) => `${value / 1000} GW`}
              />
              <Area
                dataKey="hydro"
                type="natural"
                fill={chartConfig.Hydropower.color}
                fillOpacity={0.8}
                stroke="hsl(var(--chart-1))"
                stackId="a"
              />
              <Area
                dataKey="nuclear"
                type="natural"
                fill={chartConfig.NuclearPower.color}
                fillOpacity={0.8}
                stroke="hsl(var(--chart-2))"
                stackId="a"
              />
              <Area
                dataKey="solar"
                type="natural"
                fill={chartConfig.SolarPower.color}
                fillOpacity={0.9}
                stroke="hsl(var(--chart-3))"
                stackId="a"
              />
              <Area
                dataKey="thermal"
                type="natural"
                fill={chartConfig.ThermalPower.color}
                fillOpacity={0.9}
                stroke="hsl(var(--chart-4))"
                stackId="a"
              />
              <Area
                dataKey="wind"
                type="natural"
                fill={chartConfig.WindPower.color}
                fillOpacity={0.6}
                stroke="hsl(var(--chart-5))"
                stackId="a"
              />
            </AreaChart>
          </ChartContainer>
        </CardContent>
        <CardFooter>
          <div className="flex w-full items-start gap-2 text-sm">
            <div className="grid gap-2">
              <div className="flex items-center text-1xl gap-2 leading-none text-muted-foreground">
                {chartData[1]?.instante
                  ? formatMonth(chartData[1].instante)
                  : ""}
              </div>
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
