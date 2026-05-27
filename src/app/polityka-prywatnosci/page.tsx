import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Polityka Prywatności | damixb.github.io",
  description:
    "Polityka prywatności serwisu damixb.github.io — informacje o przetwarzaniu danych osobowych zgodnie z RODO.",
};

export default function PolitykaPrywatnosciPage() {
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
          style={{ color: "var(--accent-neon)" }}
        >
          <span>←</span> Powrót do strony głównej
        </Link>

        {/* Title */}
        <h1
          className="mb-4 font-mono text-3xl font-bold sm:text-4xl md:text-5xl"
          style={{
            color: "var(--accent-neon)",
            textShadow: "0 0 20px rgba(0,210,255,0.3)",
          }}
        >
          Polityka Prywatności
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
              style={{ color: "var(--accent-neon)" }}
            >
              1. Administrator danych
            </h2>
            <p>
              Administratorem Twoich danych osobowych jest{" "}
              <strong style={{ color: "var(--text-primary)" }}>
                Administrator
              </strong>
              , prowadzący serwis internetowy pod adresem{" "}
              <strong style={{ color: "var(--text-primary)" }}>
                damixb.github.io
              </strong>{" "}
              (dalej: &bdquo;Administrator&rdquo;).
            </p>
            <p className="mt-2">
              W sprawach dotyczących ochrony danych osobowych możesz skontaktować
              się z Administratorem pod adresem e-mail:{" "}
              <a
                href="mailto:damian.barszcz99@gmail.com"
                className="underline underline-offset-2"
                style={{ color: "var(--accent-neon)" }}
              >
                damian.barszcz99@gmail.com
              </a>
              .
            </p>
          </section>

          {/* §2 */}
          <section>
            <h2
              className="mb-4 font-mono text-xl font-semibold"
              style={{ color: "var(--accent-neon)" }}
            >
              2. Cel przetwarzania danych
            </h2>
            <p>Twoje dane osobowe mogą być przetwarzane w następujących celach:</p>
            <ol className="mt-3 list-decimal space-y-2 pl-6">
              <li>
                <strong style={{ color: "var(--text-primary)" }}>
                  Obsługa zapytań kontaktowych
                </strong>{" "}
                — dane podane w formularzu kontaktowym (imię, adres e-mail,
                treść wiadomości) przetwarzane są w celu udzielenia odpowiedzi
                na Twoje zapytanie.
              </li>
              <li>
                <strong style={{ color: "var(--text-primary)" }}>
                  Analityka i statystyki
                </strong>{" "}
                — anonimowe dane dotyczące korzystania z Serwisu mogą być
                zbierane w celu analizy ruchu i poprawy jakości usług.
              </li>
              <li>
                <strong style={{ color: "var(--text-primary)" }}>
                  Realizacja obowiązków prawnych
                </strong>{" "}
                — w przypadkach wymaganych przepisami prawa.
              </li>
            </ol>
          </section>

          {/* §3 */}
          <section>
            <h2
              className="mb-4 font-mono text-xl font-semibold"
              style={{ color: "var(--accent-neon)" }}
            >
              3. Podstawa prawna przetwarzania
            </h2>
            <p>Dane osobowe przetwarzane są na podstawie:</p>
            <ol className="mt-3 list-decimal space-y-2 pl-6">
              <li>
                <strong style={{ color: "var(--text-primary)" }}>
                  Art. 6 ust. 1 lit. a RODO
                </strong>{" "}
                — zgoda osoby, której dane dotyczą (np. wysłanie formularza
                kontaktowego).
              </li>
              <li>
                <strong style={{ color: "var(--text-primary)" }}>
                  Art. 6 ust. 1 lit. f RODO
                </strong>{" "}
                — prawnie uzasadniony interes Administratora (analityka,
                zapewnienie bezpieczeństwa Serwisu).
              </li>
              <li>
                <strong style={{ color: "var(--text-primary)" }}>
                  Art. 6 ust. 1 lit. c RODO
                </strong>{" "}
                — wypełnienie obowiązku prawnego ciążącego na Administratorze.
              </li>
            </ol>
          </section>

          {/* §4 */}
          <section>
            <h2
              className="mb-4 font-mono text-xl font-semibold"
              style={{ color: "var(--accent-neon)" }}
            >
              4. Okres przechowywania danych
            </h2>
            <ol className="list-decimal space-y-2 pl-6">
              <li>
                Dane z formularza kontaktowego przechowywane są przez okres
                niezbędny do obsługi zapytania, nie dłużej niż{" "}
                <strong style={{ color: "var(--text-primary)" }}>
                  12 miesięcy
                </strong>{" "}
                od daty ostatniego kontaktu.
              </li>
              <li>
                Dane analityczne (cookies, logi) przechowywane są przez okres
                nie dłuższy niż{" "}
                <strong style={{ color: "var(--text-primary)" }}>
                  26 miesięcy
                </strong>
                .
              </li>
              <li>
                Po upływie wskazanych okresów dane są trwale usuwane lub
                anonimizowane.
              </li>
            </ol>
          </section>

          {/* §5 */}
          <section>
            <h2
              className="mb-4 font-mono text-xl font-semibold"
              style={{ color: "var(--accent-neon)" }}
            >
              5. Prawa użytkownika (RODO)
            </h2>
            <p>
              Zgodnie z RODO przysługują Ci następujące prawa w odniesieniu do
              Twoich danych osobowych:
            </p>
            <ol className="mt-3 list-decimal space-y-2 pl-6">
              <li>
                <strong style={{ color: "var(--text-primary)" }}>
                  Prawo dostępu
                </strong>{" "}
                — masz prawo uzyskać informację, czy Twoje dane są przetwarzane,
                oraz otrzymać ich kopię.
              </li>
              <li>
                <strong style={{ color: "var(--text-primary)" }}>
                  Prawo do sprostowania
                </strong>{" "}
                — możesz żądać poprawienia nieprawidłowych lub uzupełnienia
                niekompletnych danych.
              </li>
              <li>
                <strong style={{ color: "var(--text-primary)" }}>
                  Prawo do usunięcia (&bdquo;prawo do bycia zapomnianym&rdquo;)
                </strong>{" "}
                — w określonych przypadkach możesz żądać usunięcia swoich danych.
              </li>
              <li>
                <strong style={{ color: "var(--text-primary)" }}>
                  Prawo do ograniczenia przetwarzania
                </strong>{" "}
                — możesz żądać ograniczenia przetwarzania danych w określonych
                sytuacjach.
              </li>
              <li>
                <strong style={{ color: "var(--text-primary)" }}>
                  Prawo do przenoszenia danych
                </strong>{" "}
                — masz prawo otrzymać swoje dane w ustrukturyzowanym formacie.
              </li>
              <li>
                <strong style={{ color: "var(--text-primary)" }}>
                  Prawo do sprzeciwu
                </strong>{" "}
                — możesz wnieść sprzeciw wobec przetwarzania danych opartego na
                prawnie uzasadnionym interesie Administratora.
              </li>
              <li>
                <strong style={{ color: "var(--text-primary)" }}>
                  Prawo do cofnięcia zgody
                </strong>{" "}
                — w każdej chwili możesz cofnąć udzieloną zgodę, co nie wpływa
                na zgodność z prawem przetwarzania dokonanego przed cofnięciem.
              </li>
              <li>
                <strong style={{ color: "var(--text-primary)" }}>
                  Prawo do złożenia skargi
                </strong>{" "}
                — masz prawo złożyć skargę do Prezesa Urzędu Ochrony Danych
                Osobowych (PUODO), jeśli uważasz, że przetwarzanie narusza
                przepisy RODO.
              </li>
            </ol>
            <p className="mt-3">
              W celu realizacji swoich praw, skontaktuj się z Administratorem
              pod adresem:{" "}
              <a
                href="mailto:damian.barszcz99@gmail.com"
                className="underline underline-offset-2"
                style={{ color: "var(--accent-neon)" }}
              >
                damian.barszcz99@gmail.com
              </a>
              .
            </p>
          </section>

          {/* §6 */}
          <section>
            <h2
              className="mb-4 font-mono text-xl font-semibold"
              style={{ color: "var(--accent-neon)" }}
            >
              6. Pliki cookies
            </h2>
            <ol className="list-decimal space-y-2 pl-6">
              <li>
                Serwis może wykorzystywać pliki cookies (ciasteczka) — małe pliki
                tekstowe zapisywane na urządzeniu Użytkownika.
              </li>
              <li>
                Cookies wykorzystywane są w celach statystycznych, analitycznych
                oraz do zapewnienia prawidłowego funkcjonowania Serwisu.
              </li>
              <li>
                Użytkownik może w dowolnym momencie zmienić ustawienia cookies
                w swojej przeglądarce internetowej, w tym zablokować ich
                zapisywanie. Może to jednak wpłynąć na funkcjonowanie Serwisu.
              </li>
              <li>
                Serwis może korzystać z narzędzi analitycznych podmiotów
                trzecich (np. Google Analytics), które stosują własne pliki
                cookies zgodnie ze swoimi politykami prywatności.
              </li>
            </ol>
          </section>

          {/* §7 */}
          <section>
            <h2
              className="mb-4 font-mono text-xl font-semibold"
              style={{ color: "var(--accent-neon)" }}
            >
              7. Zmiany w polityce prywatności
            </h2>
            <ol className="list-decimal space-y-2 pl-6">
              <li>
                Administrator zastrzega sobie prawo do wprowadzania zmian
                w niniejszej Polityce Prywatności.
              </li>
              <li>
                O wszelkich istotnych zmianach Użytkownicy zostaną
                poinformowani poprzez stosowny komunikat w Serwisie.
              </li>
              <li>
                Aktualna wersja Polityki Prywatności jest zawsze dostępna pod
                adresem{" "}
                <strong style={{ color: "var(--text-primary)" }}>
                  damixb.github.io/polityka-prywatnosci
                </strong>
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
              "linear-gradient(90deg, transparent, rgba(0,210,255,0.4), rgba(130,80,255,0.4), transparent)",
          }}
        />
        <p
          className="mt-4 text-center text-xs"
          style={{ color: "var(--text-muted)" }}
        >
          © {new Date().getFullYear()} damixb.github.io — Wszelkie prawa zastrzeżone.
        </p>
      </article>
    </main>
  );
}
