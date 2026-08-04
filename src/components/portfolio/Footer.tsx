import { profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-border py-10 text-sm text-muted-foreground">
      <div className="grid gap-3 sm:flex sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        {/* <p className="font-mono text-xs">Built with React + TypeScript</p> */}
      </div>
    </footer>
  );
}