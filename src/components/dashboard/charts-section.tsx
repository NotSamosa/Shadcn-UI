import React from "react"
import { OverviewChart } from "./overview-chart"
import { SalesCategoryChart } from "./sales-category-chart"
import { ActivityLineChart } from "./activity-line-chart"

export function ChartsSection() {
  return (
    <div className="space-y-6">
      {/* 2-Column Responsive Layout: Overview Bar Chart + Donut Category Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <OverviewChart />
        <SalesCategoryChart />
      </div>

      {/* Full-width Activity & Conversion Velocity Trend */}
      <div className="grid grid-cols-1 gap-6">
        <ActivityLineChart />
      </div>
    </div>
  )
}
