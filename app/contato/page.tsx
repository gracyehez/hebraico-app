
import Link from "next/link";

export default function Contato() {
  return (
    <main className="min-h-screen bg-[#fbfaf7] px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#c66b3d]">
          Fale conosco
        </p>

        <h1 className="text-4xl font-bold text-[#26364d] mt-3">
          Entre em contato
        </h1>

        <p className="text-gray-600 mt-4 max-w-2xl leading-relaxed">
          Tem dúvidas, sugestões ou encontrou algum problema na plataforma?
          Envie sua mensagem.
        </p>

        <form className="mt-10 bg-white border border-gray-200 rounded-2xl p-8 space-y-5">
          <div>
            <label htmlFor="nome" className="block text-sm font-medium mb-2">
              Nome
            </label>
            <input
              id="nome"
              name="nome"
              type="text"
              required
              placeholder="Seu nome"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-[#c66b3d]"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              E-mail
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="seu@email.com"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-[#c66b3d]"
            />
          </div>

          <div>
            <label htmlFor="assunto" className="block text-sm font-medium mb-2">
              Assunto
            </label>
            <select
              id="assunto"
              name="assunto"
              required
              defaultValue=""
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-[#c66b3d]"
            >
              <option value="" disabled>Selecione um assunto</option>
              <option value="duvida">Dúvida sobre a plataforma</option>
              <option value="sugestao">Sugestão</option>
              <option value="problema">Problema técnico</option>
              <option value="outro">Outro assunto</option>
            </select>
          </div>

          <div>
            <label htmlFor="mensagem" className="block text-sm font-medium mb-2">
              Mensagem
            </label>
            <textarea
              id="mensagem"
              name="mensagem"
              required
              rows={5}
              placeholder="Escreva sua mensagem..."
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-[#c66b3d]"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-[#26364d] text-white font-semibold py-3 hover:bg-[#354a66] transition"
          >
            Enviar mensagem
          </button>

          <p className="text-xs text-gray-500">
            O envio de mensagens será ativado quando o sistema de contato estiver implementado.
          </p>
        </form>

        <div className="mt-8 text-center">
          <Link href="/duvidas" className="text-[#c66b3d] font-semibold hover:underline">
            Consulte também as dúvidas frequentes
          </Link>
        </div>
      </div>
    </main>
  );
}
