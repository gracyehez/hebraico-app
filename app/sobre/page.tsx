
import Link from "next/link";

export default function Sobre() {
  return (
    <main className="min-h-screen bg-[#fbfaf7] px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#c66b3d]">
          Sobre a plataforma
        </p>

        <h1 className="text-4xl font-bold text-[#26364d] mt-3">
          Aprender hebraico é descobrir um universo
        </h1>

        <p className="text-gray-600 mt-6 max-w-3xl leading-relaxed text-lg">
          O Hebraico App é uma plataforma de aprendizagem criada para aproximar
          estudantes da língua hebraica, sua história e suas expressões culturais.
        </p>

        <section className="grid gap-6 md:grid-cols-2 mt-12">
          <article className="bg-white border border-gray-200 rounded-2xl p-7">
            <h2 className="text-xl font-bold text-[#26364d]">
              Nossa proposta
            </h2>
            <p className="text-gray-600 mt-3 leading-relaxed">
              Oferecer uma experiência de aprendizagem organizada, acessível e
              progressiva, respeitando as particularidades da língua hebraica.
            </p>
          </article>

          <article className="bg-white border border-gray-200 rounded-2xl p-7">
            <h2 className="text-xl font-bold text-[#26364d]">
              Nossa abordagem
            </h2>
            <p className="text-gray-600 mt-3 leading-relaxed">
              Integrar leitura, escrita, pronúncia, vocabulário, história e
              cultura em um percurso de aprendizagem conectado.
            </p>
          </article>
        </section>

        <section className="mt-10 bg-white border border-gray-200 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-[#26364d]">
            O que você encontrará
          </h2>

          <ul className="mt-6 space-y-4 text-gray-600">
            <li>• Alfabeto hebraico e sinais vocálicos (niqqud).</li>
            <li>• Letras de imprensa e escrita cursiva.</li>
            <li>• Hebraico moderno, bíblico e paleo-hebraico.</li>
            <li>• Leitura, escrita, vocabulário e pronúncia.</li>
            <li>• História, tradições e cultura de Israel e do povo judeu.</li>
          </ul>
        </section>

        <div className="mt-10">
          <Link
            href="/aprender"
            className="inline-block rounded-lg bg-[#26364d] text-white px-6 py-3 font-semibold hover:bg-[#354a66] transition"
          >
            Conhecer o conteúdo
          </Link>
        </div>
      </div>
    </main>
  );
}
