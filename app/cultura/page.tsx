
const temas = [
  {
    numero: "01",
    titulo: "História de Israel",
    descricao:
      "Conheça os principais períodos históricos, desde a Antiguidade até a formação do Estado moderno de Israel.",
  },
  {
    numero: "02",
    titulo: "História do povo judeu",
    descricao:
      "Explore a diáspora, as comunidades judaicas e a preservação da língua e da identidade cultural.",
  },
  {
    numero: "03",
    titulo: "Bíblia e textos antigos",
    descricao:
      "Conheça o hebraico bíblico, textos históricos, narrativas e sua influência na cultura.",
  },
  {
    numero: "04",
    titulo: "Festas e tradições",
    descricao:
      "Aprenda sobre Shabat, Pessach, Rosh Hashaná, Yom Kippur e outras celebrações.",
  },
  {
    numero: "05",
    titulo: "Música, arte e literatura",
    descricao:
      "Descubra artistas, escritores, músicos e manifestações culturais israelenses e judaicas.",
  },
  {
    numero: "06",
    titulo: "Israel contemporâneo",
    descricao:
      "Conheça a sociedade, os idiomas, as cidades, a gastronomia e a diversidade cultural de Israel.",
  },
];

export default function Cultura() {
  return (
    <main className="min-h-screen bg-[#fbfaf7] px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#c66b3d]">
          Muito além do idioma
        </p>

        <h1 className="text-4xl font-bold text-[#26364d] mt-3">
          Cultura e história
        </h1>

        <p className="text-gray-600 mt-4 max-w-3xl leading-relaxed">
          Aprender hebraico também é conhecer as histórias, tradições,
          transformações e expressões culturais dos povos que utilizam essa língua.
        </p>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 mt-12">
          {temas.map((tema) => (
            <article
              key={tema.numero}
              className="bg-white border border-gray-200 rounded-2xl p-7 hover:shadow-md transition"
            >
              <span className="text-sm font-bold text-[#c66b3d]">
                {tema.numero}
              </span>

              <h2 className="text-xl font-bold text-[#26364d] mt-4">
                {tema.titulo}
              </h2>

              <p className="text-gray-600 mt-3 leading-relaxed">
                {tema.descricao}
              </p>
            </article>
          ))}
        </div>

        <section className="mt-12 bg-[#26364d] text-white rounded-2xl p-8 md:p-10">
          <p className="text-sm uppercase tracking-widest text-white/60">
            Uma língua com milhares de anos de história
          </p>

          <p className="text-5xl text-center mt-6" dir="rtl">
            עם ישראל חי
          </p>

          <p className="text-center mt-4 text-white/80">
            Am Yisrael Chai — O povo de Israel vive.
          </p>
        </section>
      </div>
    </main>
  );
}
