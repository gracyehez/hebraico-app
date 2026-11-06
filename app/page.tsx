
import Link from "next/link";

const sections = [
  {
    number: "01",
    hebrew: "השפה",
    title: "A língua",
    description:
      "Do alfabeto às conversas. Explore a estrutura, os sons, as raízes e as transformações do hebraico.",
    href: "/aprender",
    color: "language",
  },
  {
    number: "02",
    hebrew: "המילים",
    title: "As palavras",
    description:
      "Descubra como as palavras se formam, viajam entre épocas e carregam diferentes significados.",
    href: "/vocabulario",
    color: "words",
  },
  {
    number: "03",
    hebrew: "התרבות",
    title: "As culturas",
    description:
      "Uma viagem por comunidades, lugares, música, literatura, celebrações e vida cotidiana.",
    href: "/cultura",
    color: "culture",
  },
];

export default function Home() {
  return (
    <main className="ivrit-site">
      <header className="ivrit-header">
        <Link href="/" className="brand" aria-label="IVRIT — página inicial">
          <span className="brand-name">IVRIT</span>
          <span className="brand-hebrew" dir="rtl">עברית</span>
        </Link>

        <nav className="main-nav" aria-label="Navegação principal">
          <Link href="/aprender">Aprender</Link>
          <Link href="/vocabulario">Vocabulário</Link>
          <Link href="/cultura">Cultura</Link>
          <Link href="/sobre">Sobre</Link>
        </nav>

        <div className="header-actions">
          <Link href="/entrar" className="login-link">Entrar</Link>
          <Link href="/cadastro" className="header-cta">Começar</Link>
        </div>
      </header>

      <section className="hero-editorial">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="eyebrow-line" />
            LÍNGUA, HISTÓRIA E CULTURA
          </div>

          <h1>
            Uma língua.
            <br />
            <span>Inúmeras</span>
            <br />
            histórias.
          </h1>

          <p className="hero-description">
            O hebraico é mais do que um idioma. É uma língua viva,
            atravessada por séculos de encontros, deslocamentos,
            criatividade e transformação.
          </p>

          <div className="hero-buttons">
            <Link href="/aprender" className="primary-button">
              Entre nesse universo <span>↗</span>
            </Link>
            <Link href="/cultura" className="text-button">
              Explore a cultura
            </Link>
          </div>

          <div className="hero-footnote">
            <span className="footnote-mark">א</span>
            <span>עברית — Ivrit — Hebraico</span>
          </div>
        </div>

        <div className="hero-art" aria-label="Composição gráfica inspirada na arquitetura e na escrita hebraica">
          <div className="art-topline">
            <span>מילים · אנשים · מקומות</span>
            <span>01 / 04</span>
          </div>

          <div className="art-sun" />
          <div className="art-arch art-arch-back" />
          <div className="art-arch art-arch-front" />

          <div className="art-city">
            <div className="city-building building-one" />
            <div className="city-building building-two" />
            <div className="city-building building-three" />
            <div className="city-building building-four" />
            <div className="city-dome">
              <span />
            </div>
            <div className="city-tower">
              <span />
            </div>
          </div>

          <div className="art-hebrew" dir="rtl">עברית</div>
          <div className="art-caption">
            <span>DESDE A ANTIGUIDADE</span>
            <span className="caption-divider" />
            <span>ATÉ O PRESENTE</span>
          </div>
          <div className="art-side-note">שפה חיה</div>
        </div>
      </section>

      <section className="blue-band">
        <div className="blue-band-inner">
          <span className="band-hebrew" dir="rtl">ללמוד · לגלות · להבין</span>
          <p>
            Aprender hebraico é também descobrir os mundos que se
            expressam por meio dele.
          </p>
          <span className="band-symbol">✳</span>
        </div>
      </section>

      <section className="explore-section">
        <div className="section-heading">
          <div>
            <p className="section-kicker">UM UNIVERSO EM MOVIMENTO</p>
            <h2>Comece por onde quiser.</h2>
          </div>
          <p className="section-intro">
            Língua e cultura não são compartimentos isolados.
            Aqui, elas se encontram.
          </p>
        </div>

        <div className="editorial-grid">
          {sections.map((section) => (
            <Link
              href={section.href}
              key={section.number}
              className={`editorial-card ${section.color}`}
            >
              <div className="card-top">
                <span>{section.number}</span>
                <span className="card-arrow">↗</span>
              </div>
              <div className="card-hebrew" dir="rtl">{section.hebrew}</div>
              <div className="card-bottom">
                <h3>{section.title}</h3>
                <p>{section.description}</p>
                <span className="card-link">Explorar <span>→</span></span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="culture-feature">
        <div className="culture-visual">
          <div className="culture-circle circle-one" />
          <div className="culture-circle circle-two" />
          <div className="culture-pattern" dir="rtl">חיים</div>
          <div className="culture-label">חיים · חיים משותפים</div>
          <div className="culture-number">02</div>
        </div>

        <div className="culture-copy">
          <p className="section-kicker">CULTURA NÃO É UMA LINHA RETA</p>
          <h2>
            Muitas origens.
            <br />
            Muitas expressões.
            <br />
            <span>Uma língua viva.</span>
          </h2>
          <p>
            Da literatura à música, das comunidades da diáspora à
            sociedade israelense contemporânea, o hebraico conecta
            experiências diferentes. Algumas antigas, outras recentes,
            muitas em constante transformação.
          </p>
          <Link href="/cultura" className="underlined-link">
            Conheça essas histórias <span>↗</span>
          </Link>
        </div>
      </section>

      <section className="closing-section">
        <div className="closing-hebrew" dir="rtl">בואו לגלות</div>
        <p className="section-kicker">O PRÓXIMO CAPÍTULO COMEÇA AQUI</p>
        <h2>Descubra o hebraico por inteiro.</h2>
        <Link href="/cadastro" className="closing-button">
          Começar a explorar <span>↗</span>
        </Link>
      </section>

      <footer className="ivrit-footer">
        <div className="footer-main">
          <Link href="/" className="footer-brand">
            <span>IVRIT</span>
            <span dir="rtl">עברית</span>
          </Link>
          <p>Língua, história e cultura em movimento.</p>
        </div>

        <nav className="footer-nav" aria-label="Links do rodapé">
          <Link href="/sobre">Sobre</Link>
          <Link href="/contato">Contato</Link>
          <Link href="/duvidas">Dúvidas</Link>
          <Link href="/planos">Planos</Link>
        </nav>

        <div className="footer-bottom">
          <span>IVRIT © 2026</span>
          <span>עברית היא שפה חיה</span>
        </div>
      </footer>
    </main>
  );
}
