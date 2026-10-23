import React from "react"
import { LucideIcon, TrendingUp, TrendingDown } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

export interface MetricCardProps {
  title: string
  value: string
  change: string
  isPositive?: boolean
  description: string
  icon: LucideIcon
  iconColor?: string
  iconBg?: string
  isLive?: boolean
  className?: string
}

export function MetricCard({
  title,
  value,
  change,
  isPositive = true,
  description,
  icon: Icon,
  iconColor = "text-primary",
  iconBg = "bg-primary/10",
  isLive = false,
  className,
}: MetricCardProps) {
  return (
    <Card
      className={cn(
        "relative overflow-hidden transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 border border-border/80 group",
        className
      )}
    >
      {/* Decorative top accent line on hover */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <div
          className={cn(
            "flex h-9 w-9 items-center justify-center rounded-lg transition-transform group-hover:scale-110",
            iconBg,
            iconColor
          )}
        >
          <Icon className="h-5 w-5" />
        </div>
      </CardHeader>

      <CardContent className="space-y-2">
        <div className="flex items-baseline justify-between">
          <div className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
            {value}
          </div>
          {isLive && (
            <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              Live
            </span>
          )}
        </div>

        <div className="flex items-center gap-2 text-xs">
          <span
            className={cn(
              "inline-flex items-center font-semibold rounded px-1.5 py-0.5 text-[11px]",
              isPositive
                ? "text-emerald-600 bg-emerald-500/10 dark:text-emerald-400"
                : "text-rose-600 bg-rose-500/10 dark:text-rose-400"
            )}
          >
            {isPositive ? (
              <TrendingUp className="mr-1 h-3 w-3" />
            ) : (
              <TrendingDown className="mr-1 h-3 w-3" />
            )}
            {change}
          </span>
          <span className="text-muted-foreground truncate">{description}</span>
        </div>
      </CardContent>
    </Card>
  )
}
