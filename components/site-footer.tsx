import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 md:grid-cols-3">
        <div className="space-y-2">
          <div className="text-sm font-semibold">SOFARAU S.R.L</div>
          <p className="text-sm text-muted-foreground">
            Atelier / fabricant industriel. Collaboration exclusivement B2B.
          </p>
          <p className="text-xs text-muted-foreground">
            Pas de pose chez le client final. Pas de prix affichés en ligne.
          </p>
        </div>

        <div className="space-y-2">
          <div className="text-sm font-semibold">Navigation</div>
          <ul className="space-y-1 text-sm text-muted-foreground">
            <li>
              <Link href="/solutions" className="hover:text-foreground">
                Solutions
              </Link>
            </li>
            <li>
              <Link href="/technique" className="hover:text-foreground">
                Technique
              </Link>
            </li>
            <li>
              <Link href="/atelier" className="hover:text-foreground">
                Atelier
              </Link>
            </li>
            <li>
              <Link href="/contact-pro" className="hover:text-foreground">
                Contact pro
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-2">
          <div className="text-sm font-semibold">Documents</div>
          <p className="text-sm text-muted-foreground">
            Fiches techniques (PDF) disponibles sur demande ou via la page
            Technique.
          </p>
        </div>
      </div>
      <div className="border-t py-4">
        <div className="mx-auto max-w-6xl px-4 text-xs text-muted-foreground">
          © {new Date().getFullYear()} SOFARAU S.R.L — B2B uniquement.
        </div>
      </div>
    </footer>
  );
}

