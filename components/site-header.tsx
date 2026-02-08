import Link from "next/link";
import { Factory, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { MobileMenu } from "@/components/mobile-menu";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border bg-white soft-shadow">
            <Factory className="h-4 w-4" aria-hidden="true" />
          </span>
          <div className="leading-tight">
            <div className="text-sm font-semibold tracking-tight">
              SOFARAU S.R.L
            </div>
            <div className="text-xs text-muted-foreground">
              Atelier / fabricant B2B
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          <Button asChild variant="ghost" className="text-sm rounded-full">
            <Link href="/solutions">Solutions</Link>
          </Button>
          <Button asChild variant="ghost" className="text-sm rounded-full">
            <Link href="/technique">Technique</Link>
          </Button>
          <Button asChild variant="ghost" className="text-sm rounded-full">
            <Link href="/atelier">Atelier</Link>
          </Button>
          <Button asChild variant="ghost" className="text-sm rounded-full">
            <Link href="/vision">Vision</Link>
          </Button>
          <Separator orientation="vertical" className="mx-1 h-6" />
          <Button asChild variant="outline" className="gap-2 rounded-full bg-white/70">
            <Link href="/contact-pro">
              <Mail className="h-4 w-4" aria-hidden="true" />
              Contact pro
            </Link>
          </Button>
        </nav>

        <div className="flex items-center md:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}

