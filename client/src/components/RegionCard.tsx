import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface RegionEnergyCardProps extends React.ComponentProps<"div"> {
  value: number;
  metric?: string;
  percentage?: number;
  title: string;
  icon?: string;
  region?: string;
  bgColor?: string;
}

export default function RegionCard({
  value,
  metric,
  percentage,
  title,
  icon,
  bgColor,
}: RegionEnergyCardProps) {
  return (
    <Card
      className={cn(
        bgColor,
        "w-[180px] h-[200px] duration-300 ease-in-out hover:scale-112"
      )}
    >
      <CardHeader className="relative flex items-center space-x-2">
        {icon && (
          <img
            src={icon}
            alt=""
            className="block w-[40px] h-[40px] object-cover rounded-md"
          />
        )}
        <span>{title}</span>
      </CardHeader>
      <CardContent className="card:text-2xl text-2xl font-semibold tabular-nums">
        {(value / 1000)?.toFixed(2)} {metric || "GW"}
      </CardContent>
      <CardContent className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
        {percentage?.toFixed(2)} %
      </CardContent>
    </Card>
  );
}
