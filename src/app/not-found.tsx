import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      {/* Ambient glow orbs — consistent with hero */}
      <div
        className="pointer-events-none absolute -top-40 left-1/4 h-[400px] w-[400px] rounded-full blur-[120px]"
        style={{
          background: `linear-gradient(135deg, var(--accent-blue), #5E5CE6)`,
          opacity: "var(--orb-opacity)",
        }}
      />
      <div
        className="pointer-events-none absolute -bottom-40 right-1/4 h-[300px] w-[300px] rounded-full blur-[120px]"
        style={{
          background: `linear-gradient(135deg, var(--accent-purple), #FF6482)`,
          opacity: "var(--orb-opacity)",
        }}
      />

      <div className="relative z-10">
        <h1 className="text-9xl font-extrabold tracking-tighter text-apple-gradient mb-4">
          404
        </h1>
        <p className="text-xl mb-2 font-medium color-primary">
          Strona nie została znaleziona
        </p>
        <p className="text-base mb-10 max-w-md mx-auto color-secondary">
          Wygląda na to, że ta strona nie istnieje lub została przeniesiona.
        </p>
        <Link
          href="/"
          className="glass-button glass-button-primary h-12 px-8 font-medium"
        >
          <span className="transition-transform group-hover:-translate-x-0.5">←</span>
          Wróć na stronę główną
        </Link>
      </div>
    </main>
  );
}
