
import Link from "next/link";

const indicadores = [
  { titulo: "Lições concluídas", valor: "0", detalhe: "de 50 lições" },
  { titulo: "Vocabulário", valor: "0", detalhe: "palavras aprendidas" },
  { titulo: "Tempo de estudo", valor: "0 min", detalhe: "tempo acumulado" },
];

export default function Progresso() {
  return (
    <main className="min-h-screen bg-[#fbfaf7] px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#c66b3d]">
          Sua aprendizagem
        </p>

        <h1 className="text-4xl font-bold text-[#26364d] mt-3">
          Meu progresso
        </h1>

        <p className="text-gray-600 mt-4 max-w-2xl">
          Acompanhe sua evolução no estudo do hebraico. Seus indicadores serão
          atualizados quando as atividades e o sistema de registro estiverem implementados.
        </p>

        <section className="grid gap-5 sm:grid-cols-3 mt-10">
          {indicadores.map((item) => (
            <article
              key={item.titulo}
              className="bg-white border border-gray-200 rounded-2xl p-6"
            >
              <p className="text-sm text-gray-500">{item.titulo}</p>
              <p className="text-4xl font-bold text-[#26364d] mt-3">
                {item.valor}
              </p>
              <p className="text-sm text-gray-500 mt-2">{item.detalhe}</p>
            </article>
          ))}
        </section>

        <section className="mt-10 bg-white border border-gray-200 rounded-2xl p-7">
          <h2 className="text-xl font-bold text-[#26364d]">
            Sua jornada de aprendizagem
          </h2>

          <div className="mt-6 space-y-5">
            {[
              "Reconhecimento do alfabeto",
              "Vogais e sinais de niqqud",
              "Leitura de palavras",
              "Escrita em hebraico",
              "Vocabulário e conversação",
            ].map((etapa, index) => (
              <div key={etapa}>
                <div className="flex justify-between gap-3 text-sm">
                  <span className="text-gray-700">{etapa}</span>
                  <span className="text-gray-400">Não iniciado</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full mt-2">
                  <div className="h-2 w-0 bg-[#c66b3d] rounded-full" />
                </div>
              </div>
            ))}
          </div>
        </section>

        <Link
          href="/aprender"
          className="inline-block mt-8 rounded-lg bg-[#26364d] text-white px-6 py-3 font-semibold hover:bg-[#354a66] transition"
        >
          Continuar aprendendo
        </Link>
      </div>
    </main>
  );
}
