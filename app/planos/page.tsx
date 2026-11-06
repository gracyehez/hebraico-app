
import Link from "next/link";

const planos = [
  {
    nome: "Gratuito",
    preco: "R$ 0",
    descricao: "Para começar a aprender hebraico.",
    recursos: [
      "Introdução ao alfabeto",
      "Vocabulário básico",
      "Acesso a conteúdos culturais",
    ],
  },
  {
    nome: "Completo",
    preco: "A definir",
    descricao: "Para desenvolver leitura, escrita e compreensão.",
    recursos: [
      "Todas as letras e sinais de niqqud",
      "Hebraico de imprensa e cursivo",
      "Exercícios e atividades práticas",
      "Áudio e pronúncia",
      "Acompanhamento de progresso",
    ],
    destaque: true,
  },
  {
    nome: "Avançado",
    preco: "A definir",
    descricao: "Para aprofundar seus conhecimentos.",
    recursos: [
      "Conteúdo avançado de hebraico",
      "Hebraico bíblico e histórico",
      "Introdução ao paleo-hebraico",
      "Materiais culturais exclusivos",
    ],
  },
];

export default function Planos() {
  return (
    <main className="min-h-screen bg-[#fbfaf7] px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#c66b3d]">
            Aprenda no seu ritmo
          </p>

          <h1 className="text-4xl font-bold text-[#26364d] mt-3">
            Planos de aprendizagem
          </h1>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Conheça as possibilidades de acesso à plataforma. Os preços e
            condições comerciais ainda serão definidos.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 mt-12">
          {planos.map((plano) => (
            <article
              key={plano.nome}
              className={`rounded-2xl border p-7 ${
                plano.destaque
                  ? "bg-[#26364d] text-white border-[#26364d]"
                  : "bg-white text-[#26364d] border-gray-200"
              }`}
            >
              <h2 className="text-2xl font-bold">{plano.nome}</h2>

              <p className={`mt-3 text-sm ${
                plano.destaque ? "text-white/70" : "text-gray-500"
              }`}>
                {plano.descricao}
              </p>

              <p className="text-3xl font-bold mt-7">{plano.preco}</p>

              <ul className="mt-7 space-y-4">
                {plano.recursos.map((recurso) => (
                  <li key={recurso} className="flex gap-2 text-sm">
                    <span className="text-[#c66b3d]">✓</span>
                    {recurso}
                  </li>
                ))}
              </ul>

              <Link
                href="/cadastro"
                className={`block text-center rounded-lg py-3 px-4 mt-8 font-semibold transition ${
                  plano.destaque
                    ? "bg-white text-[#26364d] hover:bg-gray-100"
                    : "bg-[#26364d] text-white hover:bg-[#354a66]"
                }`}
              >
                Começar
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
