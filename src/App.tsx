import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/theme-toggle"
import { CheckCircle2, Sparkles, Layers, ShieldCheck, ArrowRight } from "lucide-react"

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-6 md:p-12 transition-colors duration-200">
      <div className="w-full max-w-4xl space-y-8">
        {/* Top Header */}
        <header className="flex items-center justify-between border-b pb-6">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-bold shadow-inner">
              <Layers className="h-5 w-5" />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight">Shadcn UI Dashboard</h1>
              <p className="text-xs text-muted-foreground">Phase 1: Foundation & Design System Setup</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Badge variant="success" className="gap-1.5 py-1 px-3">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              Phase 1 Completed
            </Badge>
            <ThemeToggle />
          </div>
        </header>

        {/* Hero Card */}
        <Card className="border shadow-sm">
          <CardHeader>
            <div className="flex items-center gap-2 text-primary font-medium text-sm">
              <Sparkles className="h-4 w-4" />
              <span>Project Scaffolding Ready</span>
            </div>
            <CardTitle className="text-3xl font-bold">Design System & Theme Engine Initialized</CardTitle>
            <CardDescription className="text-base text-muted-foreground">
              Vite + React + TypeScript + Tailwind CSS configured with dynamic HSL theme variables,
              Radix-based primitives, and responsive dark mode support.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg border bg-muted/40 space-y-2">
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  Tailwind & Utilities
                </div>
                <p className="text-xs text-muted-foreground">
                  Custom HSL design tokens, <code>cn()</code> utility, and tailwind animations.
                </p>
              </div>

              <div className="p-4 rounded-lg border bg-muted/40 space-y-2">
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <ShieldCheck className="h-4 w-4 text-emerald-500" />
                  Shadcn Base Primitives
                </div>
                <p className="text-xs text-muted-foreground">
                  Buttons (all variants), Cards, Badges, and Lucide React icons.
                </p>
              </div>

              <div className="p-4 rounded-lg border bg-muted/40 space-y-2">
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  Dark & Light Themes
                </div>
                <p className="text-xs text-muted-foreground">
                  Persistent theme provider with system preference detection.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button className="gap-2">
                Ready for Phase 2: Shell Layout <ArrowRight className="h-4 w-4" />
              </Button>
              <Button variant="outline">Preview Components</Button>
              <Button variant="secondary">Docs & Variables</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
