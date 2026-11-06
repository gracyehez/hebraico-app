
const letras = [
  { letra: "א", nome: "Alef", som: "Sem som próprio fixo", transliteracao: "ʾ" },
  { letra: "ב", nome: "Bet", som: "B", transliteracao: "B" },
  { letra: "ג", nome: "Gimel", som: "G", transliteracao: "G" },
  { letra: "ד", nome: "Dalet", som: "D", transliteracao: "D" },
  { letra: "ה", nome: "He", som: "H aspirado", transliteracao: "H" },
  { letra: "ו", nome: "Vav", som: "V / O / U", transliteracao: "V" },
  { letra: "ז", nome: "Zayin", som: "Z", transliteracao: "Z" },
  { letra: "ח", nome: "Chet", som: "Som gutural", transliteracao: "Ch" },
  { letra: "ט", nome: "Tet", som: "T", transliteracao: "T" },
  { letra: "י", nome: "Yod", som: "Y", transliteracao: "Y" },
  { letra: "כ", nome: "Kaf", som: "K / Ch", transliteracao: "K" },
  { letra: "ל", nome: "Lamed", som: "L", transliteracao: "L" },
  { letra: "מ", nome: "Mem", som: "M", transliteracao: "M" },
  { letra: "נ", nome: "Nun", som: "N", transliteracao: "N" },
  { letra: "ס", nome: "Samech", som: "S", transliteracao: "S" },
  { letra: "ע", nome: "Ayin", som: "Gutur al histórico; geralmente silencioso no hebraico moderno", transliteracao: "ʿ" },
  { letra: "פ", nome: "Pe", som: "P / F", transliteracao: "P" },
  { letra: "צ", nome: "Tsadi", som: "TS", transliteracao: "Ts" },
  { letra: "ק", nome: "Qof", som: "K", transliteracao: "Q" },
  { letra: "ר", nome: "Resh", som: "R", transliteracao: "R" },
  { letra: "ש", nome: "Shin", som: "SH", transliteracao: "Sh" },
  { letra: "ת", nome: "Tav", som: "T", transliteracao: "T" },
];

const finais = [
  { normal: "כ", final: "ך", nome: "Kaf" },
  { normal: "מ", final: "ם", nome: "Mem" },
  { normal: "נ", final: "ן", nome: "Nun" },
  { normal: "פ", final: "ף", nome: "Pe" },
  { normal: "צ", final: "ץ", nome: "Tsadi" },
];

export default function Vocabulario() {
  return (
    <main className="min-h-screen bg-[#fbfaf7] px-6 py-14">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#c66b3d]">
          Biblioteca de hebraico
        </p>

        <h1 className="text-4xl font-bold text-[#26364d] mt-3">
          Alfabeto e vocabulário
        </h1>

        <p className="text-gray-600 mt-4 max-w-3xl leading-relaxed">
          Conheça as 22 letras do alfabeto hebraico, seus nomes, sons e
          diferentes formas de escrita.
        </p>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-[#26364d] mb-6">
            As 22 letras hebraicas
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {letras.map((item) => (
              <article
                key={item.nome}
                className="bg-white border border-gray-200 rounded-xl p-5"
              >
                <div className="text-5xl text-center text-[#26364d] py-3" dir="rtl">
                  {item.letra}
                </div>
                <h3 className="font-bold text-lg text-[#26364d] text-center">
                  {item.nome}
                </h3>
                <p className="text-sm text-gray-600 text-center mt-2">
                  {item.som}
                </p>
                <p className="text-xs text-[#c66b3d] text-center mt-2">
                  {item.transliteracao}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-14 bg-white border border-gray-200 rounded-2xl p-7">
          <h2 className="text-2xl font-bold text-[#26364d]">
            As cinco letras finais
          </h2>
          <p className="text-gray-600 mt-2 mb-6">
            Algumas letras mudam de formato quando aparecem no final de uma palavra.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-5">
            {finais.map((item) => (
              <div key={item.nome} className="text-center">
                <div className="flex justify-center gap-5 text-4xl text-[#26364d]" dir="rtl">
                  <span>{item.normal}</span>
                  <span>{item.final}</span>
                </div>
                <p className="text-sm font-semibold mt-3">{item.nome}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 bg-[#26364d] text-white rounded-2xl p-8">
          <h2 className="text-2xl font-bold">Um primeiro vocabulário</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-7">
            {[
              ["שלום", "Shalom", "Olá / Paz"],
              ["תודה", "Toda", "Obrigado(a)"],
              ["מים", "Mayim", "Água"],
              ["בית", "Bayit", "Casa"],
            ].map(([hebraico, leitura, significado]) => (
              <div key={hebraico} className="text-center">
                <p className="text-3xl" dir="rtl">{hebraico}</p>
                <p className="font-semibold mt-2">{leitura}</p>
                <p className="text-sm text-white/70">{significado}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
