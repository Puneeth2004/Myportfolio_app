export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-muted py-8">
      <div className="container mx-auto flex flex-col items-center justify-center gap-4 px-4 md:px-6">
        <p className="text-sm text-muted-foreground">
          &copy; {year} Puneeth. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
