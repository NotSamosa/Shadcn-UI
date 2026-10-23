import React from "react"
import {
  Menu,
  Search,
  Bell,
  Check,
  User,
  Settings,
  HelpCircle,
  LogOut,
  Calendar,
  Sparkles,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { NAV_ITEMS, type NavItem } from "./sidebar"
import { cn } from "@/lib/utils"

interface NavbarProps {
  currentView: string
  onSelectView: (viewId: string) => void
  searchQuery: string
  onSearchChange: (query: string) => void
}

export function Navbar({
  currentView,
  onSelectView,
  searchQuery,
  onSearchChange,
}: NavbarProps) {
  const currentNav = NAV_ITEMS.find((item) => item.id === currentView)
  const [isMobileOpen, setIsMobileOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b bg-background/95 px-4 md:px-6 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Left Section: Mobile Menu + View Title */}
      <div className="flex items-center gap-3 md:gap-4">
        {/* Mobile Sheet Trigger */}
        <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="lg:hidden h-9 w-9 shrink-0"
              aria-label="Open Navigation"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-72 p-0 flex flex-col">
            <SheetHeader className="p-4 border-b text-left flex flex-row items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold shadow-sm">
                <Sparkles className="h-4 w-4" />
              </div>
              <div>
                <SheetTitle className="text-base font-bold">NexusOps</SheetTitle>
                <p className="text-xs text-muted-foreground">Mobile Navigation</p>
              </div>
            </SheetHeader>
            <div className="flex-1 overflow-y-auto p-4 space-y-1">
              {NAV_ITEMS.map((item) => {
                const Icon = item.icon
                const isActive = currentView === item.id
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      onSelectView(item.id)
                      setIsMobileOpen(false)
                    }}
                    className={cn(
                      "flex w-full items-center rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                      isActive
                        ? "bg-primary text-primary-foreground font-semibold"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    )}
                  >
                    <Icon className="mr-3 h-5 w-5" />
                    <span>{item.label}</span>
                    {item.badge && (
                      <Badge
                        variant={isActive ? "secondary" : "default"}
                        className="ml-auto text-xs"
                      >
                        {item.badge}
                      </Badge>
                    )}
                  </button>
                )
              })}
            </div>
          </SheetContent>
        </Sheet>

        {/* View Breadcrumb / Title */}
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <span>Dashboard</span>
            <span>/</span>
            <span className="font-semibold text-foreground capitalize">
              {currentNav?.label || "Overview"}
            </span>
          </div>
          <h2 className="text-lg font-bold tracking-tight text-foreground hidden sm:block">
            {currentNav?.label || "Overview"}
          </h2>
        </div>
      </div>

      {/* Middle & Right Section: Search & Quick Controls */}
      <div className="flex items-center gap-2 md:gap-3">
        {/* Search Input Bar */}
        <div className="relative w-40 sm:w-60 md:w-72">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search dashboard..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-9 pr-12 text-xs md:text-sm bg-muted/40 focus:bg-background h-9 rounded-lg"
          />
          <kbd className="pointer-events-none absolute right-2.5 top-2.5 hidden h-4 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground sm:flex">
            ⌘K
          </kbd>
        </div>

        {/* Notifications Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="relative h-9 w-9 rounded-lg border-muted-foreground/20 hover:bg-accent"
              aria-label="Notifications"
            >
              <Bell className="h-4 w-4" />
              <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
              </span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80 p-2">
            <div className="flex items-center justify-between pb-2 px-2 pt-1">
              <span className="font-semibold text-sm">Notifications</span>
              <Badge variant="outline" className="text-[10px]">4 Unread</Badge>
            </div>
            <DropdownMenuSeparator />
            <div className="space-y-1 py-1 text-xs">
              <div className="p-2 rounded-md hover:bg-muted cursor-pointer transition-colors">
                <p className="font-medium text-foreground">New enterprise lead signed up</p>
                <p className="text-muted-foreground text-[11px] mt-0.5">Acme Corp registered for Tier 3 • 5m ago</p>
              </div>
              <div className="p-2 rounded-md hover:bg-muted cursor-pointer transition-colors">
                <p className="font-medium text-foreground">Monthly revenue target met</p>
                <p className="text-muted-foreground text-[11px] mt-0.5">Surpassed $120k threshold • 1h ago</p>
              </div>
              <div className="p-2 rounded-md hover:bg-muted cursor-pointer transition-colors">
                <p className="font-medium text-foreground">Server CPU load normalized</p>
                <p className="text-muted-foreground text-[11px] mt-0.5">Cluster US-East-1 running smooth • 3h ago</p>
              </div>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Theme Toggle */}
        <ThemeToggle />

        {/* User Avatar & Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="relative h-9 w-9 rounded-full ring-2 ring-primary/20 hover:ring-primary/40 transition-all p-0"
            >
              <Avatar className="h-9 w-9">
                <AvatarImage
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80"
                  alt="Sarah Connor"
                />
                <AvatarFallback>SC</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56 p-1">
            <DropdownMenuLabel className="font-normal p-2">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-semibold leading-none">Sarah Connor</p>
                <p className="text-xs leading-none text-muted-foreground">
                  sarah@nexusops.io
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem className="cursor-pointer gap-2">
                <User className="h-4 w-4" />
                <span>My Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer gap-2">
                <Settings className="h-4 w-4" />
                <span>Account Settings</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer gap-2">
                <HelpCircle className="h-4 w-4" />
                <span>Documentation</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer gap-2 text-destructive focus:text-destructive">
              <LogOut className="h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
