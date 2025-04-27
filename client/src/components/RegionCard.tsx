import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface RegionEnergyCardProps extends React.ComponentProps<"div"> {
  value: number;
  metric?: string;
  percentage?: number;
  title: string;
  icon?: string;
}

export default function RegionCard(
  value,
  metric,
  percentage,
  title,
  icon,
  className
): RegionEnergyCardProps {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-center">{region}</CardTitle>
      </CardHeader>
      <CardContent className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums"></CardContent>
    </Card>
  );
}
