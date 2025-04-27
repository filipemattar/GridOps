import {
  Card,
  CardFooter,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface RegionEnergyCardProps extends React.ComponentProps<"div"> {
  value: number;
  metric?: string;
  percentage?: number;
  title: string;
  icon?: string;
  region: string;
}

export default function RegionCard(
  value,
  metric,
  percentage,
  title,
  icon,
  region,
  className
): RegionEnergyCardProps {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-center">{region}</CardTitle>
      </CardHeader>
      <CardContent className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
        <img src={icon} className="w-[50px] h-[50px] object-cover rounded-md" />
        {(value / 1000)?.toFixed(2)} {metric || "GW"}
      </CardContent>
      <CardContent className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
        {percentage?.toFixed(2)} %
      </CardContent>
      <CardFooter className="flex-col items-start gap-1 text-sm"></CardFooter>
    </Card>
  );
}
