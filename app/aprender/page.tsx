
import Link from "next/link";

const etapas = [
  {
    numero: "01",
    titulo: "Alfabeto hebraico",
    descricao: "Conheça as 22 letras, seus nomes, sons e formas de escrita.",
    href: "/vocabulario",
  },
  {
    numero: "02",
    titulo: "Vogais e niqqud",
    descricao: "Aprenda os sinais vocálicos e como eles modificam a pronúncia.",
    href: "/vocabulario",
  },
  {
    numero: "03",
    titulo: "Leitura e pronúncia",
    descricao: "Comece a reconhecer palavras e ler expressões em hebraico.",
    href: "/vocabulario",
  },
  {
    numero: "04",
    titulo: "Escrita cursiva",
    descricao: "Aprenda a reconhecer e escrever as letras manuscritas.",
    href: "/vocabulario",
  },
];

export default function Aprender() {
  return (
    <main className="min-h-screen bg-[#fbfaf7] px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#c66b3d]">
          Sua jornada no hebraico
        </p>

        <h1 className="text-4xl font-bold text-[#26364d] mt-3">
          Aprenda hebraico passo a passo
        </h1>

        <p className="text-gray-600 mt-4 max-w-2xl leading-relaxed">
          Uma jornada estruturada desde o alfabeto até a leitura, escrita e
          compreensão da língua hebraica.
        </p>

        <div className="grid gap-5 sm:grid-cols-2 mt-12">
          {etapas.map((etapa) => (
            <Link
              key={etapa.numero}
              href={etapa.href}
              className="bg-white border border-gray-200 rounded-2xl p-7 hover:shadow-md transition"
            >
              <span className="text-sm font-bold text-[#c66b3d]">
                ETAPA {etapa.numero}
              </span>
              <h2 className="text-xl font-bold text-[#26364d] mt-3">
                {etapa.titulo}
              </h2>
              <p className="text-gray-600 mt-3 leading-relaxed">
                {etapa.descricao}
              </p>
              <span className="inline-block mt-5 text-sm font-semibold text-[#c66b3d]">
                Explorar →
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-12 bg-[#26364d] text-white rounded-2xl p-8">
          <p className="text-3xl text-center" dir="rtl">
            שלום
          </p>
          <p className="text-center mt-3 text-white/80">
            Shalom — paz, olá e até logo.
          </p>
        </div>
      </div>
    </main>
  );
}
