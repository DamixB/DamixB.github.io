import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      {/* Ambient glow orbs — consistent with hero */}
      <div
        className="pointer-events-none absolute -top-40 left-1/4 h-[400px] w-[400px] rounded-full opacity-15 blur-[120px]"
        style={{ background: "var(--accent-neon)" }}
      />
      <div
        className="pointer-events-none absolute -bottom-40 right-1/4 h-[300px] w-[300px] rounded-full opacity-10 blur-[120px]"
        style={{ background: "var(--accent-purple)" }}
      />

      <div className="relative z-10">
        <h1 className="text-9xl font-extrabold tracking-tighter text-neon-gradient mb-4">
          404
        </h1>
        <p
          className="text-xl mb-2 font-medium"
          style={{ color: "var(--text-primary)" }}
        >
          Strona nie została znaleziona
        </p>
        <p
          className="text-base mb-10 max-w-md mx-auto"
          style={{ color: "var(--text-secondary)" }}
        >
          Wygląda na to, że ta strona nie istnieje lub została przeniesiona.
        </p>
        <Link
          href="/"
          className="group inline-flex h-12 items-center justify-center gap-2 rounded-full px-8 font-medium transition-all duration-300 hover:-translate-y-0.5"
          style={{
            background: "var(--accent-gradient)",
            color: "#0a0a0f",
            boxShadow: "var(--shadow-neon)",
          }}
        >
          <span className="transition-transform group-hover:-translate-x-0.5">←</span>
          Wróć na stronę główną
        </Link>
      </div>
    </main>
  );
}
