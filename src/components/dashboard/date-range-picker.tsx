import React, { useState } from "react"
import { Calendar as CalendarIcon, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { toast } from "sonner"

const dateRanges = [
  { label: "Today", value: "Feb 20, 2026" },
  { label: "Last 7 Days", value: "Feb 13 – Feb 20, 2026" },
  { label: "Last 30 Days", value: "Jan 21 – Feb 20, 2026" },
  { label: "This Month (Feb)", value: "Feb 01 – Feb 20, 2026" },
  { label: "Last Quarter (Q4)", value: "Oct 01 – Dec 31, 2025" },
  { label: "Year to Date", value: "Jan 01 – Feb 20, 2026" },
]

export function DateRangePicker() {
  const [selectedRange, setSelectedRange] = useState(dateRanges[1])

  const handleSelect = (range: typeof dateRanges[0]) => {
    setSelectedRange(range)
    toast.success(`Date range updated: ${range.label}`, {
      description: `Showing metrics for ${range.value}`,
    })
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="h-9 gap-2 text-xs font-medium border-border/80 hover:bg-accent"
        >
          <CalendarIcon className="h-3.5 w-3.5 text-muted-foreground" />
          <span>{selectedRange.value}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56 p-1">
        <DropdownMenuLabel className="text-xs text-muted-foreground font-semibold px-2 py-1.5">
          Select Period
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {dateRanges.map((range) => (
          <DropdownMenuItem
            key={range.label}
            onClick={() => handleSelect(range)}
            className="flex items-center justify-between text-xs cursor-pointer py-1.5 px-2"
          >
            <span>{range.label}</span>
            {selectedRange.label === range.label && (
              <Check className="h-3.5 w-3.5 text-primary" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
