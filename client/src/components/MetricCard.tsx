import { cn } from "@/lib/utils";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";

interface MetricCardProps extends React.ComponentProps<"div"> {
  value: number;
  metric?: string;
  percentage?: number;
  title: string;
  subtitle?: string;
  subvalue?: number;
  icon?: string;
}

export function MetricCard({
  value,
  metric,
  percentage,
  title,
  subtitle,
  subvalue,
  icon,
  className,
}: MetricCardProps) {
  return (
    <Card className={cn("@container/card", className)}>
      <CardHeader
        className={cn(
          "relative flex items-center space-x-4",
          icon ? "" : "justify-center"
        )}
      >
        {icon && (
          <img
            src={icon}
            className="w-[50px] h-[50px] object-cover rounded-md"
          />
        )}
        <span>{title}</span>
      </CardHeader>
      <CardContent className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
        {(value / 1000)?.toFixed(2)} {metric || "GW"}
      </CardContent>
      {percentage ? (
        <CardContent className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
          {percentage?.toFixed(2)} %
        </CardContent>
      ) : (
        ""
      )}
      {/* {subtitle ? (
        <CardContent className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
          <span>{subtitle}</span>
          {(subvalue / 1000)?.toFixed(2)} {metric || "GW"}
        </CardContent>
      ) : (
        ""
      )} */}
      <CardFooter className="flex-col items-start gap-1 text-sm"></CardFooter>
    </Card>
  );
}
