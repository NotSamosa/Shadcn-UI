import React from "react"
import {
  LayoutDashboard,
  BarChart3,
  Users,
  ShoppingBag,
  FileText,
  Settings,
  Bell,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  LogOut,
  HelpCircle,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export interface NavItem {
  id: string
  label: string
  icon: React.ElementType
  badge?: string
}

export const NAV_ITEMS: NavItem[] = [
  { id: "overview", label: "Overview", icon: LayoutDashboard },
  { id: "analytics", label: "Analytics", icon: BarChart3 },
  { id: "customers", label: "Customers", icon: Users },
  { id: "sales", label: "Orders & Sales", icon: ShoppingBag, badge: "New" },
  { id: "reports", label: "Reports", icon: FileText },
  { id: "notifications", label: "Notifications", icon: Bell, badge: "4" },
  { id: "settings", label: "Settings", icon: Settings },
]

interface SidebarProps {
  currentView: string
  onSelectView: (viewId: string) => void
  isCollapsed: boolean
  onToggleCollapse: () => void
  className?: string
}

export function Sidebar({
  currentView,
  onSelectView,
  isCollapsed,
  onToggleCollapse,
  className,
}: SidebarProps) {
  return (
    <aside
      className={cn(
        "relative flex flex-col border-r bg-card transition-all duration-300 ease-in-out select-none",
        isCollapsed ? "w-20" : "w-64",
        className
      )}
    >
      {/* Brand Header */}
      <div className="flex h-16 items-center justify-between px-4 border-b">
        <div className="flex items-center gap-3 overflow-hidden">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm shadow-primary/30">
            <Sparkles className="h-5 w-5" />
          </div>
          {!isCollapsed && (
            <div className="flex flex-col truncate">
              <span className="font-bold text-base tracking-tight truncate">
                Nexus<span className="text-primary">Ops</span>
              </span>
              <span className="text-[11px] text-muted-foreground font-medium">
                Enterprise Suite
              </span>
            </div>
          )}
        </div>

        {/* Desktop Collapse Toggle */}
        <Button
          variant="ghost"
          size="icon"
          onClick={onToggleCollapse}
          className={cn(
            "hidden lg:flex h-7 w-7 text-muted-foreground hover:text-foreground",
            isCollapsed && "mx-auto"
          )}
          title={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {isCollapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
        </Button>
      </div>

      {/* Navigation Links */}
      <div className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
        {!isCollapsed && (
          <p className="px-3 text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mb-2">
            Main Navigation
          </p>
        )}
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon
          const isActive = currentView === item.id

          return (
            <button
              key={item.id}
              onClick={() => onSelectView(item.id)}
              title={isCollapsed ? item.label : undefined}
              className={cn(
                "group relative flex w-full items-center rounded-lg px-3 py-2.5 text-sm font-medium transition-all",
                isActive
                  ? "bg-primary text-primary-foreground shadow-sm shadow-primary/20"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground",
                isCollapsed && "justify-center px-0"
              )}
            >
              <Icon
                className={cn(
                  "h-5 w-5 shrink-0 transition-transform group-hover:scale-110",
                  !isCollapsed && "mr-3",
                  isActive
                    ? "text-primary-foreground"
                    : "text-muted-foreground group-hover:text-foreground"
                )}
              />
              {!isCollapsed && (
                <span className="truncate flex-1 text-left">{item.label}</span>
              )}
              {!isCollapsed && item.badge && (
                <Badge
                  variant={isActive ? "secondary" : "default"}
                  className="ml-auto text-[10px] px-1.5 py-0 font-bold"
                >
                  {item.badge}
                </Badge>
              )}
              {isCollapsed && item.badge && (
                <span className="absolute top-1.5 right-2 h-2 w-2 rounded-full bg-primary" />
              )}
            </button>
          )
        })}
      </div>

      <Separator />

      {/* User Profile Card at Bottom */}
      <div className="p-3">
        <div
          className={cn(
            "flex items-center gap-3 rounded-lg border bg-muted/40 p-2.5 transition-all hover:bg-muted/80",
            isCollapsed && "justify-center p-2"
          )}
        >
          <div className="relative shrink-0">
            <Avatar className="h-9 w-9">
              <AvatarImage
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80"
                alt="Sarah Connor"
              />
              <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                SC
              </AvatarFallback>
            </Avatar>
            <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-emerald-500 ring-2 ring-background" />
          </div>

          {!isCollapsed && (
            <div className="flex flex-col truncate flex-1 min-w-0">
              <span className="text-xs font-semibold text-foreground truncate">
                Sarah Connor
              </span>
              <span className="text-[11px] text-muted-foreground truncate">
                sarah@nexusops.io
              </span>
            </div>
          )}
        </div>
      </div>
    </aside>
  )
}
