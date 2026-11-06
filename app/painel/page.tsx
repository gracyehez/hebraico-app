
import Link from "next/link";

const areas = [
  {
    icon: "▶",
    title: "Aulas de hebraico",
    description: "Continue de onde parou e avance no curso.",
    link: "#aulas",
  },
  {
    icon: "✦",
    title: "Prática diária",
    description: "Exercite vocabulário, gramática e pronúncia.",
    link: "#pratica",
  },
  {
    icon: "א",
    title: "Meu vocabulário",
    description: "Revise as palavras que já aprendeu.",
    link: "#vocabulario",
  },
  {
    icon: "☀",
    title: "Dica do dia",
    description: "Aprenda uma expressão nova em poucos minutos.",
    link: "#dica",
  },
];

export default function Painel() {
  return (
    <main className="min-h-screen bg-[#f8f7f3] text-[#202b3c]">
      <header className="flex flex-wrap items-center justify-between gap-4 border-b border-[#e9e6df] bg-white px-6 py-5 md:px-12">
        <Link href="/" className="text-2xl font-extrabold">
          עברית<span className="text-[#d97745]">+</span>
        </Link>

        <nav className="flex flex-wrap gap-5 text-sm font-semibold text-[#687181]">
          <Link href="#aulas">Aulas</Link>
          <Link href="#pratica">Prática</Link>
          <Link href="#vocabulario">Vocabulário</Link>
          <Link href="#dica">Dicas</Link>
        </nav>

        <Link
          href="/entrar"
          className="rounded-lg border border-[#e9e6df] px-4 py-2 text-sm font-semibold"
        >
          Minha conta
        </Link>
      </header>

      <div className="mx-auto max-w-6xl px-6 py-10 md:px-10">
        <section className="mb-10">
          <p className="text-sm font-bold tracking-widest text-[#c66b3d]">
            ÁREA DO ALUNO
          </p>
          <h1 className="mt-3 text-3xl font-bold md:text-4xl">
            Seu hebraico começa aqui.
          </h1>
          <p className="mt-3 text-[#687181]">
            Um passo de cada vez. Continue aprendendo no seu ritmo.
          </p>
        </section>

        <section className="mb-10 grid gap-5 md:grid-cols-3">
          <div className="rounded-2xl bg-[#26364d] p-7 text-white md:col-span-2">
            <p className="text-sm font-semibold text-[#f2c9a9]">
              CONTINUE APRENDENDO
            </p>
            <h2 className="mt-4 text-2xl font-bold">
              Sua primeira aula de hebraico
            </h2>
            <p className="mt-3 max-w-lg text-sm leading-6 text-[#e0e5ec]">
              Comece pelo alfabeto, conheça os sons e aprenda suas primeiras
              palavras em hebraico.
            </p>
            <Link
              href="#aulas"
              className="mt-6 inline-block rounded-lg bg-[#d97745] px-5 py-3 text-sm font-bold text-white hover:bg-[#c66b3d]"
            >
              Explorar aulas
            </Link>
          </div>

          <div className="flex flex-col items-center justify-center rounded-2xl border border-[#ece9e3] bg-white p-7 text-center">
            <span className="text-5xl" dir="rtl">שלום</span>
            <p className="mt-4 text-lg font-bold">Shalom</p>
            <p className="mt-1 text-sm text-[#687181]">
              Olá, paz ou adeus.
            </p>
            <p className="mt-4 text-xs font-semibold tracking-wider text-[#c66b3d]">
              PALAVRA EM DESTAQUE
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-5 text-xl font-bold">
            Sua área de aprendizagem
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {areas.map((area) => (
              <Link
                key={area.title}
                href={area.link}
                className="rounded-xl border border-[#ece9e3] bg-white p-6 transition hover:-translate-y-1 hover:shadow-md"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#f8eee7] text-xl font-bold text-[#c66b3d]">
                  {area.icon}
                </span>
                <h3 className="mt-5 font-bold">{area.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#687181]">
                  {area.description}
                </p>
              </Link>
            ))}
          </div>
        </section>

        <section id="aulas" className="mb-8 rounded-2xl bg-white p-7">
          <h2 className="text-xl font-bold">Aulas do curso</h2>
          <p className="mt-2 text-sm text-[#687181]">
            Aqui ficarão organizadas as aulas e os módulos do curso.
          </p>
          <div className="mt-5 rounded-lg bg-[#f8f7f3] p-5">
            <span className="text-sm font-bold text-[#c66b3d]">MÓDULO 1</span>
            <h3 className="mt-2 font-bold">Primeiros passos no hebraico</h3>
            <p className="mt-1 text-sm text-[#687181]">
              Alfabeto, pronúncia e primeiras expressões.
            </p>
          </div>
        </section>

        <section id="pratica" className="mb-8 rounded-2xl bg-white p-7">
          <h2 className="text-xl font-bold">Prática diária</h2>
          <p className="mt-2 text-sm text-[#687181]">
            Exercícios de gramática, vocabulário, pronúncia e fluência.
          </p>
        </section>

        <section id="vocabulario" className="mb-8 rounded-2xl bg-white p-7">
          <h2 className="text-xl font-bold">Meu vocabulário</h2>
          <p className="mt-2 text-sm text-[#687181]">
            Suas palavras aprendidas serão reunidas nesta área.
          </p>
        </section>

        <section id="dica" className="rounded-2xl border border-[#f0dfd1] bg-[#fff8f1] p-7">
          <p className="text-xs font-bold tracking-widest text-[#c66b3d]">
            DICA DO DIA
          </p>
          <h2 className="mt-3 text-xl font-bold">בוקר טוב — Boker tov</h2>
          <p className="mt-2 text-sm text-[#687181]">
            Significa “bom dia” em hebraico.
          </p>
        </section>
      </div>

      <footer className="mt-12 border-t border-[#e9e6df] bg-white px-6 py-7 text-center text-sm text-[#687181]">
        עברית+ · Hebraico conectado à vida.
      </footer>
    </main>
  );
}
