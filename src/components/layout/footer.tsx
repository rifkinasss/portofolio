export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex min-h-16 w-full max-w-6xl flex-col justify-center gap-2 px-5 py-4 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>&copy; {new Date().getFullYear()} Nas Labs. Built by Rifki Anashirul.</p>
        <p>Technology portfolio with Next.js</p>
      </div>
    </footer>
  );
}
