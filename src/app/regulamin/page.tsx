import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Regulamin | damixb.pl",
  description:
    "Regulamin korzystania z serwisu damixb.pl — warunki, prawa autorskie i odpowiedzialność.",
};

export default function RegulaminPage() {
  return (
    <main
      className="min-h-screen"
      style={{ background: "var(--bg-primary)", color: "var(--text-primary)" }}
    >
      <article className="mx-auto max-w-4xl px-6 py-20 sm:py-28">
        {/* Back link */}
        <Link
          href="/"
          className="mb-12 inline-flex items-center gap-2 font-mono text-sm transition-opacity hover:opacity-80"
          style={{ color: "var(--neon-cyan)" }}
        >
          <span>←</span> Powrót do strony głównej
        </Link>

        {/* Title */}
        <h1
          className="mb-4 font-mono text-3xl font-bold sm:text-4xl md:text-5xl"
          style={{
            color: "var(--neon-cyan)",
            textShadow: "0 0 20px rgba(0,245,255,0.3)",
          }}
        >
          Regulamin
        </h1>
        <p
          className="mb-12 text-sm"
          style={{ color: "var(--text-muted)" }}
        >
          Ostatnia aktualizacja: 25 maja 2026 r.
        </p>

        <div
          className="space-y-10 text-base leading-relaxed"
          style={{ color: "var(--text-secondary)" }}
        >
          {/* §1 */}
          <section>
            <h2
              className="mb-4 font-mono text-xl font-semibold"
              style={{ color: "var(--neon-cyan)" }}
            >
              §1. Postanowienia ogólne
            </h2>
            <ol className="list-decimal space-y-2 pl-6">
              <li>
                Niniejszy Regulamin określa zasady korzystania z serwisu
                internetowego dostępnego pod adresem{" "}
                <strong style={{ color: "var(--text-primary)" }}>
                  damixb.pl
                </strong>{" "}
                (dalej: &bdquo;Serwis&rdquo;).
              </li>
              <li>
                Właścicielem i administratorem Serwisu jest Damian B., prowadzący
                działalność na terenie Rzeczypospolitej Polskiej.
              </li>
              <li>
                Korzystanie z Serwisu oznacza akceptację niniejszego Regulaminu
                w całości.
              </li>
              <li>
                Regulamin jest udostępniony nieodpłatnie za pośrednictwem Serwisu
                w formie umożliwiającej jego pobranie, utrwalenie i wydrukowanie.
              </li>
            </ol>
          </section>

          {/* §2 */}
          <section>
            <h2
              className="mb-4 font-mono text-xl font-semibold"
              style={{ color: "var(--neon-cyan)" }}
            >
              §2. Definicje
            </h2>
            <ol className="list-decimal space-y-2 pl-6">
              <li>
                <strong style={{ color: "var(--text-primary)" }}>Serwis</strong>{" "}
                — strona internetowa damixb.pl wraz ze wszystkimi podstronami.
              </li>
              <li>
                <strong style={{ color: "var(--text-primary)" }}>
                  Użytkownik
                </strong>{" "}
                — każda osoba fizyczna korzystająca z Serwisu.
              </li>
              <li>
                <strong style={{ color: "var(--text-primary)" }}>
                  Administrator
                </strong>{" "}
                — właściciel Serwisu odpowiedzialny za jego prowadzenie
                i zarządzanie.
              </li>
              <li>
                <strong style={{ color: "var(--text-primary)" }}>Treść</strong>{" "}
                — wszelkie materiały tekstowe, graficzne, multimedialne
                i programistyczne zamieszczone w Serwisie.
              </li>
            </ol>
          </section>

          {/* §3 */}
          <section>
            <h2
              className="mb-4 font-mono text-xl font-semibold"
              style={{ color: "var(--neon-cyan)" }}
            >
              §3. Warunki korzystania
            </h2>
            <ol className="list-decimal space-y-2 pl-6">
              <li>
                Korzystanie z Serwisu jest bezpłatne i nie wymaga rejestracji.
              </li>
              <li>
                Użytkownik zobowiązuje się do korzystania z Serwisu w sposób
                zgodny z obowiązującym prawem, dobrymi obyczajami oraz
                postanowieniami niniejszego Regulaminu.
              </li>
              <li>
                Zabrania się podejmowania działań mogących zakłócić prawidłowe
                funkcjonowanie Serwisu, w tym prób nieautoryzowanego dostępu do
                zasobów Serwisu.
              </li>
              <li>
                Administrator zastrzega sobie prawo do czasowego ograniczenia
                dostępu do Serwisu w związku z pracami konserwacyjnymi lub
                aktualizacjami.
              </li>
            </ol>
          </section>

          {/* §4 */}
          <section>
            <h2
              className="mb-4 font-mono text-xl font-semibold"
              style={{ color: "var(--neon-cyan)" }}
            >
              §4. Prawa autorskie
            </h2>
            <ol className="list-decimal space-y-2 pl-6">
              <li>
                Wszelkie Treści zamieszczone w Serwisie, w tym teksty, grafiki,
                zdjęcia, logotypy, ikony, kod źródłowy oraz układ strony,
                stanowią własność Administratora lub zostały wykorzystane za
                zgodą osób uprawnionych i podlegają ochronie prawnej.
              </li>
              <li>
                Kopiowanie, rozpowszechnianie, modyfikowanie lub wykorzystywanie
                Treści w celach komercyjnych bez pisemnej zgody Administratora
                jest zabronione.
              </li>
              <li>
                Dozwolone jest cytowanie fragmentów Treści wyłącznie w celach
                informacyjnych, z obowiązkowym podaniem źródła i autora.
              </li>
            </ol>
          </section>

          {/* §5 */}
          <section>
            <h2
              className="mb-4 font-mono text-xl font-semibold"
              style={{ color: "var(--neon-cyan)" }}
            >
              §5. Odpowiedzialność
            </h2>
            <ol className="list-decimal space-y-2 pl-6">
              <li>
                Administrator dokłada wszelkich starań, aby informacje
                zamieszczone w Serwisie były aktualne, rzetelne i kompletne,
                jednak nie ponosi odpowiedzialności za ich dokładność.
              </li>
              <li>
                Korzystanie z informacji zamieszczonych w Serwisie odbywa się na
                własne ryzyko Użytkownika.
              </li>
              <li>
                Administrator nie ponosi odpowiedzialności za szkody wynikające
                z przerw w dostępie do Serwisu, błędów technicznych lub działania
                siły wyższej.
              </li>
              <li>
                Serwis może zawierać odnośniki do stron zewnętrznych, za których
                treść Administrator nie odpowiada.
              </li>
            </ol>
          </section>

          {/* §6 */}
          <section>
            <h2
              className="mb-4 font-mono text-xl font-semibold"
              style={{ color: "var(--neon-cyan)" }}
            >
              §6. Ochrona danych osobowych
            </h2>
            <ol className="list-decimal space-y-2 pl-6">
              <li>
                Administratorem danych osobowych przekazywanych za pośrednictwem
                Serwisu (np. formularza kontaktowego) jest właściciel Serwisu.
              </li>
              <li>
                Dane osobowe przetwarzane są zgodnie z Rozporządzeniem Parlamentu
                Europejskiego i Rady (UE) 2016/679 (RODO) oraz ustawą o ochronie
                danych osobowych.
              </li>
              <li>
                Szczegółowe informacje o przetwarzaniu danych osobowych znajdują
                się w{" "}
                <Link
                  href="/polityka-prywatnosci"
                  className="underline underline-offset-2"
                  style={{ color: "var(--neon-cyan)" }}
                >
                  Polityce Prywatności
                </Link>
                .
              </li>
            </ol>
          </section>

          {/* §7 */}
          <section>
            <h2
              className="mb-4 font-mono text-xl font-semibold"
              style={{ color: "var(--neon-cyan)" }}
            >
              §7. Postanowienia końcowe
            </h2>
            <ol className="list-decimal space-y-2 pl-6">
              <li>
                Administrator zastrzega sobie prawo do zmiany niniejszego
                Regulaminu w dowolnym czasie. Zmiany wchodzą w życie z chwilą
                ich opublikowania w Serwisie.
              </li>
              <li>
                W sprawach nieuregulowanych niniejszym Regulaminem zastosowanie
                mają przepisy prawa polskiego.
              </li>
              <li>
                Wszelkie spory wynikające z korzystania z Serwisu będą
                rozstrzygane przez sąd właściwy dla siedziby Administratora.
              </li>
              <li>
                W razie pytań dotyczących Regulaminu prosimy o kontakt pod
                adresem:{" "}
                <a
                  href="mailto:kontakt@damixb.pl"
                  className="underline underline-offset-2"
                  style={{ color: "var(--neon-cyan)" }}
                >
                  kontakt@damixb.pl
                </a>
                .
              </li>
            </ol>
          </section>
        </div>

        {/* Bottom divider */}
        <div
          className="mt-16 h-px w-full"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(0,245,255,0.3), rgba(180,0,255,0.3), transparent)",
          }}
        />
        <p className="mt-4 text-center text-xs" style={{ color: "var(--text-muted)" }}>
          © {new Date().getFullYear()} damixb.pl — Wszelkie prawa zastrzeżone.
        </p>
      </article>
    </main>
  );
}
