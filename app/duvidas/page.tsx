
import Link from "next/link";

const perguntas = [
  {
    pergunta: "Não conheço nenhuma letra hebraica. Por onde começo?",
    resposta:
      "Comece pela seção Aprender. O percurso começa com as 22 letras do alfabeto e avança gradualmente para vogais, leitura e escrita.",
  },
  {
    pergunta: "Preciso conhecer outro idioma para aprender hebraico?",
    resposta:
      "Não. O conteúdo da plataforma é apresentado em português, sem exigir conhecimento prévio de outros idiomas.",
  },
  {
    pergunta: "Qual é a diferença entre hebraico moderno e bíblico?",
    resposta:
      "O hebraico moderno é utilizado atualmente em Israel. O hebraico bíblico corresponde a formas históricas da língua presentes nos textos antigos. Existem diferenças de vocabulário, gramática e pronúncia.",
  },
  {
    pergunta: "O que é niqqud?",
    resposta:
      "Niqqud é o conjunto de sinais gráficos que indicam as vogais e outros aspectos da pronúncia. Esses sinais aparecem principalmente em materiais didáticos e textos tradicionais.",
  },
  {
    pergunta: "O hebraico é escrito da direita para a esquerda?",
    resposta:
      "Sim. A escrita hebraica segue a direção da direita para a esquerda, tanto na leitura quanto na escrita.",
  },
  {
    pergunta: "Qual é a diferença entre letras de imprensa e cursivas?",
    resposta:
      "As letras de imprensa são utilizadas em livros, textos digitais e materiais impressos. As letras cursivas são formas manuscritas usadas na escrita à mão.",
  },
  {
    pergunta: "Posso acompanhar meu progresso?",
    resposta:
      "A página de progresso apresenta a estrutura dos indicadores que serão utilizados. O registro automático dependerá da implementação do sistema de atividades.",
  },
];

export default function Duvidas() {
  return (
    <main className="min-h-screen bg-[#fbfaf7] px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#c66b3d]">
          Central de ajuda
        </p>

        <h1 className="text-4xl font-bold text-[#26364d] mt-3">
          Dúvidas frequentes
        </h1>

        <p className="text-gray-600 mt-4 max-w-2xl leading-relaxed">
          Encontre respostas sobre o idioma hebraico e o funcionamento da plataforma.
        </p>

        <section className="mt-10 space-y-4">
          {perguntas.map((item, index) => (
            <details
              key={index}
              className="group bg-white border border-gray-200 rounded-xl p-6"
            >
              <summary className="cursor-pointer list-none flex items-center justify-between gap-4 font-semibold text-[#26364d]">
                {item.pergunta}
                <span className="text-[#c66b3d] text-xl group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>

              <p className="text-gray-600 leading-relaxed mt-4">
                {item.resposta}
              </p>
            </details>
          ))}
        </section>

        <section className="mt-12 bg-[#26364d] text-white rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold">
            Não encontrou sua resposta?
          </h2>

          <p className="text-white/75 mt-3">
            Envie sua dúvida pela página de contato.
          </p>

          <Link
            href="/contato"
            className="inline-block mt-6 rounded-lg bg-white text-[#26364d] px-6 py-3 font-semibold hover:bg-gray-100 transition"
          >
            Entrar em contato
          </Link>
        </section>
      </div>
    </main>
  );
}
